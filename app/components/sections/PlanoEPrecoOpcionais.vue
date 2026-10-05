<script setup lang="ts">
interface OpcionalRow {
  label: string
  precoUrbano: string
  precoRural: string
}

const opcionais: OpcionalRow[] = [
  { label: '5 usuários adicionais', precoUrbano: 'R$ 100,00', precoRural: 'R$ 100,00' },
  { label: 'Site & Hotsite Padrão', precoUrbano: 'R$ 1.200,00', precoRural: 'R$ 1.200,00' },
  { label: 'Site & Hotsite personalizado', precoUrbano: 'Consulte', precoRural: 'Consulte' }
]

interface OpcionalPlano {
  nome: string
  chave: 'precoUrbano' | 'precoRural'
  bordaClass: string
}

const planosEmpilhados: OpcionalPlano[] = [
  { nome: 'Urbano', chave: 'precoUrbano', bordaClass: 'border-brand' },
  { nome: 'Rural', chave: 'precoRural', bordaClass: 'border-[#686af1]' }
]

const rowPlacementClasses = ['row-start-2', 'row-start-3', 'row-start-4']
const columnsClass = 'grid grid-cols-[minmax(0,305fr)_minmax(0,370fr)_minmax(0,40fr)_minmax(0,370fr)]'
</script>

<template>
  <section id="opcionais" class="py-10">
    <div class="container-page flex flex-col items-center gap-[25px]">
      <div class="flex w-full max-w-[560px] flex-col gap-6 desktop:hidden">
        <h2 class="pl-1 text-[26px] leading-normal font-semibold text-brand">Opcionais</h2>
        <div
          v-for="plano in planosEmpilhados"
          :key="plano.nome"
          class="rounded-2xl border-2 bg-white"
          :class="plano.bordaClass"
        >
          <h3 class="py-4 text-center text-[28px] leading-8 font-bold text-brand">{{ plano.nome }}</h3>
          <ul class="divide-y divide-ink/12 rounded-b-[14px] bg-brand/[0.05]">
            <li v-for="item in opcionais" :key="item.label" class="flex items-center justify-between gap-4 px-4 py-3">
              <span class="relative pl-4 text-base leading-6 text-[#0b0d0f] before:absolute before:top-[10px] before:left-0 before:size-[5px] before:rounded-full before:bg-[#0b0d0f]">
                {{ item.label }}
              </span>
              <span class="shrink-0 text-base font-semibold text-ink">{{ item[plano.chave] }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="hidden w-full desktop:block">
        <div :class="[columnsClass, 'relative mx-auto max-w-[1085px] grid-rows-[80px_45px_45px_45px_33px]']">
          <div class="col-start-2 row-span-5 row-start-1 rounded-2xl border-2 border-brand bg-white">
            <h3 class="pt-6 text-center text-[32px] leading-8 font-bold text-brand">Urbano</h3>
          </div>
          <div class="col-start-4 row-span-5 row-start-1 rounded-2xl border-2 border-[#686af1] bg-white">
            <h3 class="pt-[38px] text-center text-[32px] leading-8 font-bold text-brand">Rural</h3>
          </div>

          <h2 class="relative col-start-1 row-start-1 self-start pt-[21px] pl-[7px] text-[26px] leading-normal font-semibold text-brand">
            Opcionais
          </h2>

          <div class="pointer-events-none relative col-span-4 col-start-1 row-span-3 row-start-2 bg-brand/[0.05]" aria-hidden="true" />

          <template v-for="(item, index) in opcionais" :key="item.label">
            <p :class="[rowPlacementClasses[index], 'relative col-start-1 flex items-center pl-[35px] text-base leading-7 text-[#0b0d0f] before:absolute before:top-[20px] before:left-[22px] before:size-[5px] before:rounded-full before:bg-[#0b0d0f]']">
              {{ item.label }}
            </p>
            <p :class="[rowPlacementClasses[index], 'relative col-start-2 flex items-center justify-center text-base font-semibold text-ink']">
              {{ item.precoUrbano }}
            </p>
            <p :class="[rowPlacementClasses[index], 'relative col-start-4 flex items-center justify-center text-base font-semibold text-ink']">
              {{ item.precoRural }}
            </p>
          </template>

          <div class="pointer-events-none relative col-span-4 col-start-1 row-start-3 -mt-px h-px bg-ink/12 self-start" aria-hidden="true" />
          <div class="pointer-events-none relative col-span-4 col-start-1 row-start-4 -mt-px h-px bg-ink/12 self-start" aria-hidden="true" />
        </div>
      </div>

      <div class="flex w-full max-w-[1085px] justify-center desktop:justify-start">
        <CtaButton
          variant="primary"
          to="/agendar-demonstracao/"
          class="w-[297px] max-w-full px-4! text-[18px]! mobile-lg:px-6! desktop:ml-[calc(50%+4px)]"
        >
          Agendar Demonstração
        </CtaButton>
      </div>
    </div>
  </section>
</template>
