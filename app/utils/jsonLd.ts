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

export interface SchemaPlanPrice {
  name: string
  monthly: number
  annual: number
}

const organizationName = 'SUB100 Sistemas'
const organizationAlternateName = 'SUBSEE'
const siteName = 'SUBSEE'
const productAlternateName = 'SUBSEE on'
const language = 'pt-BR'
const currency = 'BRL'

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
const softwareId = (siteUrl: string) => `${siteUrl}/#software`

export const parseBrlAmount = (text: string) => Number(text.replace(/[^\d,]/g, '').replace(',', '.'))

export const buildOrganization = ({ siteUrl }: SchemaContext): SchemaNode => ({
  '@type': 'Organization',
  '@id': organizationId(siteUrl),
  name: organizationName,
  alternateName: organizationAlternateName,
  url: `${siteUrl}/`,
  logo: `${siteUrl}${organizationLogoPath}`,
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

const buildPlanOffers = (context: SchemaContext, plans: SchemaPlanPrice[]): SchemaNode[] =>
  plans.flatMap((plan) => [
    { label: 'mensal', price: plan.monthly, description: 'Valor por mês, mais opcionais' },
    { label: 'anual', price: plan.annual, description: 'Valor por mês no plano anual, mais opcionais' }
  ].map((option) => ({
    '@type': 'Offer',
    name: `Plano ${plan.name} ${option.label}`,
    description: option.description,
    url: context.url,
    price: option.price,
    priceCurrency: currency,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: option.price,
      priceCurrency: currency,
      unitCode: 'MON'
    }
  })))

export const buildSoftwareApplication = (context: SchemaContext, plans?: SchemaPlanPrice[]): SchemaNode => ({
  '@type': 'SoftwareApplication',
  '@id': softwareId(context.siteUrl),
  name: siteName,
  alternateName: productAlternateName,
  url: `${context.siteUrl}/`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: language,
  publisher: { '@id': organizationId(context.siteUrl) },
  ...(plans?.length ? { offers: buildPlanOffers(context, plans) } : {})
})

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
