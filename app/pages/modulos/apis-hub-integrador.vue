<script setup lang="ts">
const title = 'SUBSEE | APIs & HUB Integrador — Conecte seus sistemas por APIs e Hub'
const description =
  'Centralize dados de leads, imóveis e atendimentos entre todos os seus sistemas com integrações via API, incluindo portais imobiliários, WhatsApp, redes sociais e Meta Ads.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <ApisHero />
    <ApisTechnology />
    <ApisIntegrationsHub />
    <ApisBenefits />
    <ApisConecte />
    <ApisTestimonials />
    <ApisOtherModules />
    <ApisFaq />
  </main>
</template>
