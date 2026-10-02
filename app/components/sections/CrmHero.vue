<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

withDefaults(
  defineProps<{
    sectionId?: string
    dividerSrc?: string
    badgeSrc?: string
    moduleIcons?: HeroModuleIcon[]
  }>(),
  {
    sectionId: 'crm-hero',
    dividerSrc: '/icons/crm-hero-divider-onda.svg',
    badgeSrc: '/icons/crm-hero-badge-icone.svg',
    moduleIcons: () => [
      { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
      { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
      { src: '/icons/crm-hero-icone-rural.svg', iconClass: 'w-[17.911px] h-[19px]' },
      { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
      { src: '/icons/crm-hero-icone-temporada-glyph.svg', iconClass: 'w-[16.331px] h-[19px]', shadowClass: 'shadow-[9px_0px_20px_rgba(93,95,239,0.6)]' },
    ],
  },
)
</script>

<template>
  <Hero
    :section-id="sectionId"
    :divider-src="dividerSrc"
    :badge-src="badgeSrc"
    :module-icons="moduleIcons"
  >
    <template #heading>
      <slot name="heading">
        CRM Completo <br class="hidden tablet-lg:block" />para <span class="text-brand">Imobiliárias</span>
      </slot>
    </template>

    <template #description>
      <slot name="description">
        Gerencie clientes, atendimentos, agendamentos, leads, propostas e negociações, tudo em
        um só lugar para aumentar a produtividade da sua imobiliária.
      </slot>
    </template>

    <template #visual>
      <slot name="visual">
        <img
          src="/icons/crm-hero-ellipse-blur.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute left-[31.07%] top-0 w-[51.87%] h-[97.81%] opacity-70"
        />

        <div class="absolute left-[31.07%] top-0 w-[47.57%] h-full overflow-hidden">
          <NuxtImg
            format="avif"
            src="/images/modulos-crm/hero-foto-mulher-notebook.png"
            :width="343"
            :height="456"
            sizes="mobile-lg:300px tablet:340px tablet-lg:240px desktop:300px desktop-full:343px"
            alt="Mulher sorridente segurando um notebook/tablet"
            class="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <NuxtImg
          format="avif"
          src="/images/modulos-crm/card_arrow.png"
          :width="1440"
          :height="816"
          sizes="100vw tablet-lg:50vw desktop-full:720px"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute z-[1] left-0 top-0 w-full h-auto"
        />

        <div
          class="absolute z-[2] left-[92.93%] top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd]"
        >
          <img src="/icons/crm-hero-badge-icone.svg" alt="" class="absolute left-[24%] top-[30%] w-[58%] h-[46%]" />
        </div>
      </slot>
    </template>
  </Hero>
</template>
