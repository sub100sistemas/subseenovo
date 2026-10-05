<script setup lang="ts">
interface StatCard {
  icon: string
  iconBackground: string
  value: string
  valueColor: string
  label: string
  indicator: string
  indicatorColor: string
}

const stats: StatCard[] = [
  {
    icon: '/icons/crm-urbano-reports-icone-conversao.svg',
    iconBackground: 'rgba(93,95,239,0.1)',
    value: '68%',
    valueColor: '#5d5fef',
    label: 'Taxa de conversão',
    indicator: '↑ 8pts este mês',
    indicatorColor: '#00b894'
  },
  {
    icon: '/icons/crm-urbano-reports-icone-tempo-resposta.svg',
    iconBackground: 'rgba(59,130,246,0.1)',
    value: '2h',
    valueColor: '#3b82f6',
    label: 'Tempo médio de resposta',
    indicator: '↓ 30min vs mês anterior',
    indicatorColor: '#00b894'
  },
  {
    icon: '/icons/crm-urbano-reports-icone-leads.svg',
    iconBackground: 'rgba(245,158,11,0.1)',
    value: '312',
    valueColor: '#f59e0b',
    label: 'Leads este mês',
    indicator: '↑ 18% vs mês anterior',
    indicatorColor: '#00b894'
  },
  {
    icon: '/icons/crm-urbano-reports-icone-metas.svg',
    iconBackground: 'rgba(0,211,155,0.1)',
    value: '94%',
    valueColor: '#00d39b',
    label: 'Metas atingidas',
    indicator: 'Meta: 90%',
    indicatorColor: '#8b8da0'
  }
]
</script>

<template>
  <section id="crm-urbano-relatorios" class="section-py bg-white">
    <div class="container-page">
      <div class="mx-auto max-w-[1000px] text-center">
        <h2 class="leading-[1.2] tracking-[-1px]">
          Metas e resultados,
          <br class="hidden desktop-compact:block" />
          acompanhados em <span class="text-brand">tempo real</span>
        </h2>
        <p class="mx-auto mt-6 max-w-[860px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
          Defina metas por corretor ou equipe e acompanhe taxa de conversão, tempo de resposta e
          desempenho por origem.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-[34px] mobile-lg:grid-cols-2 desktop:grid-cols-4 desktop-full:mt-[60px]">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="flex min-h-[220px] flex-col rounded-[20px] border border-[#ededf2] bg-white p-[27px] shadow-[0px_6px_9px_rgba(26,26,63,0.06)]"
        >
          <span
            class="flex size-14 shrink-0 items-center justify-center rounded-[16px]"
            :style="{ backgroundColor: stat.iconBackground }"
          >
            <img :src="stat.icon" width="36" height="36" :alt="imageLabel(stat.icon)" :title="imageLabel(stat.icon)" aria-hidden="true" class="size-9" />
          </span>
          <p class="mt-5 text-[40px] leading-[1.3] font-bold" :style="{ color: stat.valueColor }">
            {{ stat.value }}
          </p>
          <p class="mt-1 text-[15px] leading-[1.45] font-medium text-ink">{{ stat.label }}</p>
          <p class="mt-0.5 text-[13px] leading-[1.3]" :style="{ color: stat.indicatorColor }">
            {{ stat.indicator }}
          </p>
        </div>
      </div>

      <div class="mt-10 flex justify-center desktop-full:mt-[70px]">
        <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
          Testar grátis por 30 dias
        </CtaButton>
      </div>
    </div>
  </section>
</template>
