<script setup lang="ts">
interface AdvantageCard {
  icon: string
  iconWidth: number
  iconHeight: number
  title: string
  description: string
}

const advantageCards: AdvantageCard[] = [
  {
    icon: '/icons/base-conhecimento-icone-team.svg',
    iconWidth: 51,
    iconHeight: 51,
    title: 'Maior engajamento das equipes',
    description: 'Possuir uma base de conhecimento sólida e eficiente é extremamente necessário para manter sua equipe engajada. A resolução rápida de problemas fortalece a sinergia entre os colaboradores.'
  },
  {
    icon: '/icons/base-conhecimento-icone-training.svg',
    iconWidth: 52,
    iconHeight: 52,
    title: 'Melhorar o treinamento de novos colaboradores',
    description: 'O treinamento para colaboradores e parceiros se torna fácil e prático, com acesso a tudo que precisam saber sobre o sistema de forma rápida, organizada e muito eficiente para todos.'
  },
  {
    icon: '/icons/base-conhecimento-icone-satisfaction.svg',
    iconWidth: 52,
    iconHeight: 52,
    title: 'Aumenta a satisfação dos clientes',
    description: 'Com uma equipe bem treinada e sempre atualizada pela Base de Conhecimento, o atendimento se torna mais ágil e preciso, elevando a confiança e a satisfação dos seus clientes.'
  }
]
</script>

<template>
  <section id="base-conhecimento-vantagens" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1150px] text-center">
        <h2 class="leading-[1.2]">
          Vantagens que a "<span class="text-brand">Base de Conhecimento</span>" oferece
        </h2>
        <p class="mx-auto mt-4 max-w-[1150px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
          Uma base de conhecimento sólida e bem estruturada traz inúmeros benefícios ao seu
          negócio. Abaixo elencamos os principais:
        </p>
      </div>

      <div class="mt-[58px] flex flex-col items-center gap-[70px] tablet-lg:flex-row tablet-lg:items-start tablet-lg:justify-center tablet-lg:gap-[58px]">
        <div v-for="card in advantageCards" :key="card.title" class="flex w-full max-w-[428px] flex-col items-center">
          <div
            class="z-10 -mb-[43px] flex size-[100px] shrink-0 items-center justify-center rounded-full border border-brand bg-white shadow-[0px_10px_20px_rgba(38,45,118,0.08)]"
          >
            <img :src="card.icon" :width="card.iconWidth" :height="card.iconHeight" alt="" aria-hidden="true" />
          </div>
          <div
            class="flex w-full flex-col items-center gap-6 rounded-[20px] border border-brand bg-white px-6 pt-[57px] pb-8 text-center shadow-[0px_10px_20px_rgba(38,45,118,0.08)] tablet-lg:gap-9 tablet-lg:px-[43px] tablet-lg:pt-[77px] tablet-lg:pb-[49px]"
          >
            <h3 class="text-xl leading-[1.4] font-medium text-brand tablet-lg:text-[28px]">{{ card.title }}</h3>
            <p class="text-base leading-[1.8] text-[#696984]">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
