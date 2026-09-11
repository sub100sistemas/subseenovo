<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-rural-hero-icone-rural.svg', iconClass: 'w-[17.911px] h-[19px]' },
]
</script>

<template>
  <Hero
    section-id="crm-rural-hero"
    divider-src="/icons/crm-rural-hero-divider-onda.svg"
    badge-src="/icons/crm-rural-hero-badge.svg"
    badge-icon-class="size-full"
    :module-icons="moduleIcons"
  >
    <template #heading>
      A tecnologia certa para <br class="hidden tablet-lg:block" />quem vende <span class="text-brand">terra</span>
    </template>

    <template #description>
      Cadastre propriedades rurais com todos os dados técnicos que fazem diferença na
      negociação, e alcance compradores em qualquer lugar do mundo.
    </template>

    <template #visual>
      <div class="absolute left-[29.26%] top-0 w-[55.21%] h-full overflow-hidden">
        <NuxtImg
          src="/images/modulos-crm-rural/hero-composicao-mapa-propriedade.png"
          :width="820"
          :height="888"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Composição mostrando um celular exibindo o mapa de uma propriedade rural com camadas e um homem apontando para o mapa"
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <img
        src="/images/modulos-crm-rural/card_arrow.png"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-0 top-0 w-full h-auto"
      />

      <div
        class="absolute z-[2] hidden left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
      >
        <img
          src="/icons/crm-rural-hero-badge.svg"
          alt=""
          aria-hidden="true"
          class="absolute "
        />
      </div>
    </template>
  </Hero>
</template>
