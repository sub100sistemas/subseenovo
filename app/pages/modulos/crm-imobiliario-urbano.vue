<script setup lang="ts">
const title = 'SUBSEE | CRM Imobiliário Urbano para Venda, Locação e Lançamentos'
const description =
  'Organize lançamentos, vendas e locações em um só CRM: distribuição automática de leads, funil de vendas em Kanban, metas em tempo real e publicação integrada nos principais portais imobiliários.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
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
