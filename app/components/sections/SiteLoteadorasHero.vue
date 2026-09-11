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
        class="ml-2 inline-flex h-[25px] items-center rounded-full bg-[#ea4335] px-3 align-middle text-[13px] font-medium text-white tablet-lg:text-[16px]"
      >
        breve
      </span>
    </template>

    <template #description>
      Ideal para loteadoras que desejam apresentar lotes e lançamentos de forma completa, com
      galerias, mapas e informações detalhadas de cada empreendimento.
    </template>

    <template #visual>
      <NuxtImg
        src="/images/modulos-site-loteadoras/hero-visual.png"
        :width="1470"
        :height="930"
        sizes="mobile-lg:100vw tablet:600px tablet-lg:480px desktop:620px desktop-full:720px"
        alt="Corretora sorridente com tablet nas mãos, ao lado de cartões destacando o Meu Site para loteadoras e o Sistema SGL"
        class="absolute inset-x-0 top-0 h-auto w-full max-w-none"
        loading="eager"
      />
    </template>
  </Hero>
</template>
