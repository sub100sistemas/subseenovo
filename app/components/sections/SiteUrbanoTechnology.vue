<script setup lang="ts"></script>

<template>
  <CrmTechnology
    section-id="site-urbano-tecnologia"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    curve-arrow-class="pointer-events-none absolute hidden right-[18.028px] top-[73px] w-[184.972px] h-[210.812px] desktop-full:block"
    star-class="pointer-events-none absolute hidden left-0 top-[43.81%] size-[80px] desktop-full:block"
    mockup-src="/images/modulos-site-urbano/showcase-mockup-site-ideal.png"
    :mockup-width="2200"
    :mockup-height="1293"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="{
      alt: 'Site de imobiliária urbana',
      class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
      loading: 'lazy'
    }"
  >
    <template #title>
      Sites desenvolvidos para impulsionar a captação e o fechamento de negócios da
      <span class="text-brand">sua imobiliária urbana</span>
    </template>

    <template #description>
      Anuncie imóveis residenciais e comerciais, casas, apartamentos, terrenos e lançamentos,
      com ferramentas para venda e locação em um único sistema.
    </template>
  </CrmTechnology>
</template>
