<script setup lang="ts">
const title = 'Base de Conhecimento SUBSEE on: Tutoriais e Treinamentos'
const description =
  'Central de ajuda do SUBSEE on com vídeos, tutoriais e treinamentos para sua equipe aprender a usar o CRM imobiliário com mais autonomia.'
const keywords = 'base de conhecimento SUBSEE, central de ajuda SUBSEE, tutoriais CRM imobiliário, treinamento SUBSEE'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description
})

usePageSchema({ title, description })
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
