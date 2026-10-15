<script setup lang="ts">
const title = 'Vídeos do CRM Imobiliário SUBSEE: Veja na Prática'
const description =
  'Assista a vídeos curtos do SUBSEE e veja na prática como organizar imóveis, centralizar leads e acompanhar a equipe no CRM imobiliário.'
const keywords = 'vídeos CRM imobiliário, SUBSEE em vídeo, software imobiliário na prática'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Vídeos do SUBSEE'] })
</script>

<template>
  <main>
    <VideosHero />
    <VideosFeatured />
    <VideosDemo />
    <VideosProfiles />
    <VideosFaq />
    <CrmOtherModulesVideos />
  </main>
</template>
