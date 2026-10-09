<script setup lang="ts">
const title = 'Site para Imobiliárias Rurais: Fazendas e Sítios | SUBSEE'
const description =
  'Site para imobiliárias rurais para divulgar fazendas, sítios e chácaras com dados georreferenciados, tradução automática e alcance na América do Sul.'
const keywords = 'site para imobiliária rural, site para vender fazendas, anúncio de imóveis rurais, site imobiliário rural'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Site para Imobiliárias Rurais'] })
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
