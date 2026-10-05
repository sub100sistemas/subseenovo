<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Painel da Base de conhecimento',
  title: 'Painel da Base de conhecimento',
  class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy'
}
</script>

<template>
  <CrmTechnology
    section-id="base-conhecimento-tecnologia"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    mockup-src="/images/modulos-base-de-conhecimento/technology-mockup.png"
    :mockup-width="2200"
    :mockup-height="1292"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="mockupImgAttrs"
  >
    <template #title>
      Aprenda a usar o sistema com tutoriais e <span class="text-brand">treinamentos</span>
    </template>

    <template #description>
      O manual através de vídeos com o passo a passo de cadastramentos de novos empreendimentos,
      gestão de leads, simulador de vendas, publicação de imóveis, acompanhamento de propostas,
      CRM imobiliário e todas as outras funcionalidades do Sistema SUBSEE imobiliário, encontra-se
      dentro da <strong>"Base de conhecimento"</strong>.
    </template>
  </CrmTechnology>
</template>
