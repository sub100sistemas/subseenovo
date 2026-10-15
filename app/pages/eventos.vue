<script setup lang="ts">
const title = 'Eventos e Webinars para Imobiliárias | SUBSEE'
const description =
  'Participe de lives e eventos online sobre o SUBSEE, tire dúvidas ao vivo e assista aos replays para tirar mais resultado do seu CRM imobiliário.'
const keywords = 'eventos online para imobiliárias, webinar imobiliário, replays SUBSEE, treinamento CRM imobiliário'

useSeoMeta({
  title,
  description,
  keywords,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description
})

usePageSchema({ title, description, breadcrumb: ['Eventos'] })
</script>

<template>
  <main>
    <EventosGallery />
    <EventosHero />
    <EventosReplay />
    <EventosOverview />
    <EventosSignup />
    <EventosFaq />
    <CrmOtherModulesVideos />
  </main>
</template>
