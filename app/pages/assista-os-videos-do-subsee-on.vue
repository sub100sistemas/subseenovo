<script setup lang="ts">
const title = 'SUBSEE | Vídeos e Tutoriais do SUBSEE on'
const description =
  'Assista aos vídeos do SUBSEE on e veja na prática como organizar imóveis, centralizar leads e acompanhar a equipe no CRM imobiliário.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
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
