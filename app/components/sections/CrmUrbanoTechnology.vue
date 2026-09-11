<script setup lang="ts"></script>

<template>
  <CrmTechnology
    section-id="crm-urbano-tecnologia"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    curve-arrow-class="pointer-events-none absolute hidden right-[18.028px] top-[73px] w-[184.972px] h-[210.812px] desktop-full:block"
    star-class="pointer-events-none absolute hidden left-0 top-[43.81%] size-[80px] desktop-full:block"
    mockup-src="/images/modulos-crm-urbano/technology-mockup-cadastro-imovel.png"
    :mockup-width="2200"
    :mockup-height="1292"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="{
      alt: 'Mockup da tela de cadastro de imóvel do SUB100, com o fluxo guiado por etapas e os campos de identificação e valores',
      class: 'mx-auto h-auto w-full max-w-[1100px]',
      loading: 'lazy'
    }"
  >
    <template #title>
      Do cadastro à publicação,
      <br class="hidden desktop-compact:block" />
      tudo em um só <span class="text-brand">lugar</span>
    </template>

    <template #description>
      Siga um fluxo guiado por etapas, da identificação ao proprietário, e tenha cada imóvel
      pronto para publicar, sem retrabalho.
    </template>
  </CrmTechnology>
</template>
