import entries from '#seo-routes'
import { isIndexableSite, normalizeSiteUrl, type SitemapEntry } from '../../app/data/seo'

export default defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(String(useRuntimeConfig(event).public.siteUrl))

  if (!isIndexableSite(siteUrl)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }

  const urls = (entries as SitemapEntry[])
    .map(({ route, lastmod }) => `  <url><loc>${siteUrl}${route}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
    .join('\n')
  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
})
