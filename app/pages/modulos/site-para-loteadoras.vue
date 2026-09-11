<script setup lang="ts">
const title = 'SUBSEE | Site para Loteadoras — Presença digital para lotes e lançamentos'
const description =
  'Site institucional para loteadoras, com apresentação completa de lotes e lançamentos e integração com o CRM SUBSEE e o Sistema SGL.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
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
