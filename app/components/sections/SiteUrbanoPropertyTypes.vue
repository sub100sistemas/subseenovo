<script setup lang="ts">
interface PropertyType {
  label: string
  src: string
  alt: string
  isCentral?: boolean
}

const propertyTypes: PropertyType[] = [
  {
    label: 'Terreno',
    src: '/images/modulos-site-urbano/property-type-terreno.jpeg',
    alt: 'Terreno visto de cima, mostrando uma área com estrada e vegetação ao redor'
  },
  {
    label: 'Lazer',
    src: '/images/modulos-site-urbano/property-type-lazer.jpeg',
    alt: 'Área de lazer verde com lago em paisagem campestre'
  },
  {
    label: 'Lançamento',
    src: '/images/modulos-site-urbano/property-type-lancamento.png',
    alt: 'Torre residencial moderna ao entardecer com iluminação urbana ao fundo',
    isCentral: true
  },
  {
    label: 'Residencial',
    src: '/images/modulos-site-urbano/property-type-residencial.png',
    alt: 'Villa residencial de luxo com piscina ao pôr do sol'
  },
  {
    label: 'Comercial',
    src: '/images/modulos-site-urbano/property-type-comercial.jpeg',
    alt: 'Interior de escritório comercial moderno com vista para a cidade'
  }
]
</script>

<template>
  <section id="site-urbano-tipos-de-imovel" class="section-py">
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

      <div
        class="mt-10 flex items-end justify-center gap-3 tablet:gap-4 desktop:gap-5"
      >
        <div
          v-for="type in propertyTypes"
          :key="type.label"
          class="relative overflow-hidden rounded-[16px] tablet:rounded-[20px]"
          :class="type.isCentral
            ? 'h-[260px] w-[22%] tablet:h-[320px] tablet-lg:h-[380px] desktop:h-[420px]'
            : 'h-[200px] w-[18%] tablet:h-[250px] tablet-lg:h-[300px] desktop:h-[340px]'"
        >
          <NuxtImg
            :src="type.src"
            :alt="type.alt"
            :width="300"
            :height="type.isCentral ? 420 : 340"
            sizes="mobile-lg:20vw tablet:18vw tablet-lg:20vw desktop:240px"
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
  </section>
</template>
