export const productionSiteUrl = 'https://subsee.com.br'

export const socialSiteName = 'SUBSEE'

export const socialLocale = 'pt_BR'

export const socialImage = {
  path: '/images/og-subsee.png',
  width: 1200,
  height: 630,
  alt: 'Logotipos da SUB100 Imobiliárias e do SUBSEE on'
}

export const noindexPaths = [
  '/testar-gratis/',
  '/agendar-demonstracao/',
  '/inscreva-se/',
  '/testar-gratis/obrigado/',
  '/agendar-demonstracao/obrigado/',
  '/inscreva-se/obrigado/'
]

export const normalizeSiteUrl = (url: string) => url.trim().replace(/\/+$/, '')

export const isProductionSite = (url: string) => normalizeSiteUrl(url) === productionSiteUrl

export const auditSiteUrl = 'https://subseenovo.pages.dev'

export const isAuditSite = (url: string) => normalizeSiteUrl(url) === auditSiteUrl

export const isIndexableSite = (url: string) => isProductionSite(url) || isAuditSite(url)

export const indexRobotsContent = (url: string) => (isAuditSite(url) ? 'index,follow' : 'index, follow')

export const withTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`)

export const isNoindexPath = (path: string) => noindexPaths.includes(withTrailingSlash(path))

export const routeCanonicalPath = (route: { path: string; matched: { path: string }[] }) =>
  withTrailingSlash(route.matched.at(-1)?.path ?? route.path)
