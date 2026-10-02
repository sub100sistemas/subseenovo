export const productionSiteUrl = 'https://subsee.com.br'

export const noindexPaths = ['/inscreva-se/']

export const normalizeSiteUrl = (url: string) => url.trim().replace(/\/+$/, '')

export const isProductionSite = (url: string) => normalizeSiteUrl(url) === productionSiteUrl

export const withTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`)

export const isNoindexPath = (path: string) => noindexPaths.includes(withTrailingSlash(path))
