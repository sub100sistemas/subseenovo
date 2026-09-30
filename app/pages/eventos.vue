<script setup lang="ts">
const title = 'SUBSEE | Eventos Online e Replays do SUBSEE on'
const description =
  'Participe de lives, webinars e treinamentos ao vivo sobre o sistema, e acesse os replays a qualquer momento para não perder nenhum conteúdo.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <main>
    <EventosGallery />
    <EventosHero />
    <EventosReplay />
    <EventosOverview />
    <EventosSignup />
    <EventosFaq />
  </main>
</template>
