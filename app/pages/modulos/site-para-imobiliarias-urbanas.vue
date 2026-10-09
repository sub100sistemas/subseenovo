<script setup lang="ts">
const title = 'Site para Imobiliárias Urbanas com Portais | SUBSEE'
const description =
  'Site para imobiliárias urbanas com fichas completas de imóveis, tradução automática e integração com o CRM e com os principais portais.'
const keywords = 'site para imobiliárias, site imobiliário urbano, site integrado a portais, site com CRM'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Site para Imobiliárias Urbanas'] })
</script>

<template>
  <main>
    <SiteUrbanoHero />
    <SiteUrbanoTechnology />
    <SiteUrbanoListings />
    <SiteUrbanoPropertySheet />
    <SiteUrbanoInternational />
    <SiteUrbanoCustomization />
    <SiteUrbanoTools />
    <SiteUrbanoPropertyTypes />
    <SiteUrbanoOtherModules />
    <SiteUrbanoTestimonials />
    <SiteUrbanoFaq />
  </main>
</template>
