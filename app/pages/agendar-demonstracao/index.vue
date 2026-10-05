<script setup lang="ts">
const title = 'Agende uma Demonstração do CRM Imobiliário | SUBSEE'
const description =
  'Agende uma demonstração do SUBSEE e veja como o CRM imobiliário organiza atendimento, leads e vendas da sua imobiliária, do lead à assinatura.'
const keywords = 'demonstração CRM imobiliário, agendar demonstração SUBSEE, apresentação do CRM'

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
    <FormAgendarDemo />
  </main>
</template>
