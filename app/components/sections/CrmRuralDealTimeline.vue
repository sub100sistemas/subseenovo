<script setup lang="ts">
interface TimelineStop {
  label: string
  sublabel: string
  color: string
  size: string
}

const stops: TimelineStop[] = [
  { label: '1ª Visita', sublabel: 'Reconhecimento da propriedade', color: 'bg-[#5d5fef]', size: '35px' },
  { label: 'Proposta', sublabel: 'Envio de proposta formal', color: 'bg-[#f59e0b]', size: '35px' },
  { label: 'Negociação', sublabel: 'Ajustes de valor e condições', color: 'bg-[#0dcaf0]', size: '35px' },
  { label: 'Fechamento', sublabel: 'Contrato assinado', color: 'bg-[#00d39b]', size: '50px' }
]

const checklist = [
  'Nenhuma informação se perde entre trocas de corretor',
  'Visão clara do estágio de cada negociação',
  'Menos follow-up manual no dia a dia'
]
</script>

<template>
  <section id="crm-rural-deal-timeline" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[900px] text-center">
        <h2>Negociações que duram meses, sem perder o histórico</h2>
        <p class="mx-auto mt-4 text-base leading-[1.4] text-ink tablet-lg:text-xl">
          Diferente de uma venda urbana, o negócio rural envolve mais decisores e prazos maiores.
          Acompanhe cada conversa, proposta e visita ao longo do tempo, sem depender da memória do
          corretor.
        </p>
      </div>

      <div
        class="mt-10 rounded-[30px] border border-[#f0f0f0] p-6 tablet-lg:p-10 desktop-full:mt-[34px]"
        style="background-image: linear-gradient(90deg, rgba(238,237,255,0.5) 0%, rgba(234,247,246,0.5) 100%)"
      >
        <div class="hidden tablet-lg:block">
          <div class="flex justify-between">
            <p
              v-for="stop in stops"
              :key="`label-${stop.label}`"
              class="w-[160px] text-center text-base font-semibold text-[#1b1f2d]"
            >
              {{ stop.label }}
            </p>
          </div>

          <div class="relative mt-4 flex h-[50px] items-center justify-between">
            <div class="absolute inset-x-0 h-[3px] bg-[#c5c4d7]" style="top: calc(50% - 1.5px)" />
            <span
              v-for="stop in stops"
              :key="`dot-${stop.label}`"
              class="relative z-[1] mx-auto rounded-full border-4 border-white"
              :class="stop.color"
              :style="{ width: stop.size, height: stop.size }"
            />
          </div>

          <div class="mt-4 flex justify-between">
            <p
              v-for="stop in stops"
              :key="`sublabel-${stop.label}`"
              class="w-[160px] text-center text-[13px] text-[#696984]"
            >
              {{ stop.sublabel }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-6 tablet-lg:hidden">
          <div v-for="stop in stops" :key="stop.label" class="flex items-center gap-4">
            <span class="shrink-0 rounded-full border-4 border-white" :class="stop.color" :style="{ width: stop.size, height: stop.size }" />
            <div>
              <p class="text-base font-semibold text-[#1b1f2d]">{{ stop.label }}</p>
              <p class="text-[13px] text-[#696984]">{{ stop.sublabel }}</p>
            </div>
          </div>
        </div>
      </div>

      <ul class="mt-10 flex flex-col items-start justify-center gap-4 tablet-lg:flex-row tablet-lg:flex-wrap tablet-lg:gap-x-[69px] tablet-lg:gap-y-4">
        <li v-for="item in checklist" :key="item" class="flex items-start gap-3">
          <span class="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full bg-teal text-white" aria-hidden="true">
            <IconCheck class="size-2.5" />
          </span>
          <span class="text-[15px] text-ink-soft">{{ item }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
