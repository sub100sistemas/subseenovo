<script setup lang="ts"></script>

<template>
  <CrmTechnology
    section-id="crm-temporada-technology"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    curve-arrow-class="pointer-events-none absolute hidden right-[18.028px] top-[73px] w-[184.972px] h-[210.812px] desktop-full:block"
    star-class="pointer-events-none absolute hidden left-0 top-[43.81%] size-[80px] desktop-full:block"
    mockup-src="/images/modulos-crm-temporada/technology-mockup-software.png"
    :mockup-width="2200"
    :mockup-height="1292"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="{
      alt: 'Cadastro de imóvel para temporada',
      class: 'mx-auto h-auto w-full max-w-[1100px]',
      loading: 'lazy'
    }"
  >
    <template #title>
      Da captação à reserva, tudo<br />
      integrado em um <span class="text-brand">só painel</span>
    </template>

    <template #description>
       Cadastre imóveis de temporada, configure disponibilidade e diárias, e tenha cada anúncio pronto para atrair hóspedes sem retrabalho.
    </template>
  </CrmTechnology>
</template>



