<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-temporada-hero-icone-imovel.svg', iconClass: 'w-[17.91px] h-[19px]' },
]
</script>

<template>
  <Hero
    section-id="crm-temporada-hero"
    divider-src="/icons/crm-temporada-hero-divider-onda.svg"
    content-pad="tablet-lg:pb-[50px]"
    :module-icons="moduleIcons"
  >
    <template #heading>
      Simplifique a gestão de <br class="hidden tablet-lg:block" />imóveis para <span class="text-brand">temporada</span>
    </template>

    <template #description>
      Cadastre imóveis, organize reservas, controle períodos disponíveis e apresente todas as informações necessárias para facilitar a locação por temporada.
    </template>


    <template #visual>
      <div class="absolute left-[34.26%] top-0 w-[55.21%] h-full overflow-hidden">
        <NuxtImg
          format="avif"
          src="/images/modulos-crm-temporada/hero-foto-homem-laptop.png"
          :width="776"
          :height="894"
          sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
          alt="Homem sorridente com laptop"
          class="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <NuxtImg
        format="avif"
        src="/images/modulos-crm-temporada/card_arrow.png"
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
          src="/icons/crm-temporada-hero-calendar.svg"
          alt=""
          aria-hidden="true"
          class="absolute left-[27%] top-[26%] w-[50%] h-[50%]"
        />
      </div>
    </template>

    <div class="flex items-center">
          <div
            class="flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]"
          >
            <img
              src="/icons/crm-temporada-hero-icone-imovel.svg"
              alt=""
              aria-hidden="true"
              style="width: 17.91px; height: 19px"
            />
          </div>
        </div>
 </Hero>
</template>
