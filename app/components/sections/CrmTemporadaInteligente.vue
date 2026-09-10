<script setup lang="ts">
interface InteligenteCard {
  number: string
  title: string
  beforeIcon: string
  beforeText: string
  afterIcon: string
  afterText: string
}

const cards: InteligenteCard[] = [
  {
    number: '01',
    title: 'Informações',
    beforeIcon: '/icons/crm-temporada-inteligente-info-antes.svg',
    beforeText: 'Espalhadas em vários lugares',
    afterIcon: '/icons/crm-temporada-inteligente-info-depois.svg',
    afterText: 'Centralizadas em um só ambiente',
  },
  {
    number: '02',
    title: 'Processos',
    beforeIcon: '/icons/crm-temporada-inteligente-processos-antes.svg',
    beforeText: 'Manuais e repetitivos',
    afterIcon: '/icons/crm-temporada-inteligente-processos-depois.svg',
    afterText: 'Claros e padronizados',
  },
  {
    number: '03',
    title: 'Equipe',
    beforeIcon: '/icons/crm-temporada-inteligente-equipe-antes.svg',
    beforeText: 'Sem uma visão única',
    afterIcon: '/icons/crm-temporada-inteligente-equipe-depois.svg',
    afterText: 'Alinhada em cada etapa',
  },
  {
    number: '04',
    title: 'Crescimento',
    beforeIcon: '/icons/crm-temporada-inteligente-crescimento-depois.svg',
    beforeText: 'Difícil de controlar',
    afterIcon: '/icons/crm-temporada-inteligente-crescimento-antes.svg',
    afterText: 'Estrutura pronta para evoluir',
  },
]
</script>

<template>
  <section id="crm-temporada-inteligente" class="section-py relative overflow-hidden bg-white">
    <img
      src="/icons/crm-temporada-inteligente-bg-lines.svg"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute left-0 right-0 top-0 w-full"
    />

    <div class="container-page relative">
      <div class="text-center">
        <h2 class="mx-auto font-bold leading-[1.2] text-[#313846]">
          Da rotina manual para<br />
          uma <span class="text-[#5d5fef]">operação inteligente</span>
        </h2>
        <p class="mx-auto mt-6 max-w-[700px] text-base leading-[1.45] text-[#313846] tablet-lg:text-[18px]">
          Veja como o SUBSEE Temporada conecta informações, simplifica processos<br class="hidden tablet-lg:block" />
          e prepara sua operação para crescer.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet-lg:grid-cols-4">
        <div
          v-for="card in cards"
          :key="card.number"
          class="flex flex-col gap-[10px] rounded-[20px] border border-[#e0e8f7] bg-[#fefeff] px-[30px] py-[25px] drop-shadow-[0px_3px_17.5px_rgba(31,71,158,0.07)]"
        >
          <div class="flex items-center gap-3">
            <div class="flex w-[40px] items-center justify-center rounded-full bg-[#e5f0ff] px-[10px] py-[8px]">
              <span class="text-[16px] font-bold text-[#1f57f5]">{{ card.number }}</span>
            </div>
            <span class="text-[20px] font-semibold text-[#5d5fef]">{{ card.title }}</span>
          </div>

          <div class="flex items-center gap-5">
            <div class="flex shrink-0 items-center justify-center rounded-full border border-[#ffc7bf] bg-[#fff2f0] p-[11px]">
              <img :src="card.beforeIcon" alt="" aria-hidden="true" class="size-[26px]" />
            </div>
            <div class="flex flex-col">
              <div class="flex h-[17px] w-[50px] items-center justify-center rounded-[20px] bg-[#fff2f0]">
                <span class="text-[11px] font-semibold leading-none text-[#f04545]">ANTES</span>
              </div>
              <p class="mt-[10px] text-[16px] leading-[1.4] text-[#4f5766]">{{ card.beforeText }}</p>
            </div>
          </div>

          <p class="w-[78px] text-right text-[22px] font-bold text-[#4d8cff]">↓</p>

          <div class="flex items-center gap-5">
            <div class="flex shrink-0 items-center justify-center rounded-full border border-[#b2d1ff] bg-[#edf7ff] p-[11px]">
              <img :src="card.afterIcon" alt="" aria-hidden="true" class="size-[26px]" />
            </div>
            <div class="flex flex-col">
              <div class="flex h-[17px] w-[85px] items-center justify-center rounded-[20px] bg-[#edf7ff]">
                <span class="text-[11px] font-semibold leading-none text-[#1f57f5]">COM SUBSEE</span>
              </div>
              <p class="mt-[10px] text-[16px] font-semibold leading-[1.4] text-[#313846]">{{ card.afterText }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
