<script setup lang="ts"></script>

<template>
  <CrmTechnology
    section-id="crm-rural-technology"
    title-class="mx-auto leading-[1.4] desktop-full:max-w-[1000px]"
    :curve-arrow-style="{ right: '18.028px', top: '73px', width: '184.972px', height: '210.812px' }"
    :star-style="{ left: '0', top: '43.81%', width: '80px', height: '80px' }"
    mockup-src="/images/modulos-crm-rural/tecnologia-mockup-cadastro-imovel.png"
    :mockup-width="2200"
    :mockup-height="1290"
    mockup-sizes="mobile-lg:100vw tablet-lg:920px desktop:1100px"
    :mockup-img-attrs="{
      alt: 'Mockup da tela de Cadastro de Imóvel do SUB100, mostrando o formulário de características de uma fazenda com dados de solo, cultivo e área',
      class: 'mx-auto h-auto w-full max-w-[1100px]',
      loading: 'lazy'
    }"
  >
    <template #title>
      Gerencie imóveis <span class="text-brand">rurais</span> com precisão e agilidade
    </template>

    <template #description>
      Cadastre fazendas, sítios, chácaras e áreas agrícolas com fichas detalhadas,
      localização georreferenciada e documentação organizada para facilitar a negociação com
      compradores e investidores.
    </template>
  </CrmTechnology>
</template>
