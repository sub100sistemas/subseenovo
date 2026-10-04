<script setup lang="ts">
const title = 'SUBSEE | Teste o SUBSEE grátis por 30 dias'
const description =
  'Conheça na prática as funcionalidades do SUBSEE e descubra como simplificar a gestão da sua imobiliária.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <FormTestarGratis />
  </main>
</template>
