import { isIndexableSite, normalizeSiteUrl } from '../../app/data/seo'

export default defineEventHandler((event) => {
  const siteUrl = normalizeSiteUrl(String(useRuntimeConfig(event).public.siteUrl))
  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  if (!isIndexableSite(siteUrl)) {
    return 'User-agent: *\nDisallow: /\n'
  }

  return `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
})
