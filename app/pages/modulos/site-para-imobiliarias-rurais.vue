<script setup lang="ts">
const title = 'SUBSEE | Site para Imobiliárias Rurais — Fazendas, sítios e chácaras com anúncio completo'
const description =
  'Site para imobiliárias e corretores rurais: divulgue fazendas, sítios e chácaras com dados georreferenciados, solo, bioma e pluviometria, com tradução automática e alcance na América do Sul.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <SiteRuralHero />
    <SiteRuralTechnology />
    <SiteRuralListings />
    <SiteRuralPropertyDetails />
    <SiteRuralInternational />
    <SiteRuralCustomization />
    <SiteRuralTools />
    <SiteRuralSouthAmerica />
    <SiteRuralTestimonials />
    <SiteRuralOtherModules />
    <SiteRuralFaq />
  </main>
</template>
