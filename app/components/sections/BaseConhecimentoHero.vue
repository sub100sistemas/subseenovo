<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
  { src: '/icons/crm-hero-icone-rural.svg', iconClass: 'w-[17.911px] h-[19px]' },
  { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-temporada-glyph.svg', iconClass: 'w-[16.331px] h-[19px]', shadowClass: 'shadow-[9px_0px_20px_rgba(93,95,239,0.6)]' }
]
</script>

<template>
  <Hero section-id="base-conhecimento-hero" divider-src="/icons/crm-hero-divider-onda.svg" :module-icons="moduleIcons">
    <template #heading>
      Central de Ajuda, Tutoriais e Documentação do SUBSEE <span class="text-[#e72f4d]">on</span>
    </template>

    <template #description>
      Centralize vídeos, treinamentos e conteúdos do SUBSEE em uma Base de Conhecimento organizada,
      facilitando o acesso às informações e a rotina da equipe.
    </template>

    <template #visual>
      <div class="absolute left-[31.07%] top-0 h-full w-[47.57%] overflow-hidden">
        <NuxtImg
          format="avif"
          src="/images/modulos-base-de-conhecimento/hero-visual.png"
          :width="346"
          :height="457"
          sizes="mobile-lg:300px tablet:340px tablet-lg:240px desktop:300px desktop-full:346px"
          alt="Profissional sorridente segurando um tablet"
          class="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      <NuxtImg
        format="avif"
        src="/images/modulos-base-de-conhecimento/card_arrow.png"
        :width="1440"
        :height="816"
        sizes="100vw tablet-lg:50vw desktop-full:720px"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-0 top-0 h-auto w-full"
      />

      <div
        class="absolute z-[2] hidden left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
      >
        <img
          src="/icons/base-conhecimento-icone-badge.svg"
          alt=""
          aria-hidden="true"
          class="absolute left-[24%] top-[30%] w-[58%] h-[46%]"
        />
      </div>
    </template>
  </Hero>
</template>
