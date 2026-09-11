<script setup lang="ts">
interface BenefitCard {
  icon: string
  iconWidth: number
  iconHeight: number
  title: string
  description: string
}

const benefitCards: BenefitCard[] = [
  {
    icon: '/icons/apis-benefits-icone-sync.svg',
    iconWidth: 53,
    iconHeight: 53,
    title: 'Sincronização automática de dados',
    description: 'Leads, imóveis e atendimentos são sincronizados automaticamente entre os sistemas integrados, sem cadastros manuais, reduzindo erros e garantindo informações sempre atualizadas.'
  },
  {
    icon: '/icons/apis-benefits-icone-integration.svg',
    iconWidth: 48,
    iconHeight: 48,
    title: 'Integração com múltiplos sistemas',
    description: 'Conecte CRMs, portais imobiliários, WhatsApp, redes sociais e outras ferramentas diretamente às APIs do SUBSEE, sem precisar alternar entre diferentes plataformas ao longo da rotina de trabalho.'
  },
  {
    icon: '/icons/apis-benefits-icone-shield.svg',
    iconWidth: 48,
    iconHeight: 48,
    title: 'Mais segurança e controle centralizado',
    description: 'Com todos os dados centralizados em um só lugar, sua operação ganha mais controle, segurança e menos tarefas manuais, fortalecendo a eficiência da equipe no dia a dia.'
  }
]
</script>

<template>
  <section id="apis-beneficios" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1150px] text-center">
        <h2 class="leading-[1.2]">
          Conheça as vantagens do "<span class="text-brand">APIs e HUB Integrador</span>"
        </h2>
        <p class="mx-auto mt-4 max-w-[1150px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
          Um Hub de integração eficiente conecta o SUBSEE aos seus sistemas via APIs,
          centralizando dados e otimizando toda a operação. Confira os principais benefícios:
        </p>
      </div>

      <div class="mt-[58px] flex flex-col items-center gap-[70px] tablet-lg:flex-row tablet-lg:items-start tablet-lg:justify-center tablet-lg:gap-[58px]">
        <div v-for="card in benefitCards" :key="card.title" class="flex w-full max-w-[428px] flex-col items-center">
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
