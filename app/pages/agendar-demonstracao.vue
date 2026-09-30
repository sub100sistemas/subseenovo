<script setup lang="ts">
const title = 'SUBSEE | Agende uma demonstração do SUBSEE'
const description =
  'Veja como o SUBSEE organiza o atendimento e as vendas da sua imobiliária, do lead à assinatura'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <FormAgendarDemo />
  </main>
</template>
