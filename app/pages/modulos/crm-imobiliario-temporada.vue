<script setup lang="ts">
const title = 'Sistema para Aluguel por Temporada com CRM | SUBSEE on'
const description =
  'Sistema para aluguel por temporada com calendário de reservas, repasses automáticos e comunicação com hóspedes. Teste grátis por 30 dias.'
const keywords = 'sistema para aluguel por temporada, CRM para temporada, gestão de reservas, calendário de reservas, imóveis de temporada'

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
    <CrmTemporadaHero />
    <CrmTemporadaTechnology />
    <CrmTemporadaPortfolio />
    <CrmTemporadaCalendar />
    <CrmTemporadaKeyBoard />
    <CrmTemporadaPricingRules />
    <CrmTemporadaAutomatedMessaging />
    <CrmTemporadaFinancialTransfer />
    <CrmTemporadaInteligente />
    <CrmTemporadaTestimonials />
    <CrmTemporadaOtherModules />
    <CrmTemporadaFaq />
  </main>
</template>
