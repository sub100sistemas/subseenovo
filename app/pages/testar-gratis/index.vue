<script setup lang="ts">
const title = 'Teste Grátis do CRM Imobiliário por 30 Dias | SUBSEE'
const description =
  'Teste grátis por 30 dias o CRM imobiliário SUBSEE e veja na prática como organizar imóveis, leads e negociações da sua imobiliária.'
const keywords = 'teste grátis CRM imobiliário, CRM imobiliário grátis, teste SUBSEE 30 dias'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <main>
    <FormTestarGratis />
  </main>
</template>
