<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' }
]
</script>

<template>
  <Hero section-id="site-loteadoras-hero" divider-src="/icons/crm-hero-divider-onda.svg" :module-icons="moduleIcons">
    <template #heading>
      Site para <br class="hidden tablet-lg:block" /><span class="text-brand">Loteadoras</span>
      <span
        aria-hidden="true"
        class="ml-2 inline-flex h-[25px] items-center rounded-full bg-[#ea4335] px-3 align-middle text-[13px] font-medium text-white after:content-['breve'] tablet-lg:text-[16px]"
      ></span>
    </template>

    <template #description>
      Ideal para loteadoras que desejam apresentar lotes e lançamentos de forma completa, com
      galerias, mapas e informações detalhadas de cada empreendimento.
    </template>


    <template #visual>
      <div class="absolute left-[27.26%] top-0 w-[50.21%] h-full overflow-hidden">
        <NuxtImg
          format="avif"
          src="/images/modulos-site-loteadoras/hero-visual.png"
          :width="724"
          :height="912"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Corretora com tablet e cartões do SGL" title="Corretora com tablet e cartões do SGL"
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <NuxtImg
        format="avif"
        src="/images/modulos-site-loteadoras/card_arrow.png"
        :width="1440"
        :height="816"
        sizes="100vw tablet-lg:50vw desktop-full:720px"
        alt="Cartões flutuantes do módulo" title="Cartões flutuantes do módulo"
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-0 top-0 w-full h-auto"
      />

      <div
        class="absolute z-[2] hidden left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
      >
        <img
          src="/icons/site-loteadoras-hero-icone-localizacao.svg"
          alt="Ícone de localização" title="Ícone de localização"
          aria-hidden="true"
          class="absolute left-[30%] top-[26%] w-[40%] h-[50%]"
        />
      </div>
    </template>
  </Hero>
</template>
