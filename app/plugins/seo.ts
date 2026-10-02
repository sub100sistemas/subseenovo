import { indexRobotsContent, isIndexableSite, isNoindexPath, normalizeSiteUrl, withTrailingSlash } from '~/data/seo'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const siteUrl = normalizeSiteUrl(String(useRuntimeConfig().public.siteUrl))
  const production = isIndexableSite(siteUrl)

  useHead(() => {
    const pageExists = route.matched.length > 0
    const path = withTrailingSlash(route.path)
    const indexable = pageExists && !isNoindexPath(path)

    if (!production) {
      const nonProductionLinks = indexable ? { link: [{ rel: 'canonical', href: `${siteUrl}${path}` }] } : {}
      return { ...nonProductionLinks, meta: [{ name: 'robots', content: 'noindex, nofollow' }] }
    }

    if (!pageExists) {
      return { meta: [{ name: 'robots', content: 'noindex, nofollow' }] }
    }

    if (!indexable) {
      return { meta: [{ name: 'robots', content: 'noindex, follow' }] }
    }

    const url = `${siteUrl}${path}`
    return {
      link: [{ rel: 'canonical', href: url }],
      meta: [
        { name: 'robots', content: indexRobotsContent(siteUrl) },
        { property: 'og:url', content: url }
      ]
    }
  })
})
