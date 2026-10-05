<script setup lang="ts">
const title = 'Preço do CRM Imobiliário: Planos Urbano e Rural | SUBSEE'
const description =
  'Veja o preço do CRM imobiliário SUBSEE: planos Urbano e Rural por R$ 450/mês + opcionais, com funcionalidades incluídas. Teste grátis por 30 dias.'
const keywords = 'preço CRM imobiliário, planos CRM imobiliário, valor CRM para imobiliárias, CRM urbano e rural'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description
})

usePageSchema({ title, description })
</script>

<template>
  <main>
    <PlanoEPrecoHero />
    <PlanoEPrecoFeatures />
    <PlanoEPrecoOpcionais />
    <PlanoEPrecoFaq />
  </main>
</template>
