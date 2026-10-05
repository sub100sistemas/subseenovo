<script setup lang="ts">
const title = 'Eventos e Webinars para Imobiliárias | SUBSEE on'
const description =
  'Participe de lives e eventos online sobre o SUBSEE on, tire dúvidas ao vivo e assista aos replays para tirar mais resultado do seu CRM imobiliário.'
const keywords = 'eventos online para imobiliárias, webinar imobiliário, replays SUBSEE on, treinamento CRM imobiliário'

useSeoMeta({
  title,
  description,
  keywords,
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
