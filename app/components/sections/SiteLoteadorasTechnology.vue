<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Mockup do site de uma loteadora mostrando o lançamento Cabo Verde Condomínio Náutico com fotos aéreas e atributos do empreendimento',
  class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy'
}
</script>

<template>
  <CrmTechnology
    section-id="site-loteadoras-tecnologia"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    curve-arrow-class="pointer-events-none absolute hidden right-[18.028px] top-[73px] w-[184.972px] h-[210.812px] desktop-full:block"
    star-class="pointer-events-none absolute hidden left-0 top-[43.81%] size-[80px] desktop-full:block"
    mockup-src="/images/modulos-site-loteadoras/technology-mockup.png"
    :mockup-width="2200"
    :mockup-height="1293"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="mockupImgAttrs"
  >
    <template #title>
      Plataforma digital criada para acelerar vendas e fortalecer a presença online da
      <span class="text-brand">sua loteadora</span>
    </template>

    <template #description>
      Gerencie lotes e loteamentos com ferramentas de captação, vendas e acompanhamento de
      resultados em um só lugar.
    </template>
  </CrmTechnology>
</template>
