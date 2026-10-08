<script setup lang="ts">
const title = 'Site para Loteadoras: Lotes e Lançamentos | SUBSEE'
const description =
  'Site para loteadoras que apresenta lotes e lançamentos de forma completa, com integração ao CRM SUBSEE e ao Sistema SGL. Em breve.'
const keywords = 'site para loteadoras, site de loteamento, site para lançamento de lotes, Sistema SGL'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Site para Loteadoras'] })
</script>

<template>
  <main>
    <SiteLoteadorasHero />
    <SiteLoteadorasTechnology />
    <SiteLoteadorasComingSoon />
    <SiteLoteadorasOtherModules />
    <SiteLoteadorasFaq />
    <SiteLoteadorasSglOffer />
  </main>
</template>
