<script setup lang="ts">
const title = 'CRM para Imobiliárias: Funil, Leads e Propostas | SUBSEE'
const description =
  'Controle atendimentos, leads, agenda, propostas e negociações em um só CRM para imobiliárias e aumente a produtividade do seu time de vendas.'
const keywords = 'CRM para imobiliárias, funil de vendas imobiliário, gestão de leads imobiliários, propostas imobiliárias'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <CrmHero />
    <CrmTechnology />
    <CrmAllInOne />
    <CrmOverview />
    <CrmIntegrations />
    <CrmPublishing />
    <CrmTestimonials />
    <CrmOtherModules />
    <CrmFaq />
  </main>
</template>
