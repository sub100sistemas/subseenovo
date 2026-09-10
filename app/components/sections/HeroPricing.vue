<script setup lang="ts">
interface FeatureSegment {
  text: string
  bold?: boolean
}

interface Plano {
  nome: string
  preco: string
  complemento: string
  bg: string
  features: FeatureSegment[][]
}

const planos: Plano[] = [
  {
    nome: 'Urbano',
    preco: 'R$ 450,00',
    complemento: 'mês + opcionais',
    bg: 'bg-white',
    features: [
      [{ text: '10 ', bold: true }, { text: 'Usuários' }],
      [{ text: 'Site & hotsite padrão urbano*', bold: true }],
      [{ text: 'Integração com ' }, { text: 'SUB100', bold: true }, { text: ' e outros portais' }],
      [{ text: 'Suporte via WhatsApp' }],
      [{ text: 'Treinamentos' }]
    ]
  },
  {
    nome: 'Rural',
    preco: 'R$ 450,00',
    complemento: 'mês + opcionais',
    bg: 'bg-white/44',
    features: [
      [{ text: '10 ', bold: true }, { text: 'Usuários' }],
      [{ text: 'Site & hotsite padrão Rural*', bold: true }],
      [{ text: 'Integração com ' }, { text: 'SUB100', bold: true }],
      [{ text: 'Cadastro georreferenciado (KML)' }],
      [{ text: 'Suporte via WhatsApp' }],
      [{ text: 'Treinamentos' }]
    ]
  }
]

const badges = [
  { icon: '/icons/icone-pricing-lancamentos.svg', alt: 'Ícone de lançamentos', left: 68.25, top: 81.81, shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.4))' },
  { icon: '/icons/icone-pricing-rural.svg', alt: 'Ícone de imóveis rurais', left: 4.99, top: 23.38, shadow: 'drop-shadow(9px 0px 20px rgba(93,95,239,0.6))' },
  { icon: '/icons/icone-pricing-temporada.svg', alt: 'Ícone de imóveis por temporada', left: 2.42, top: 87.83, shadow: 'drop-shadow(9px 0px 20px rgba(93,95,239,0.6))' },
  { icon: '/icons/icone-pricing-venda.svg', alt: 'Ícone de imóveis à venda', left: 69.7, top: 25.97, shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.6))' },
  { icon: '/icons/icone-pricing-locacao.svg', alt: 'Ícone de imóveis para locação', left: 58.2, top: 6.89, shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.4))' }
]
</script>

<template>
  <section id="precos" class="section-py pb-0 relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 hidden desktop-compact:block" aria-hidden="true">
      <img src="/icons/hero-pricing-bg-sol.svg" alt="" class="absolute" style="left: 1.35%; top: 16.46%; width: 10.91%" />
      <img src="/icons/hero-pricing-bg-blob.svg" alt="" class="absolute" style="left: 4.34%; top: 36.69%; width: 31.6%" />
      <img src="/icons/hero-pricing-bg-trator.svg" alt="" class="absolute" style="left: 97.76%; top: 60.36%; width: 18.14%" />
    </div>

    <div class="container-page relative">
      <div class="flex flex-col gap-8 desktop-full:flex-row desktop-full:items-start desktop-full:justify-center desktop-full:gap-x-[45px]">
        <div
          class="contents desktop-full:order-1 desktop-full:flex desktop-full:w-[416px] desktop-full:shrink-0 desktop-full:flex-col desktop-full:items-start desktop-full:text-left"
        >
          <div class="order-1 flex flex-col items-center text-center desktop-full:items-start desktop-full:text-left">
            <SectionTag label="Especialidade · Planos e Preços" />
            <h2 class="mt-4 max-w-[370px] desktop-full:max-w-[369px]">
              Elaboramos planos que se encaixam no seu perfil
            </h2>
          </div>

          <div class="relative order-3 mt-10 w-full max-w-[416px] self-center desktop-full:mt-16 desktop-full:self-auto">
            <NuxtImg
              src="/images/pricing/pessoa-apontando.png"
              :width="886"
              :height="1068"
              sizes="416px"
              alt="Homem sorrindo apontando para os planos de preços"
              class="relative z-10 h-auto w-full"
              loading="lazy"
            />

            <div
              v-for="badge in badges"
              :key="badge.icon"
              class="absolute z-20 aspect-[41.831/45] w-[10.06%] rounded-[4px] bg-brand"
              :style="{ left: badge.left + '%', top: badge.top + '%', filter: badge.shadow }"
            >
              <div class="absolute inset-[22.5%_24.5%]">
                <img :src="badge.icon" :alt="badge.alt" class="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="order-2 mt-8 grid grid-cols-1 items-stretch gap-8 tablet:grid-cols-2 tablet:gap-x-6 desktop-full:order-2 desktop-full:grid-cols-[440px_440px] desktop-full:gap-x-[45px]"
        >
          <div
            v-for="plano in planos"
            :key="plano.nome"
            class="relative flex w-full flex-col rounded-2xl border-2 border-brand p-8 desktop-full:w-[440px] desktop-full:p-12"
            :class="plano.bg"
          >
            <h3 class="text-[28px] leading-[1.2] font-bold text-brand desktop-full:text-[32px]">
              {{ plano.nome }}
            </h3>

            <p class="mt-[21px] text-base text-ink">Funcionalidades:</p>

            <ul class="mt-[10px]">
              <li
                v-for="(feature, featIndex) in plano.features"
                :key="featIndex"
                class="flex items-start gap-[10px] text-base leading-[27.84px] text-ink"
              >
                <img
                  src="/icons/seta-lista-verde.svg"
                  width="10"
                  height="15"
                  alt=""
                  aria-hidden="true"
                  class="mt-[6px] shrink-0"
                />
                <span>
                  <template v-for="(segment, segIndex) in feature" :key="segIndex">
                    <strong v-if="segment.bold" class="font-bold">{{ segment.text }}</strong>
                    <template v-else>{{ segment.text }}</template>
                  </template>
                </span>
              </li>
            </ul>

            <hr class="mx-[9px] mt-[37px] h-0.5 border-0 border-t-2 border-ink opacity-25" />

            <div class="mt-[22px] flex flex-nowrap items-baseline gap-1 text-brand">
              <span class="shrink-0 text-[34px] leading-[1.2] font-bold whitespace-nowrap desktop-full:text-[40px]">{{ plano.preco }}</span>
              <span class="shrink-0 text-base whitespace-nowrap">{{ plano.complemento }}</span>
            </div>

            <CtaButton variant="outline-teal" :icon="false" to="#" class="mt-7 w-full!">
              Ver todos os recursos inclusos
            </CtaButton>
            <CtaButton variant="primary" to="/testar-gratis" class="mt-4 w-full!">
              Testar grátis por 30 dias
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
