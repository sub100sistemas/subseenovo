<script setup lang="ts">
const title = 'CRM Imobiliário Rural para Fazendas e Terras | SUBSEE'
const description =
  'CRM imobiliário rural para fazendas, sítios e terras: dados técnicos da propriedade, negociações até o contrato e anúncios no Brasil e no exterior.'
const keywords = 'CRM imobiliário rural, CRM para fazendas, software imobiliário rural, imóveis rurais'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['CRM Imobiliário Rural'] })
</script>

<template>
  <main>
    <CrmRuralHero />
    <CrmRuralTechnology />
    <CrmRuralPortfolio />
    <CrmRuralTechnicalReport />
    <CrmRuralClientRadar />
    <CrmRuralDealTimeline />
    <CrmRuralFormalClosing />
    <CrmRuralRegionalPerformance />
    <CrmRuralForeignBuyers />
    <CrmRuralTestimonials />
    <CrmRuralOtherModules />
    <CrmRuralFaq />
  </main>
</template>
