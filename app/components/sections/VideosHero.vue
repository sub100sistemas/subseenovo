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
        Assista aos vídeos<br />do SUBSEE <span class="text-[#e72f4d]">on</span>
      </slot>
    </template>

    <template #description>
      <slot name="description">
        Escolher um sistema de gestão para sua imobiliária ou equipe de corretores é uma decisão estratégica, que exige análise, clareza e segurança na escolha da plataforma ideal para potencializar suas vendas.
      </slot>
    </template>

    <template #visual>
      <slot name="visual">
        <img
          src="/icons/crm-hero-ellipse-blur.svg"
          alt="Brilho decorativo" title="Brilho decorativo"
          aria-hidden="true"
          class="pointer-events-none absolute left-[31.07%] top-0 w-[51.87%] h-[97.81%] opacity-70"
        />

        <div class="absolute left-[31.07%] top-0 w-[47.57%] h-full overflow-hidden">
          <NuxtImg
            format="avif"
            src="/images/assista-videos/hero-photo.png"
            :width="343"
            :height="456"
            sizes="mobile-lg:300px tablet:340px tablet-lg:240px desktop:300px desktop-full:343px"
            alt="Mulher sorridente segurando um notebook/tablet" title="Mulher sorridente segurando um notebook/tablet"
            class="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <NuxtImg
          format="avif"
          src="/images/assista-videos/card_arrow.png"
          :width="1440"
          :height="816"
          sizes="100vw tablet-lg:50vw desktop-full:720px"
          alt="Cartões flutuantes do módulo" title="Cartões flutuantes do módulo"
          aria-hidden="true"
          class="pointer-events-none absolute z-[1] left-0 top-10 w-full h-auto"
        />
      </slot>
    </template>
  </Hero>
</template>

