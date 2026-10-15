<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Painel da Base de conhecimento',
  title: 'Painel da Base de conhecimento',
  class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy'
}
</script>

<template>
  <TechnologyBoxed
    section-id="base-conhecimento-tecnologia"
    mockup-src="/images/modulos-base-de-conhecimento/technology-mockup.png"
    :mockup-width="2200"
    :mockup-height="1292"
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

    <template #cta>
      <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
        Testar grátis por 30 dias
      </CtaButton>
    </template>
  </TechnologyBoxed>
</template>