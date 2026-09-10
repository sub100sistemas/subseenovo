<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-temporada-hero-icone-imovel.svg', iconClass: 'w-[17.91px] h-[19px]' },
]
</script>

<template>
  <Hero
    section-id="crm-temporada-hero"
    divider-src="/icons/crm-temporada-hero-divider-onda.svg"
    content-pad="tablet-lg:pb-[50px]"
    :module-icons="moduleIcons"
  >
    <template #heading>
      Simplifique a gestão de <br class="hidden tablet-lg:block" />imóveis para <span class="text-brand">temporada</span>
    </template>

    <template #description>
      Cadastre imóveis, organize reservas, controle períodos disponíveis e apresente todas as informações necessárias para facilitar a locação por temporada.
    </template>

    <template #visual>
      <img
        src="/icons/crm-temporada-hero-ellipse-blur.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-[31.07%] top-0 w-[51.87%] h-[97.81%] opacity-70"
      />

      <div class="absolute left-[31.07%] top-0 w-[54.65%] h-full overflow-hidden mix-blend-darken">
        <NuxtImg
          src="/images/modulos-crm-temporada/hero-foto-homem-laptop.png"
          :width="394"
          :height="428"
          sizes="mobile-lg:300px tablet:340px tablet-lg:240px desktop:300px desktop-full:394px"
          alt="Homem sorridente com laptop mostrando sistema de gestão de imóveis por temporada"
          class="h-full w-full object-bottom"
          loading="eager"
        />
      </div>

      <img
        src="/images/modulos-crm-temporada/card_arrow.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-0 top-0 w-full h-auto"
      />

      <div
        class="absolute z-[2] right-0 top-0 w-[6.94%] aspect-square flex items-center justify-center rounded-[6px] border border-brand bg-[#e8e8fd]"
      >
        <img src="/icons/crm-temporada-hero-icone-calendar-badge.svg" alt="" class="absolute inset-0 size-full" />
      </div>
    </template>
  </Hero>
</template>
