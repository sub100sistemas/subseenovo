<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
  { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
]
</script>

<template>
  <Hero
    section-id="crm-urbano-hero"
    divider-src="/icons/crm-hero-divider-onda.svg"
    badge-src="/icons/crm-urbano-hero-icone-calculadora.svg"
    :module-icons="moduleIcons"
  >
    <template #heading>
      Acelere seus negócios no mercado <span class="text-brand">imobiliário urbano</span>
    </template>

    <template #description>
      Organize lançamentos, vendas e locações com gestão de leads, distribuição de
      atendimentos, funil de vendas e integração com portais em uma única plataforma
    </template>

    <template #visual>
      <div class="absolute left-[34.26%] top-0 w-[50.21%] h-full overflow-hidden">
        <NuxtImg
          format="avif"
          src="/images/modulos-crm-urbano/hero-foto-mulher-tablet.png"
          :width="724"
          :height="912"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Corretora sorridente de blazer branco segurando um tablet"
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <NuxtImg
        format="avif"
        src="/images/modulos-crm-urbano/card_arrow.png"
        :width="1440"
        :height="816"
        sizes="100vw tablet-lg:50vw desktop-full:720px"
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
