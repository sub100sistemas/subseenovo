<script setup lang="ts">
useSeoMeta({
  title: 'SUBSEE | CRM Imobiliário completo para imobiliárias e corretores',
  description:
    'CRM SUBSEE: gestão de imóveis urbanos, rurais, temporada e loteamentos, com site, integrações e automações para imobiliárias e corretores.',
  ogTitle: 'SUBSEE | CRM Imobiliário completo para imobiliárias e corretores',
  ogDescription:
    'CRM SUBSEE: gestão de imóveis urbanos, rurais, temporada e loteamentos, com site, integrações e automações para imobiliárias e corretores.'
})
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
