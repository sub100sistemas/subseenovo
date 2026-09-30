<script setup lang="ts">
const title = 'SUBSEE | Política de Privacidade — Proteção de dados e LGPD'
const description =
  'Saiba como a SUB100 coleta, utiliza e protege suas informações pessoais em conformidade com a LGPD: cookies, segurança, direitos do titular e contato.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <LgpdPoliticaHero />
    <LgpdPoliticaContent />
  </main>
</template>
