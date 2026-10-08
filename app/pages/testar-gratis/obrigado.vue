<script setup lang="ts">
const title = 'SUBSEE | Obrigado'
const description = 'Seu cadastro foi realizado com sucesso.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})
</script>

<template>
  <main>
    <FormObrigado />
  </main>
</template>
