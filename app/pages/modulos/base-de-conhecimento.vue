<script setup lang="ts">
const title = 'SUBSEE | Base de Conhecimento — Central de Ajuda, Tutoriais e Documentação'
const description =
  'Centralize vídeos, treinamentos e conteúdos do SUBSEE em uma Base de Conhecimento organizada, facilitando o acesso às informações e a rotina da equipe.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <BaseConhecimentoHero />
    <BaseConhecimentoTechnology />
    <BaseConhecimentoTraining />
    <BaseConhecimentoPublishing />
    <BaseConhecimentoOther />
    <BaseConhecimentoOtherModules />
    <BaseConhecimentoTestimonials />
    <BaseConhecimentoFaq />
  </main>
</template>
