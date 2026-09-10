<script setup lang="ts">
interface DataPoint {
  label: string
  value: string
  highlight?: boolean
}

const dataPoints: DataPoint[] = [
  { label: 'Área da propriedade', value: '1.065,00 alq' },
  { label: 'Área aberta', value: '980,00 alq' },
  { label: 'Utilização do solo', value: '85,00%' },
  { label: 'Aptidão do solo', value: '120,00 conecat' },
  { label: 'Bioma', value: 'Cerrado e Mata Atlântica' },
  { label: 'Solo predominante', value: 'Latossolos' },
  { label: 'Juquirada', value: 'Sim' },
  { label: 'Altitude média', value: '680 m' },
  { label: 'Teor de argila', value: '28 a 32%' },
  { label: 'Pluviometria', value: '1.350 mm/ano' },
  { label: 'Cultivo predominante', value: 'Soja, milho, algodão e pecuária de corte', highlight: true },
  { label: 'Período das chuvas', value: 'Setembro ao fim de maio', highlight: true }
]

const checklist = [
  'Menos risco jurídico na hora de fechar negócio',
  'Agilidade para responder dúvidas técnicas do comprador',
  'Padronização das informações compartilhadas entre corretores',
  'Anexação de matrícula, CAR e laudos de avaliação em um só lugar'
]
</script>

<template>
  <section id="crm-rural-technical-report" class="section-py bg-white">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-start tablet-lg:gap-12 desktop-full:gap-[70px]">
        <div class="flex w-full flex-col items-start gap-6 tablet-lg:flex-1">
          <h2>
            Toda a documentação da propriedade em um <span class="text-brand">só lugar</span>
          </h2>
          <p class="text-base leading-[1.4] text-ink tablet-lg:text-xl">
            Reúna as informações técnicas que só o imóvel rural exige, área em hectares, situação
            documental, coordenadas e uso da terra, evitando que essa checagem fique espalhada em
            e-mails e pastas físicas.
          </p>

          <ul class="flex w-full flex-col gap-3">
            <li v-for="item in checklist" :key="item" class="flex items-start gap-3">
              <span class="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full bg-teal text-white" aria-hidden="true">
                <IconCheck class="size-2.5" />
              </span>
              <span class="text-base text-ink-soft">{{ item }}</span>
            </li>
          </ul>

          <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>

        <div class="w-full max-w-[600px] shrink-0 overflow-hidden rounded-[20px] border border-[#e8e8f7] bg-white shadow-[0px_2px_30px_0px_rgba(46,41,115,0.12)] tablet-lg:w-[600px]">
          <div class="flex items-start justify-between gap-4 bg-[#f7f7ff] px-6 py-4">
            <div>
              <p class="text-[10px] font-semibold tracking-[0.5px] text-brand">DADOS REAIS DO IMÓVEL</p>
              <p class="mt-1 text-xl font-semibold text-[#1a1f33]">Ficha da propriedade</p>
            </div>
            <span class="flex shrink-0 items-center gap-1.5 rounded-full bg-[#e3faf2] px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-[#0a7a61]">
              <span class="size-2 rounded-full bg-[#0a7a61]" aria-hidden="true" />
              10 informações
            </span>
          </div>

          <div class="grid grid-cols-1 gap-x-4 gap-y-2 p-6 mobile-lg:grid-cols-2">
            <div
              v-for="point in dataPoints"
              :key="point.label"
              class="flex gap-2.5 rounded-xl border p-3"
              :class="point.highlight ? 'border-[#f0f0f7] bg-[#edfcf7]' : 'border-[#f0f0f7] bg-[#fbfbfe]'"
            >
              <span class="w-1 shrink-0 rounded-[2px]" :class="point.highlight ? 'bg-[#00c291]' : 'bg-[#5c5ef0]'" aria-hidden="true" />
              <div class="min-w-0">
                <p class="text-[10px] font-medium text-[#636680]">{{ point.label }}</p>
                <p
                  class="mt-1 font-semibold text-[#1a1f33]"
                  :class="point.highlight ? 'text-[11px] leading-[15px]' : 'text-sm'"
                >
                  {{ point.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
