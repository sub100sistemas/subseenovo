<script setup lang="ts">
const title = 'CRM Imobiliário Urbano para Vendas e Locação | SUBSEE'
const description =
  'CRM imobiliário urbano com funil Kanban, distribuição automática de leads, metas em tempo real e publicação nos principais portais imobiliários.'
const keywords = 'CRM imobiliário urbano, CRM para vendas e locação, funil Kanban imobiliário, distribuição de leads'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description
})

usePageSchema({ title, description, software: true })
</script>

<template>
  <main>
    <CrmUrbanoHero />
    <CrmUrbanoTechnology />
    <CrmUrbanoPortfolio />
    <CrmUrbanoSalesFunnel />
    <CrmUrbanoLeadsChart />
    <CrmUrbanoReports />
    <CrmUrbanoPortalIntegrations />
    <CrmUrbanoDashboard />
    <CrmUrbanoTestimonials />
    <CrmUrbanoOtherModules />
    <CrmUrbanoFaq />
  </main>
</template>
