import { readdirSync, readFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { defineNuxtModule, useLogger } from 'nuxt/kit'
import { buildSitemapEntries, isIndexableSite, isNoindexPath, normalizeSiteUrl, withTrailingSlash } from '../app/data/seo'

const collectPageFiles = (dir: string): string[] =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name)
    return entry.isDirectory() ? collectPageFiles(fullPath) : entry.name.endsWith('.vue') ? [fullPath] : []
  })

const toRoute = (pagesDir: string, file: string) => {
  const segments = relative(pagesDir, file).replace(/\.vue$/, '').split(sep)
  if (segments[segments.length - 1] === 'index') segments.pop()
  return withTrailingSlash(`/${segments.join('/')}`)
}

export default defineNuxtModule({
  meta: { name: 'seo' },
  setup(_options, nuxt) {
    const logger = useLogger('seo')
    const siteUrl = normalizeSiteUrl(process.env.NUXT_PUBLIC_SITE_URL ?? String(nuxt.options.runtimeConfig.public.siteUrl))
    const production = isIndexableSite(siteUrl)

    const pagesDir = join(nuxt.options.srcDir, nuxt.options.dir.pages)
    const sitemapRoutes = collectPageFiles(pagesDir)
      .map((file) => ({ file, route: toRoute(pagesDir, file) }))
      .filter(({ file, route }) => !/[[\]]/.test(file) && !isNoindexPath(route))
      .map(({ route }) => route)
      .sort()

    const lastmods = JSON.parse(readFileSync(join(nuxt.options.srcDir, 'data', 'sitemapLastmod.json'), 'utf8'))
    const sitemapEntries = buildSitemapEntries(sitemapRoutes, lastmods, new Date().toISOString().slice(0, 10))
    const datedCount = sitemapEntries.filter((entry) => entry.lastmod).length

    logger.info(
      production
        ? `Produção (${siteUrl}): ${sitemapEntries.length} URLs no sitemap, ${datedCount} com lastmod`
        : `NÃO produção (siteUrl=${siteUrl}): noindex em todas as páginas e sem sitemap`
    )

    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.virtual = {
        ...nitroConfig.virtual,
        '#seo-routes': () => `export default ${JSON.stringify(sitemapEntries)}`
      }
      nitroConfig.prerender = {
        ...nitroConfig.prerender,
        routes: [...(nitroConfig.prerender?.routes ?? []), '/robots.txt', ...(production ? ['/sitemap.xml'] : [])]
      }
    })
  }
})
