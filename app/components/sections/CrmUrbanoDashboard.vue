<script setup lang="ts">
interface DashboardBenefit {
  icon?: string
  title: string
  titleClass: string
  description: string
}

const benefits: DashboardBenefit[] = [
  {
    title: 'Visão completa em tempo real',
    titleClass: 'text-[18px]',
    description:
      'Acompanhe imóveis, propostas, leads e financeiro em um único painel, sempre atualizado.'
  },
  {
    icon: '/icons/crm-urbano-dashboard-icone-alertas.svg',
    title: 'Alertas que evitam perda de negócio',
    titleClass: 'text-[16px]',
    description:
      'Identifique imóveis vencendo, retornos de chave atrasados e oportunidades antes que se percam.'
  },
  {
    icon: '/icons/crm-urbano-dashboard-icone-indicadores.svg',
    title: 'Indicadores por tipo de negócio',
    titleClass: 'text-[16px]',
    description:
      'Venda, locação, lançamento e temporada, cada um com sua performance detalhada.'
  },
  {
    icon: '/icons/crm-urbano-dashboard-icone-equipe.svg',
    title: 'Gestão de equipe integrada',
    titleClass: 'text-[16px]',
    description:
      'Distribua leads, acompanhe candidaturas e monitore o desempenho do time comercial.'
  }
]
</script>

<template>
  <section id="crm-urbano-dashboard" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1100px] text-center">
        <h2 class="text-[26px] leading-[1.25] tracking-[-1px] tablet:text-[30px] desktop-compact:text-[34px]">
          O painel que dá <span class="text-brand">clareza</span> ao seu negócio
        </h2>
        <p class="mx-auto mt-4 max-w-[976px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
          Imóveis, propostas, leads e financeiro: tudo em tempo real no Dashboard SUBSEE.
        </p>
      </div>

      <div class="mt-10 flex flex-col items-center gap-10 tablet-lg:mt-[34px] tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-0">
        <div class="relative w-full tablet-lg:w-[41.64%]">
          <img
            src="/icons/crm-urbano-dashboard-ellipse-blur.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute hidden -left-[17.15%] -top-[18%] w-[102.13%] max-w-none tablet-lg:block"
          />

          <div class="relative flex flex-col gap-6 rounded-[25px] bg-white px-6 py-8 shadow-[0px_10px_30px_rgba(38,45,118,0.08)] tablet-lg:ml-[6.43%] tablet-lg:w-[93.57%] tablet-lg:gap-[29px] tablet-lg:px-[33px] tablet-lg:py-[41px]">
            <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start gap-4">
              <span
                v-if="benefit.icon"
                class="flex size-11 shrink-0 items-center justify-center"
              >
                <img :src="benefit.icon" width="44" height="44" alt="" aria-hidden="true" class="size-11" />
              </span>
              <span
                v-else
                class="relative block size-11 shrink-0 overflow-hidden rounded-[12px] bg-[rgba(93,95,239,0.1)]"
                aria-hidden="true"
              >
                <span class="absolute left-[8px] top-[8px] w-[12px] h-[9px] rounded-[2px] bg-brand"></span>
                <span class="absolute left-[24px] top-[8px] w-[12px] h-[14px] rounded-[2px] bg-brand"></span>
                <span class="absolute left-[8px] top-[21px] w-[12px] h-[15px] rounded-[2px] bg-brand"></span>
                <span class="absolute left-[24px] top-[26px] w-[12px] h-[10px] rounded-[2px] bg-brand"></span>
              </span>
              <span class="flex flex-col">
                <h3 class="leading-[1.45] font-bold text-ink" :class="benefit.titleClass">
                  {{ benefit.title }}
                </h3>
                <p class="text-[16px] leading-[1.5] text-[rgba(49,56,70,0.7)]">
                  {{ benefit.description }}
                </p>
              </span>
            </div>
          </div>
        </div>

        <div class="relative w-full aspect-[817/564] tablet-lg:w-[58.36%]">
          <NuxtPicture
            src="/images/modulos-crm-urbano/dashboard-mockup-notebook.png"
            :width="2423"
            :height="1408"
            densities="x1 x2"
            sizes="mobile-lg:100vw tablet-lg:520px desktop:660px desktop-full:808px"
            :img-attrs="{
              alt: 'Dashboard do SUBSEE no notebook',
              class: 'absolute h-auto max-w-none left-[0.49%] top-[13.36%] w-[98.84%]',
              loading: 'lazy'
            }"
          />

          <div
            class="absolute top-[6%] right-[2%] aspect-[182/100] w-[40%] max-w-[160px] -rotate-3 overflow-hidden rounded-[18px] bg-[#00d39b] shadow-[0px_18px_36px_rgba(0,211,155,0.3)] tablet-lg:top-[11.36%] tablet-lg:left-[74.5%] tablet-lg:right-auto tablet-lg:h-[17.73%] tablet-lg:aspect-auto tablet-lg:w-[22.28%] tablet-lg:max-w-none"
          >
            <p class="absolute left-[10%] top-[16%] text-[24px] leading-[1.25] font-bold whitespace-nowrap text-white tablet:text-[26px] tablet-lg:text-[20px] desktop-compact:text-[21px] desktop:text-[26px] desktop-full:text-[30px]">
              1.271
            </p>
            <p class="absolute left-[10%] top-[60%] text-[10px] leading-[1.2] font-medium whitespace-nowrap text-white/90 tablet:text-[11px] tablet-lg:text-[8px] desktop-compact:text-[9px] desktop:text-[11px] desktop-full:text-[13px]">
              imóveis ativos
            </p>
          </div>

          <div
            class="absolute bottom-[4%] left-[2%] aspect-[220/100] w-[48%] max-w-[190px] -rotate-3 overflow-hidden rounded-[18px] bg-brand shadow-[0px_18px_36px_rgba(93,95,239,0.35)] tablet-lg:top-[72.88%] tablet-lg:bottom-auto tablet-lg:left-[4.74%] tablet-lg:h-[17.73%] tablet-lg:aspect-auto tablet-lg:w-[26.93%] tablet-lg:max-w-none"
          >
            <p class="absolute left-[10%] top-[16%] text-[24px] leading-[1.25] font-bold whitespace-nowrap text-white tablet:text-[26px] tablet-lg:text-[20px] desktop-compact:text-[21px] desktop:text-[26px] desktop-full:text-[30px]">
              316
            </p>
            <p class="absolute left-[37.06%] top-[37.78%] text-[8px] leading-[1.2] whitespace-nowrap text-white/90 tablet:text-[9px] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[11px]">
              (Este mês)
            </p>
            <p class="absolute left-[10%] top-[60%] text-[10px] leading-[1.2] font-medium whitespace-nowrap text-white/90 tablet:text-[11px] tablet-lg:text-[8px] desktop-compact:text-[9px] desktop:text-[11px] desktop-full:text-[13px]">
              Vendidos/Alugados
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
