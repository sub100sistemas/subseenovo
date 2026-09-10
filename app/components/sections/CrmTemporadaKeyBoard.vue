<script setup lang="ts">
interface KanbanColumn {
  label: string
  count: number
  bg: string
  textColor: string
  items: string[]
  dotColor: string
}

const columns: KanbanColumn[] = [
  {
    label: 'Disponível',
    count: 3,
    bg: '#1cd9a4',
    textColor: '#fff',
    dotColor: '#1cd9a4',
    items: ['Casa Praia 01', 'Chalé Serra 03', 'Apto Centro 12']
  },
  {
    label: 'Em Limpeza',
    count: 2,
    bg: '#f59e0b',
    textColor: '#fff',
    dotColor: '#f59e0b',
    items: ['Casa Praia 04', 'Loft Marina 02']
  },
  {
    label: 'Ocupado',
    count: 4,
    bg: '#5d5fef',
    textColor: '#fff',
    dotColor: '#5d5fef',
    items: ['Casa Praia 02', 'Chalé Serra 01', 'Apto Centro 05', 'Loft Marina 07']
  }
]

const checkItems = [
  'Menos tempo de imóvel parado',
  'Equipe operacional mais organizada',
  'Melhor experiência do hóspede'
]
</script>

<template>
  <section id="crm-temporada-keyboard" class="section-py">
    <div class="mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0">
      <div class="rounded-[28px] bg-[#F5F5F5] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-14">
        <div class="mx-auto max-w-[780px] text-center">
          <h2 class="font-semibold leading-[1.3]">
            Do check-out à próxima reserva, <span class="text-brand">sem atraso</span>
          </h2>
          <p class="mt-4 text-base leading-[1.5] text-ink-soft tablet-lg:text-[18px]">
            Use o Quadro de chaves para acompanhar em tempo real quais imóveis estão ocupados, em limpeza ou disponíveis, garantindo transições rápidas entre um hóspede e outro.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-4 tablet:grid-cols-3">
          <div
            v-for="col in columns"
            :key="col.label"
            class="overflow-hidden rounded-[16px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.06)]"
          >
            <div
              class="flex items-center justify-between rounded-t-[16px] px-4 py-3"
              :style="{ backgroundColor: col.bg }"
            >
              <span class="text-[14px] font-semibold text-white">{{ col.label }}</span>
              <span class="flex size-[22px] items-center justify-center rounded-full bg-white/30 text-[12px] font-bold text-white">
                {{ col.count }}
              </span>
            </div>
            <div class="flex flex-col gap-2 p-3">
              <div
                v-for="item in col.items"
                :key="item"
                class="flex items-center gap-2 rounded-[8px] bg-[#f9fafb] px-3 py-2"
              >
                <span
                  class="size-[8px] shrink-0 rounded-full"
                  :style="{ backgroundColor: col.dotColor, opacity: 0.7 }"
                />
                <span class="text-[14px] text-ink">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col items-center justify-center gap-4 tablet:flex-row tablet:gap-8">
          <div
            v-for="item in checkItems"
            :key="item"
            class="flex items-center gap-2"
          >
            <img src="/icons/icone-check-verde-circulo.svg" alt="" aria-hidden="true" class="size-5 shrink-0" />
            <span class="text-[14px] font-medium text-ink tablet-lg:text-[15px]">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
