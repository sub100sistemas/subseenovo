export const productionSiteUrl = 'https://subsee.com.br'

export const noindexPaths = ['/inscreva-se/']

export const normalizeSiteUrl = (url: string) => url.trim().replace(/\/+$/, '')

export const isProductionSite = (url: string) => normalizeSiteUrl(url) === productionSiteUrl

export const auditSiteUrl = 'https://subseenovo.pages.dev'

export const isAuditSite = (url: string) => normalizeSiteUrl(url) === auditSiteUrl

export const isIndexableSite = (url: string) => isProductionSite(url) || isAuditSite(url)

export const indexRobotsContent = (url: string) => (isAuditSite(url) ? 'index,follow' : 'index, follow')

export const withTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`)

export const isNoindexPath = (path: string) => noindexPaths.includes(withTrailingSlash(path))
