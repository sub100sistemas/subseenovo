import {
  indexRobotsContent,
  isIndexableSite,
  isNoindexPath,
  normalizeSiteUrl,
  routeCanonicalPath,
  socialImage,
  socialLocale,
  socialSiteName
} from '~/data/seo'

export default defineNuxtPlugin(() => {
  const route = useRoute()
  const siteUrl = normalizeSiteUrl(String(useRuntimeConfig().public.siteUrl))
  const production = isIndexableSite(siteUrl)

  useHead(() => {
    const pageExists = route.matched.length > 0
    const path = routeCanonicalPath(route)
    const indexable = pageExists && !isNoindexPath(path)

    if (!production) {
      const nonProductionLinks = indexable ? { link: [{ rel: 'canonical', href: `${siteUrl}${path}` }] } : {}
      return { ...nonProductionLinks, meta: [{ name: 'robots', content: 'noindex, nofollow' }] }
    }

    if (!pageExists) {
      return { meta: [{ name: 'robots', content: 'noindex, follow' }] }
    }

    const imageUrl = `${siteUrl}${socialImage.path}`
    const socialMeta = [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: socialSiteName },
      { property: 'og:locale', content: socialLocale },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: String(socialImage.width) },
      { property: 'og:image:height', content: String(socialImage.height) },
      { property: 'og:image:alt', content: socialImage.alt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: socialImage.alt }
    ]

    if (!indexable) {
      return { meta: [{ name: 'robots', content: 'noindex, follow' }, ...socialMeta] }
    }

    const url = `${siteUrl}${path}`
    return {
      link: [{ rel: 'canonical', href: url }],
      meta: [
        { name: 'robots', content: indexRobotsContent(siteUrl) },
        { property: 'og:url', content: url },
        ...socialMeta
      ]
    }
  })
})
