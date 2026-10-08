<script setup lang="ts">
const title = 'Política de Privacidade e Proteção de Dados (LGPD) | SUBSEE'
const description =
  'Saiba como a SUB100 coleta, usa e protege seus dados pessoais, em conformidade com a LGPD: cookies, segurança e direitos do titular.'
const keywords = 'política de privacidade SUBSEE, LGPD, proteção de dados SUB100'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Política de privacidade'] })
</script>

<template>
  <main>
    <LgpdPoliticaHero />
    <LgpdPoliticaContent />
  </main>
</template>
