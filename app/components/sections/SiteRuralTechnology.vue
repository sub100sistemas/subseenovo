<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Site de imobiliária rural',
  class: 'mx-auto h-auto w-full max-w-[1100px] rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy'
}
</script>

<template>
  <CrmTechnology
    section-id="site-rural-tecnologia"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    curve-arrow-class="pointer-events-none absolute hidden right-[18.028px] top-[73px] w-[184.972px] h-[210.812px] desktop-full:block"
    star-class="pointer-events-none absolute hidden left-0 top-[43.81%] size-[80px] desktop-full:block"
    mockup-src="/images/modulos-site-rural/technology-mockup-telas.png"
    :mockup-width="2200"
    :mockup-height="1293"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="mockupImgAttrs"
  >
    <template #title>
      Sites desenvolvidos para atender às<br class="hidden tablet-lg:block" />
      necessidades da <span class="text-brand">sua imobiliária rural</span>
    </template>

    <template #description>
      Reduza o retrabalho no dia a dia da imobiliária, acompanhe o desempenho dos
      corretores e centralize atendimentos, propostas e negociações em um único sistema
    </template>
  </CrmTechnology>
</template>
