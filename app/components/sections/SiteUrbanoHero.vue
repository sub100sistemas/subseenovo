<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]' },
  { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
]
</script>

<template>
  <Hero
    section-id="site-urbano-hero"
    divider-src="/icons/crm-hero-divider-onda.svg"
    badge-src="/icons/menu-icone-site-urbanas.svg"
    badge-icon-class="w-[58%] h-[46%]"
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
      <div class="absolute left-[34.26%] top-0 w-[50.21%] h-full overflow-hidden">
        <NuxtImg
          src="/images/modulos-site-urbano/hero-foto-corretor.png"
          :width="724"
          :height="912"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Corretor sorridente de blazer cinza com camisa branca"
          class="h-full w-full object-cover object-top"
          loading="eager"
        />
      </div>

      <div
        class="absolute z-[2] hidden left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
      >
        <img
          src="/icons/menu-icone-site-urbanas.svg"
          alt=""
          aria-hidden="true"
          class="absolute left-[21%] top-[27%] w-[58%] h-[46%]"
        />
      </div>
    </template>
  </Hero>
</template>
