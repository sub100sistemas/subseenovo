<script setup lang="ts">
const title = 'API e Hub de Integração para Imobiliárias | SUBSEE on'
const description =
  'Integre o CRM aos portais imobiliários, WhatsApp, redes sociais e Meta Ads por API e Hub, centralizando leads, imóveis e atendimentos.'
const keywords = 'API imobiliária, integração com portais imobiliários, hub de integração, integração WhatsApp CRM'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['APIs Hub Integrador'] })
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
