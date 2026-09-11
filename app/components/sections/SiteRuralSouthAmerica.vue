<script setup lang="ts">
interface CountryCard {
  label: string
  src: string
  alt: string
  width: number
  height: number
}

const bolivia: CountryCard = {
  label: 'Bolívia',
  src: '/images/modulos-site-rural/south-america-bolivia.png',
  alt: 'Trator em plantação de milho ao pôr do sol, com a bandeira da Bolívia',
  width: 220,
  height: 240
}
const uruguai: CountryCard = {
  label: 'Uruguai',
  src: '/images/modulos-site-rural/south-america-uruguai.png',
  alt: 'Gado em pastagem verde, com a bandeira do Uruguai',
  width: 220,
  height: 431
}
const brasil: CountryCard = {
  label: 'Brasil',
  src: '/images/modulos-site-rural/south-america-brasil.png',
  alt: 'Plantação de soja em linhas, com a bandeira do Brasil',
  width: 220,
  height: 581
}
const argentina: CountryCard = {
  label: 'Argentina',
  src: '/images/modulos-site-rural/south-america-argentina.png',
  alt: 'Colheitadeira em campo de trigo, com a bandeira da Argentina',
  width: 220,
  height: 431
}
const paraguai: CountryCard = {
  label: 'Paraguai',
  src: '/images/modulos-site-rural/south-america-paraguai.png',
  alt: 'Estrada de terra entre plantação de milho, com a bandeira do Paraguai',
  width: 220,
  height: 240
}

const groups: CountryCard[][] = [[bolivia, uruguai], [brasil], [argentina, paraguai]]
</script>

<template>
  <section id="site-rural-america-do-sul" class="section-py overflow-hidden">
    <div class="container-page">
      <div class="mx-auto max-w-[1179px] text-center">
        <h2 class="leading-[1.2]">
          Amplie suas oportunidades no<br class="hidden tablet-lg:block" />
          mercado rural da <span class="text-brand">América do Sul</span>
        </h2>
        <p class="mx-auto mt-4 max-w-[860px] text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
          Cadastre e divulgue imóveis rurais no Brasil, Argentina, Paraguai, Uruguai e Bolívia,
          conectando suas ofertas a compradores e investidores nacionais e estrangeiros.
        </p>
      </div>

      <div class="relative mt-10 tablet-lg:mt-16">
        <img
          src="/icons/site-rural-south-america-curva.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute top-[54.4%] left-[-8.47%] z-0 hidden h-[48.2%] w-[117.5%] max-w-none tablet-lg:block"
        />

        <div class="relative flex items-end justify-center gap-2 tablet:gap-4 desktop:gap-8">
          <div
            v-for="(group, groupIndex) in groups"
            :key="groupIndex"
            class="flex items-end gap-2 tablet:gap-4 desktop:gap-8"
          >
            <div
              v-for="country in group"
              :key="country.label"
              class="relative w-[64px] shrink-0 overflow-hidden rounded-[12px] mobile-lg:w-[90px] tablet:w-[130px] tablet:rounded-[16px] tablet-lg:w-[170px] desktop:w-[220px]"
              :style="{ aspectRatio: `${country.width} / ${country.height}` }"
            >
              <NuxtImg
                :src="country.src"
                :alt="country.alt"
                :width="country.width"
                :height="country.height"
                sizes="mobile-lg:15vw tablet:16vw desktop:220px"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
