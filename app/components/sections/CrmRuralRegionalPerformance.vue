<script setup lang="ts">
interface StatCard {
  label: string
  value: string
  context: string
}

const stats: StatCard[] = [
  { label: 'IMÓVEIS RURAIS ATIVOS', value: '1659', context: '+18% neste mês' },
  { label: 'PAÍSES DESTAQUE', value: '4 países', context: '150 imóveis rurais' },
  { label: 'MELHOR CONVERSÃO', value: '+24%', context: 'Região Sul' }
]

const checklist = [
  'Decisões mais estratégicas sobre onde investir e prospectar',
  'Visibilidade clara sobre as regiões com maior retorno financeiro',
  'Gestão do portfólio de imóveis rurais com dados atualizados',
  'Comparativo de desempenho entre corretores por região'
]
</script>

<template>
  <section id="crm-rural-regional-performance" class="section-py bg-white">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 desktop-full:flex-row desktop-full:items-start desktop-full:gap-[70px]">
        <div class="flex w-full flex-col items-start gap-5 desktop-full:flex-1">
          <h2>
            Enxergue onde <span class="text-brand">seu portfólio rural</span> performa melhor
          </h2>
          <p class="text-base leading-[1.4] text-ink tablet-lg:text-xl">
            Acompanhe relatórios por região e tipo de uso da terra, agricultura, pecuária ou
            lazer, identificando onde concentrar esforço comercial.
          </p>

          <ul class="flex w-full flex-col gap-3">
            <li v-for="item in checklist" :key="item" class="flex items-start gap-3">
              <span class="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full bg-teal text-white" aria-hidden="true">
                <IconCheck class="size-2.5" />
              </span>
              <span class="text-base text-ink-soft">{{ item }}</span>
            </li>
          </ul>

          <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>

        <div class="w-full max-w-[725px] shrink-0 rounded-[24px] border border-[#eee] bg-white p-5 shadow-[0px_2px_35px_rgba(31,56,115,0.08)] desktop-full:w-[725px]">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <p class="text-lg font-semibold text-ink">Desempenho por região</p>
            <span class="rounded-full bg-[#f5f5f7] px-4 py-1.5 text-sm text-ink-soft">Últimos 30 dias</span>
          </div>

          <div class="mt-5 flex flex-col gap-4 tablet:flex-row">
            <NuxtImg
              src="/images/modulos-crm-rural/regional-performance-mapa.png"
              :width="464"
              :height="410"
              sizes="mobile-lg:80vw tablet:400px tablet-lg:560px"
              alt="Mapa de propriedades rurais" title="Mapa de propriedades rurais"
              class="h-auto w-full self-start rounded-[18px] object-cover tablet:w-[60%]"
              loading="lazy"
            />

            <div class="flex flex-col gap-4 tablet:w-[40%]">
              <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-[#eee] bg-[#fbfbfe] p-4">
                <p class="text-xs font-semibold tracking-[0.4px] text-ink-soft">{{ stat.label }}</p>
                <p class="mt-1 text-2xl font-bold text-ink">{{ stat.value }}</p>
                <p class="mt-1 text-xs text-teal-link">{{ stat.context }}</p>
              </div>

              <div class="flex items-center gap-2 rounded-xl bg-[#f5f5f7] px-3 py-2">
                <span class="size-2 shrink-0 rounded-full bg-teal-link" aria-hidden="true" />
                <span class="text-xs text-ink-soft">Dados atualizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
