<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Mockup do painel do HUB de integrações, mostrando funil imobiliário, chatbot Mel e notificações',
  class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy'
}
</script>

<template>
  <CrmTechnology
    section-id="apis-tecnologia"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    mockup-src="/images/modulos-apis-hub-integrador/technology-mockup-telas.png"
    :mockup-width="2200"
    :mockup-height="1293"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="mockupImgAttrs"
  >
    <template #title>
      Integrações que ampliam o alcance do seu negócio <span class="text-brand">imobiliário</span>
    </template>

    <template #description>
      Integre Facebook Ads, Instagram Ads e outros canais para captar leads qualificados em todos
      os segmentos.
    </template>
  </CrmTechnology>
</template>
