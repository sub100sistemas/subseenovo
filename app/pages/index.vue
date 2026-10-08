<script setup lang="ts">
import { homeFaqs } from '~/data/homeFaqs'

const title = 'CRM Imobiliário para Imobiliárias e Corretores | SUBSEE'
const description =
  'Gerencie imóveis, leads e negociações em um CRM imobiliário completo, com site, integrações e automações para imobiliárias e corretores.'
const keywords = 'CRM imobiliário, software imobiliário, sistema para imobiliárias, gestão imobiliária'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, faqs: homeFaqs, software: true })
</script>

<template>
  <main>
    <HeroMain />
    <LazyHeroUrbano hydrate-on-visible />
    <LazyHeroRural hydrate-on-visible />
    <LazyHeroTemporada hydrate-on-visible />
    <LazyHeroWebsite hydrate-on-visible />
    <LazyHeroCrm hydrate-on-visible />
    <LazyHeroIntegrations hydrate-on-visible />
    <LazyHeroTestimonials hydrate-on-visible />
    <LazyHeroFaq hydrate-on-visible />
    <LazyHeroPricing hydrate-on-visible />
    <LazyHeroBlog hydrate-on-visible />
    <LazyHeroOtherProducts hydrate-on-visible />
  </main>
</template>
