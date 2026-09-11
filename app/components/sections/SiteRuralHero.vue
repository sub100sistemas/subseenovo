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
      <div class="absolute left-[34.26%] top-0 w-[50.21%] h-full overflow-hidden">
        <NuxtImg
          src="/images/modulos-site-rural/hero-visual.png"
          :width="724"
          :height="912"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Corretor de camisa azul com os braços cruzados, ao lado de cartões destacando a publicação integrada em portais e o painel Meu Site"
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <img
        src="/images/modulos-site-rural/card_arrow.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-0 top-0 w-full h-auto"
      />

      <div
        class="absolute z-[2] hidden left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
      >
        <img
          src="/icons/crm-urbano-hero-icone-calculadora.svg"
          alt=""
          aria-hidden="true"
          class="absolute left-[30%] top-[26%] w-[40%] h-[50%]"
        />
      </div>
    </template>
  </Hero>
</template>
