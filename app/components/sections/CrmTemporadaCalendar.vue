<script setup lang="ts">
const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const calendarRows = [
  [null, '#a5b4fc', '#818cf8', '#818cf8', '#6366f1', '#6366f1', '#818cf8'],
  ['#a5b4fc', '#6366f1', '#6366f1', null, '#818cf8', '#6366f1', '#6366f1'],
  ['#6366f1', '#818cf8', '#818cf8', '#a5b4fc', '#6366f1', '#6366f1', '#818cf8'],
  ['#818cf8', '#6366f1', null, '#6366f1', '#818cf8', '#818cf8', '#6366f1'],
  ['#6366f1', '#818cf8', '#a5b4fc', '#818cf8', null, null, null]
]

const legends = [
  { label: 'Livre', color: '#f3f4f6' },
  { label: 'Baixa', color: '#c7d2fe' },
  { label: 'Média', color: '#818cf8' },
  { label: 'Alta', color: '#4f46e5' }
]
</script>

<template>
  <section id="crm-temporada-calendar" class="section-py bg-white">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-start tablet-lg:gap-[102px]">
        <div class="flex w-full flex-col items-start gap-[29px] tablet-lg:max-w-[658px]">
          <h2 class="font-semibold leading-[1.2] desktop-full:text-[36px]">
            Um calendário só para<br />
            todas as <span class="text-brand">suas locações</span>
          </h2>
          <p class="text-[18px] leading-[1.4] text-ink tablet-lg:text-[20px]">
            Centralize todas as suas reservas de temporada em uma única agenda. Saiba exatamente quando cada imóvel está ocupado, disponível ou em manutenção, sem surpresas e sem overbooking.
          </p>

          <div class="flex flex-col gap-6">
            <div class="flex items-start gap-4">
              <img
                src="/icons/crm-temporada-calendar-icone-status.svg"
                alt=""
                aria-hidden="true"
                class="mt-0.5 size-[34px] shrink-0"
              />
              <div>
                <p class="text-[16px] font-bold leading-normal text-ink">Status em tempo real</p>
                <p class="mt-1 text-[16px] leading-[1.4] text-[#696984]">
                  Acompanhe a disponibilidade de cada imóvel com atualizações instantâneas em todos os canais de venda.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <img
                src="/icons/crm-temporada-calendar-icone-gestao.svg"
                alt=""
                aria-hidden="true"
                class="mt-0.5 size-[34px] shrink-0"
              />
              <div>
                <p class="text-[16px] font-bold leading-normal text-ink">Gestão simplificada</p>
                <p class="mt-1 text-[16px] leading-[1.5] text-[#4f4f4f]">
                  Menos tempo checando disponibilidade, mais tempo focando no crescimento do seu negócio de temporada.
                </p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/testar-gratis"
            class="inline-flex h-[56px] w-[297px] items-center justify-center gap-3 rounded-[12px] bg-brand text-[16px] font-semibold text-white"
          >
            Testar grátis por 30 dias
            <img src="/icons/crm-temporada-cta-arrow.svg" alt="" aria-hidden="true" class="size-5" />
          </NuxtLink>
        </div>

        <div
          class="w-full overflow-hidden rounded-[16px] bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] tablet-lg:max-w-[620px] tablet-lg:shrink-0"
        >
          <div class="p-6 tablet-lg:p-8">
            <p class="font-bold text-[20px] leading-normal text-[#171b25]">Ocupação – Janeiro</p>
            <p class="mt-1 text-[14px] text-[#777]">5 imóveis · Florianópolis e região</p>

            <div class="mt-6 grid grid-cols-7 gap-1 text-center text-[11px] text-[#666]">
              <span v-for="day in weekDays" :key="day">{{ day }}</span>
            </div>

            <div class="mt-2 flex flex-col gap-1">
              <div
                v-for="(row, ri) in calendarRows"
                :key="ri"
                class="grid grid-cols-7 gap-1"
              >
                <div
                  v-for="(cell, ci) in row"
                  :key="ci"
                  class="h-[32px] rounded-[6px]"
                  :style="{ backgroundColor: cell ?? '#f3f4f6' }"
                />
              </div>
            </div>

            <div class="mt-4 flex items-center justify-end gap-3">
              <div
                v-for="legend in legends"
                :key="legend.label"
                class="flex items-center gap-1"
              >
                <span class="inline-block size-[10px] rounded-[2px] border border-[#e5e7eb]" :style="{ backgroundColor: legend.color }" />
                <span class="text-[11px] text-[#666]">{{ legend.label }}</span>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-2 gap-0 border-t border-[#e5e7eb] pt-4">
              <div class="flex flex-col items-center border-r border-[#e5e7eb] pr-4">
                <p class="font-bold text-[24px] leading-normal text-[#6366ee]">94%</p>
                <p class="text-[11px] text-[#777]">Ocupação atual</p>
              </div>
              <div class="flex flex-col items-center pl-4">
                <p class="font-bold text-[24px] leading-normal text-[#07945b]">R$ 128k</p>
                <p class="text-[11px] text-[#777]">Receita mensal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
