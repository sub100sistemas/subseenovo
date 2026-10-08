<script setup lang="ts">
const title = 'SUBSEE | Inscreva-se no evento do SUBSEE'
const description =
  'Participe ao vivo, tire suas dúvidas em tempo real e garanta sua vaga no próximo evento online do SUBSEE.'

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
    <FormInscrevaSe />
  </main>
</template>
