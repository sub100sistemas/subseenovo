<script setup lang="ts">
const title = 'Termos de Uso e Condições Gerais dos Sites | SUBSEE'
const description =
  'Leia os termos de uso dos sites da SUB100 Sistemas: definições, responsabilidades, cadastro, armazenamento, segurança, consentimento e foro.'
const keywords = 'termos de uso SUBSEE, termos de uso SUB100, condições de uso dos sites'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Termos de uso'] })
</script>

<template>
  <main>
    <LgpdTermosHero />
    <LgpdTermosContent />
  </main>
</template>
