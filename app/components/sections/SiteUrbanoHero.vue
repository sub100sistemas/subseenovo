<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]' },
  { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-rural.svg', iconClass: 'w-[17px] h-[17px]' },
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
      <img
        src="/icons/crm-hero-seta-curva-verde.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[1] left-[26%] top-[45%] w-[12%]"
      />

      <div class="absolute left-[30%] top-0 w-[56%] h-full overflow-hidden">
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

      <img
        src="/icons/crm-hero-seta-curva-azul.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute z-[2] right-[12%] top-[18%] w-[8%]"
      />

      <div
        class="absolute z-[3] hidden right-0 top-0 w-[6.94%] aspect-square rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:flex items-center justify-center"
      >
        <img
          src="/icons/menu-icone-site-urbanas.svg"
          alt=""
          aria-hidden="true"
          class="w-[58%] h-[46%]"
        />
      </div>

      <div
        class="absolute z-[4] hidden left-[30%] top-[28%] w-[38%] rounded-[10px] bg-white px-3 py-2 shadow-[0px_4px_20px_rgba(0,0,0,0.12)] tablet-lg:flex items-center gap-3"
      >
        <div class="flex size-8 shrink-0 items-center justify-center rounded-[6px] bg-brand">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="white"/>
            <circle cx="18" cy="6" r="3" fill="white"/>
            <circle cx="18" cy="18" r="3" fill="white"/>
            <circle cx="6" cy="12" r="3" fill="white"/>
            <line x1="6" y1="12" x2="15" y2="6.5" stroke="white" stroke-width="1.5"/>
            <line x1="6" y1="12" x2="15" y2="17.5" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>
        <div>
          <p class="text-[11px] font-semibold leading-tight text-ink">Publicação integrado</p>
          <p class="text-[10px] leading-tight text-ink/70">No site e nos principais portais</p>
        </div>
      </div>

      <div
        class="absolute z-[4] hidden right-[4%] bottom-[22%] w-[36%] rounded-[10px] bg-white px-3 py-2 shadow-[0px_4px_20px_rgba(0,0,0,0.12)] tablet-lg:flex items-center gap-3"
      >
        <div class="flex size-8 shrink-0 items-center justify-center rounded-[6px] bg-brand">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="white" stroke-width="2"/>
            <path d="M12 3C12 3 8 7 8 12C8 17 12 21 12 21" stroke="white" stroke-width="1.5"/>
            <path d="M12 3C12 3 16 7 16 12C16 17 12 21 12 21" stroke="white" stroke-width="1.5"/>
            <line x1="3.5" y1="9" x2="20.5" y2="9" stroke="white" stroke-width="1.5"/>
            <line x1="3.5" y1="15" x2="20.5" y2="15" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>
        <div>
          <p class="text-[11px] font-semibold leading-tight text-ink">Meu Site</p>
          <p class="text-[10px] leading-tight text-ink/70">Crie sites modernos para imobiliárias urbanas</p>
        </div>
      </div>
    </template>
  </Hero>
</template>
