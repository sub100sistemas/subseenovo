<script setup lang="ts">
const title = 'Vídeos do CRM Imobiliário SUBSEE on: Veja na Prática'
const description =
  'Assista a vídeos curtos do SUBSEE on e veja na prática como organizar imóveis, centralizar leads e acompanhar a equipe no CRM imobiliário.'
const keywords = 'vídeos CRM imobiliário, SUBSEE on em vídeo, software imobiliário na prática'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Vídeos do SUBSEE on'] })
</script>

<template>
  <main>
    <VideosHero />
    <VideosFeatured />
    <VideosDemo />
    <VideosProfiles />
    <VideosAppCta />
    <VideosFaq />
  </main>
</template>
