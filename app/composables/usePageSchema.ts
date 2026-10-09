import { isIndexableSite, isNoindexPath, normalizeSiteUrl, routeCanonicalPath } from '~/data/seo'
import {
  buildBreadcrumbList,
  buildFaqPage,
  buildOrganization,
  buildWebPage,
  buildWebSite,
  serializeJsonLd,
  type SchemaContext,
  type SchemaFaqEntry,
  type SchemaNode
} from '~/utils/jsonLd'

interface PageSchemaOptions {
  title: string
  description: string
  faqs?: SchemaFaqEntry[]
  breadcrumb?: string[]
}

type SchemaGraphHolder = Record<string, SchemaNode[] | undefined>

const graphKey = '_jsonLdGraph'

function useSchemaContext(): SchemaContext | undefined {
  const route = useRoute()
  const siteUrl = normalizeSiteUrl(String(useRuntimeConfig().public.siteUrl))
  const path = routeCanonicalPath(route)
  const enabled = route.matched.length > 0 && isIndexableSite(siteUrl) && !isNoindexPath(path)

  return enabled ? { siteUrl, path, url: `${siteUrl}${path}` } : undefined
}

export function usePageSchema({ title, description, faqs = [], breadcrumb = [] }: PageSchemaOptions) {
  const context = useSchemaContext()
  if (!context) {
    return
  }

  const faqPage = buildFaqPage(context, faqs)
  const breadcrumbList = breadcrumb.length ? buildBreadcrumbList(context, breadcrumb) : undefined
  const graph = shallowReactive<SchemaNode[]>([
    buildOrganization(context),
    buildWebSite(context),
    buildWebPage(context, title, description),
    ...(breadcrumbList ? [breadcrumbList] : []),
    ...(faqPage ? [faqPage] : [])
  ])
  ;(useNuxtApp() as unknown as SchemaGraphHolder)[graphKey] = graph

  useHead(() => ({
    script: [{ key: 'json-ld', type: 'application/ld+json', innerHTML: serializeJsonLd(graph) }]
  }))
}

export function useSchemaNode(build: (context: SchemaContext) => SchemaNode | undefined) {
  const context = useSchemaContext()
  const graph = (useNuxtApp() as unknown as SchemaGraphHolder)[graphKey]
  const node = context && graph ? build(context) : undefined

  if (node) {
    graph?.push(node)
  }
}
