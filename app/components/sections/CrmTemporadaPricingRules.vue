<script setup lang="ts">
const features = [
  'Decisões de preço baseadas em dados reais de mercado e concorrência',
  'Identificação de períodos ociosos com antecedência para planejar promoções',
  'Aumento de receita por imóvel com estratégias de precificação inteligente',
  'Comparação de performance entre imóveis do portfólio de forma simplificada'
]

interface MonthData {
  name: string
  value: number
}

const months: MonthData[] = [
  { name: 'Jan', value: 92 },
  { name: 'Fev', value: 88 },
  { name: 'Mar', value: 60 },
  { name: 'Abr', value: 45 },
  { name: 'Mai', value: 38 },
  { name: 'Jun', value: 35 },
  { name: 'Jul', value: 55 },
  { name: 'Ago', value: 78 },
  { name: 'Set', value: 95 },
  { name: 'Out', value: 90 },
  { name: 'Nov', value: 70 },
  { name: 'Dez', value: 96 }
]

function cellColor(value: number): string {
  if (value >= 90) return '#4f46e5'
  if (value >= 70) return '#6366f1'
  if (value >= 50) return '#818cf8'
  if (value >= 30) return '#a5b4fc'
  return '#c7d2fe'
}
</script>

<template>
  <section id="crm-temporada-pricing" class="section-py bg-white">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-start tablet-lg:gap-[80px]">
        <div class="flex w-full flex-col items-start gap-6 tablet-lg:max-w-[560px]">
          <h2 class="font-semibold leading-[1.2]">
            Entenda sua <span class="text-brand">alta</span> e <span class="text-brand">baixa</span> temporada
          </h2>
          <p class="text-base leading-[1.5] text-ink tablet-lg:text-[18px]">
            As Análises de locação mostram como a ocupação varia mês a mês, ajudando a ajustar preços e antecipar períodos de baixa procura. Tenha visibilidade sobre tendências sazonais.
          </p>

          <div class="flex flex-col gap-3">
            <div
              v-for="feature in features"
              :key="feature"
              class="flex items-start gap-3"
            >
              <img src="/icons/icone-check-verde-circulo.svg" alt="Ícone de confirmado" title="Ícone de confirmado" aria-hidden="true" class="mt-0.5 size-5 shrink-0" />
              <span class="text-base leading-[1.5] text-ink">{{ feature }}</span>
            </div>
          </div>

          <NuxtLink
            to="/testar-gratis/" :title="titleForLink('/testar-gratis/')" :aria-label="titleForLink('/testar-gratis/')"
            class="inline-flex h-[56px] w-[297px] items-center justify-center gap-3 rounded-[12px] bg-brand text-[16px] font-semibold text-white"
          >
            Testar grátis por 30 dias
            <img src="/icons/crm-temporada-cta-arrow.svg" alt="Seta do botão" title="Seta do botão" aria-hidden="true" class="size-5" />
          </NuxtLink>
        </div>

        <div class="w-full rounded-[16px] bg-white p-6 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] tablet-lg:max-w-[500px] tablet-lg:shrink-0">
          <p class="mb-4 text-[15px] font-semibold text-ink">Taxa de ocupação por mês</p>
          <div class="grid grid-cols-4 gap-2">
            <div
              v-for="month in months"
              :key="month.name"
              class="flex flex-col items-start gap-1 rounded-[8px] p-3"
              :style="{ backgroundColor: cellColor(month.value) }"
            >
              <span class="text-[11px] font-medium text-white/80">{{ month.name }}</span>
              <span class="text-[18px] font-bold text-white">{{ month.value }}%</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-[11px] text-[#666]">Baixa</span>
            <div class="mx-3 h-[6px] flex-1 rounded-full bg-[linear-gradient(to_right,#c7d2fe,#4f46e5)]" />
            <span class="text-[11px] text-[#666]">Alta</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
