<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/site-rural-hero-icone-modulo.svg', iconClass: 'w-[17.911px] h-[19px]' }
]
</script>

<template>
  <Hero
    section-id="site-rural-hero"
    divider-src="/icons/crm-hero-divider-onda.svg"
    :module-icons="moduleIcons"
  >
    <template #heading>
      Site para <br class="hidden tablet-lg:block" /><span class="text-brand">Imobiliárias Rurais</span>
    </template>

    <template #description>
      Indicado para anunciantes com foco em propriedades rurais como fazendas, sítios e
      chácaras. O diferencial desse site está na peculiaridade do anúncio rural.
    </template>

    <template #visual>
      <NuxtImg
        src="/images/modulos-site-rural/hero-visual.png"
        :width="1440"
        :height="1058"
        sizes="mobile-lg:100vw tablet:600px tablet-lg:480px desktop:620px desktop-full:720px"
        alt="Corretor de camisa azul com os braços cruzados, ao lado de cartões destacando a publicação integrada em portais e o painel Meu Site"
        class="absolute inset-x-0 top-0 h-auto w-full max-w-none"
        loading="eager"
      />
    </template>
  </Hero>
</template>
