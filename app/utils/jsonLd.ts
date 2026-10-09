import { socialImage } from '~/data/seo'

export type SchemaNode = Record<string, unknown>

export interface SchemaContext {
  siteUrl: string
  path: string
  url: string
}

export interface SchemaFaqEntry {
  question: string
  answer: string
}

const organizationName = 'SUB100 Sistemas'
const organizationAlternateName = 'SUBSEE'
const siteName = 'SUBSEE'
const breadcrumbHomeName = 'Página inicial'
const language = 'pt-BR'

const organizationSameAs = [
  'https://www.facebook.com/sub100brasil',
  'https://www.instagram.com/sub100brasil/',
  'https://www.linkedin.com/company/sub100/',
  'https://www.youtube.com/@subsee',
  'https://blog.sub100sistemas.com.br/'
]

const organizationAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Rua Machado de Assis, 621, Zona 06',
  addressLocality: 'Maringá',
  addressRegion: 'PR',
  postalCode: '87015-580',
  addressCountry: 'BR'
}

const organizationTelephone = '+55-44-3032-5200'
const organizationLogoPath = '/icons/logo-sub100-imobiliarias.svg'

const organizationId = (siteUrl: string) => `${siteUrl}/#organization`
const websiteId = (siteUrl: string) => `${siteUrl}/#website`

export const buildOrganization = ({ siteUrl }: SchemaContext): SchemaNode => ({
  '@type': 'Organization',
  '@id': organizationId(siteUrl),
  name: organizationName,
  alternateName: organizationAlternateName,
  url: `${siteUrl}/`,
  logo: `${siteUrl}${organizationLogoPath}`,
  image: {
    '@type': 'ImageObject',
    url: `${siteUrl}${socialImage.path}`,
    width: socialImage.width,
    height: socialImage.height
  },
  address: organizationAddress,
  telephone: organizationTelephone,
  sameAs: organizationSameAs
})

export const buildWebSite = ({ siteUrl }: SchemaContext): SchemaNode => ({
  '@type': 'WebSite',
  '@id': websiteId(siteUrl),
  url: `${siteUrl}/`,
  name: siteName,
  inLanguage: language,
  publisher: { '@id': organizationId(siteUrl) }
})

export const buildWebPage = (context: SchemaContext, name: string, description: string): SchemaNode => ({
  '@type': 'WebPage',
  '@id': `${context.url}#webpage`,
  url: context.url,
  name,
  description,
  inLanguage: language,
  isPartOf: { '@id': websiteId(context.siteUrl) }
})

export const buildBreadcrumbList = ({ siteUrl, url }: SchemaContext, trail: string[]): SchemaNode => {
  const names = [breadcrumbHomeName, ...trail]
  const lastIndex = names.length - 1

  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: names.map((name, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      ...(index === 0 ? { item: `${siteUrl}/` } : index === lastIndex ? { item: url } : {})
    }))
  }
}

export const buildFaqPage = (context: SchemaContext, faqs: SchemaFaqEntry[]): SchemaNode | undefined =>
  faqs.length
    ? {
        '@type': 'FAQPage',
        '@id': `${context.url}#faq`,
        url: context.url,
        inLanguage: language,
        mainEntityOfPage: { '@id': `${context.url}#webpage` },
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      }
    : undefined

export const serializeJsonLd = (graph: SchemaNode[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')
