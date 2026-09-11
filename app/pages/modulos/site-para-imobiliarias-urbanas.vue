<script setup lang="ts">
const title = 'SUBSEE | Site para Imobiliárias Urbanas — Apresente imóveis com profissionalismo'
const description =
  'Site moderno para imobiliárias urbanas: publique imóveis residenciais, comerciais, terrenos e lançamentos com fichas completas, tradução automática e integração com portais.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
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
