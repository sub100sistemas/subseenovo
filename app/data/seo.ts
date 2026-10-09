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

export interface SitemapEntry {
  route: string
  lastmod?: string
}

const lastmodPattern = /^\d{4}-\d{2}-\d{2}$/

const isCalendarDate = (value: string) => {
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

const lastmodProblem = (route: string, value: unknown, routes: string[], today: string) => {
  if (!routes.includes(route)) return `${route}: rota fora do sitemap`
  if (typeof value !== 'string' || !lastmodPattern.test(value)) return `${route}: data fora do formato YYYY-MM-DD`
  if (!isCalendarDate(value)) return `${route}: data inexistente (${value})`
  if (value > today) return `${route}: data futura (${value})`
  return undefined
}

export const buildSitemapEntries = (routes: string[], lastmods: Record<string, unknown>, today: string): SitemapEntry[] => {
  const problems = Object.entries(lastmods)
    .map(([route, value]) => lastmodProblem(route, value, routes, today))
    .filter((problem): problem is string => Boolean(problem))

  if (problems.length) {
    throw new Error(`sitemapLastmod.json inválido:\n${problems.join('\n')}`)
  }

  return routes.map((route) => {
    const lastmod = lastmods[route]
    return typeof lastmod === 'string' ? { route, lastmod } : { route }
  })
}
