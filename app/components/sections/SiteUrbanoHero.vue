<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
  { src: '/icons/site-urbano-hero-icone-house.svg', iconClass: 'w-[17px] h-[17px]' },
  { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-rural.svg', iconClass: 'w-[17px] h-[17px]' },
]
</script>

<template>
  <Hero
    section-id="site-urbano-hero"
    divider-src="/icons/crm-hero-divider-onda.svg"
    badge-src="/icons/site-urbano-hero-icone-house.svg"
    badge-icon-class="size-full"
    :module-icons="moduleIcons"
  >
    <template #heading>
      Site para <br class="hidden tablet-lg:block" /><span class="text-brand">Imobiliárias Urbanas</span>
    </template>

    <template #description>
       Indicado para imobiliárias com imóveis residenciais e comerciais, terrenos e lançamentos,
      com apresentação completa de cada oferta.
    </template>

    <template #visual>
      <img
        src="/icons/crm-rural-hero-ellipse-blur.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute left-[31.07%] top-0 w-[51.87%] h-[97.81%] opacity-70"
      />

      <div class="absolute left-[30.1%] top-[1.63%] w-[57.14%] h-[99.34%] overflow-hidden">
        <NuxtImg
          src="/images/modulos-site-urbano/hero-foto-corretor.png"
          :width="888"
          :height="1329"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Corretor sorridente de blazer cinza com camisa branca"
          class="h-full w-full object-cover object-top"
          loading="eager"
        />
      </div>

      <img
        src="/images/modulos-site-urbano/card_arrow.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-0 top-0 w-full h-auto"
      />

      <div
        class="absolute z-[2] hidden left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
      >
        <img src="/icons/site-urbano-hero-icone-house.svg" alt="" class="absolute inset-0 size-full" />
      </div>
    </template>
  </Hero>
</template>




