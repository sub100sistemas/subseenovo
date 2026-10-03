<script setup lang="ts">
interface PropertyType {
  label: string
  src: string
  alt: string
  width: number
  height: number
}

const terreno: PropertyType = {
  label: 'Terreno',
  src: '/images/modulos-site-urbano/property-type-terreno.jpeg',
  alt: 'Terreno visto de cima',
  width: 220,
  height: 240
}
const lazer: PropertyType = {
  label: 'Lazer',
  src: '/images/modulos-site-urbano/property-type-lazer.jpeg',
  alt: 'Área de lazer com lago',
  width: 220,
  height: 431
}
const lancamento: PropertyType = {
  label: 'Lançamento',
  src: '/images/modulos-site-urbano/property-type-lancamento.png',
  alt: 'Torre residencial ao entardecer',
  width: 220,
  height: 581
}
const residencial: PropertyType = {
  label: 'Residencial',
  src: '/images/modulos-site-urbano/property-type-residencial.png',
  alt: 'Residência de luxo com piscina',
  width: 220,
  height: 431
}
const comercial: PropertyType = {
  label: 'Comercial',
  src: '/images/modulos-site-urbano/property-type-comercial.jpeg',
  alt: 'Escritório comercial moderno',
  width: 220,
  height: 240
}

const groups: PropertyType[][] = [[terreno, lazer], [lancamento], [residencial, comercial]]
</script>

<template>
  <section id="site-urbano-tipos-de-imovel" class="section-py overflow-x-clip">
    <div class="container-page">
      <div class="mx-auto max-w-[900px] text-center">
        <h2 class="leading-[1.2]">
          Imóveis para diferentes projetos<br class="hidden tablet:block" />
          e momentos da <span class="text-brand">vida</span>
        </h2>
        <p class="mx-auto mt-4 max-w-[700px] text-base leading-[1.4] text-ink tablet-lg:text-[20px]">
          De terrenos e lançamentos a imóveis residenciais, comerciais e de lazer, apresente as
          melhores oportunidades para cada perfil de cliente.
        </p>
      </div>

      <div class="relative mt-10 tablet-lg:mt-16">
        <img
          src="/icons/site-urbano-property-types-curva.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-4 left-[-1%] hidden w-[102%] tablet-lg:block"
        />

        <div class="relative flex items-center justify-center gap-2 tablet:gap-4 desktop:gap-8">
          <div
            v-for="(group, groupIndex) in groups"
            :key="groupIndex"
            class="flex items-end gap-2 tablet:gap-4 desktop:gap-8"
          >
            <div
              v-for="type in group"
              :key="type.label"
              class="relative w-[64px] shrink-0 overflow-hidden rounded-[12px] mobile-lg:w-[90px] tablet:w-[130px] tablet:rounded-[16px] tablet-lg:w-[170px] desktop:w-[220px]"
              :style="{ aspectRatio: `${type.width} / ${type.height}` }"
            >
              <NuxtImg
                :src="type.src"
                :alt="type.alt"
                :width="type.width"
                :height="type.height"
                sizes="mobile-lg:15vw tablet:16vw desktop:220px"
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65)_0%,transparent_100%)] p-3 tablet:p-4">
                <p class="text-center text-[13px] font-semibold text-white tablet:text-[15px]">
                  {{ type.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
