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
    beforeIcon: '/icons/crm-urbano-reports-icone-conversao.svg',
    beforeText: 'Espalhadas em vários lugares',
    afterIcon: '/icons/icone-crm-overview-portfolio.svg',
    afterText: 'Centralizadas em um só ambiente'
  },
  {
    number: '02',
    title: 'Processos',
    beforeIcon: '/icons/icone-crm-allinone-agenda.svg',
    beforeText: 'Manuais e repetitivos',
    afterIcon: '/icons/icone-crm-allinone-funil.svg',
    afterText: 'Claros e padronizados'
  },
  {
    number: '03',
    title: 'Equipe',
    beforeIcon: '/icons/crm-urbano-leads-icone-camadas.svg',
    beforeText: 'Sem uma visão única',
    afterIcon: '/icons/icone-crm-allinone-gestao-leads.svg',
    afterText: 'Alinhada em cada etapa'
  },
  {
    number: '04',
    title: 'Crescimento',
    beforeIcon: '/icons/crm-urbano-reports-icone-leads.svg',
    beforeText: 'Difícil de controlar',
    afterIcon: '/icons/crm-urbano-reports-icone-metas.svg',
    afterText: 'Estrutura pronta para evoluir'
  }
]
</script>

<template>
  <section id="crm-temporada-inteligente" class="section-py bg-white">
    <div class="container-page">
      <div class="text-center">
        <h2 class="mx-auto max-w-[700px] font-semibold leading-[1.3]">
          Da rotina manual para uma <span class="text-brand">operação inteligente</span>
        </h2>
        <p class="mx-auto mt-4 max-w-[620px] text-base leading-[1.5] text-ink-soft tablet-lg:text-[18px]">
          Veja como o SUBSEE Temporada conecta informações, simplifica processos e prepara sua operação para crescer.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-5 tablet:grid-cols-2 tablet-lg:grid-cols-4">
        <div
          v-for="card in cards"
          :key="card.number"
          class="flex flex-col overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.04)]"
        >
          <div class="flex items-center gap-3 border-b border-[#e5e7eb] px-5 py-4">
            <span class="text-[13px] font-bold text-[#9ca3af]">{{ card.number }}</span>
            <span class="text-[15px] font-bold text-ink">{{ card.title }}</span>
          </div>

          <div class="flex flex-1 flex-col">
            <div class="flex flex-col gap-2 border-b border-[#e5e7eb] px-5 py-4">
              <span class="inline-block rounded-[4px] bg-[#fee2e2] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.6px] text-[#ef4444]">
                Antes
              </span>
              <div class="flex items-center gap-3">
                <img :src="card.beforeIcon" alt="" aria-hidden="true" class="size-5 shrink-0 opacity-60" />
                <span class="text-[13px] leading-[1.4] text-[#6b7280]">{{ card.beforeText }}</span>
              </div>
            </div>

            <div class="flex flex-col gap-2 px-5 py-4">
              <span class="inline-block rounded-[4px] bg-[#ede9fe] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.6px] text-brand">
                Com SUBSEE
              </span>
              <div class="flex items-center gap-3">
                <img :src="card.afterIcon" alt="" aria-hidden="true" class="size-5 shrink-0" />
                <span class="text-[13px] font-semibold leading-[1.4] text-ink">{{ card.afterText }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
