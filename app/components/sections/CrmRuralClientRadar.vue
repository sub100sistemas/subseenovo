<script setup lang="ts">
interface Step {
  number: string
  numberBg: string
  numberColor: string
  label: string
  labelColor: string
  title: string
  description: string
  border: string
}

const steps: Step[] = [
  {
    number: '01',
    numberBg: 'bg-[#ebedff]',
    numberColor: 'text-[#4d4fe0]',
    label: 'IMÓVEIS',
    labelColor: 'text-[#6b738f]',
    title: 'Analisa os imóveis',
    description: 'Características, localização e faixa de valor.',
    border: 'border-[#e3e8f5]'
  },
  {
    number: '02',
    numberBg: 'bg-[#f5ebff]',
    numberColor: 'text-[#8540d6]',
    label: 'CRUZAMENTO',
    labelColor: 'text-[#6b738f]',
    title: 'Compara os perfis',
    description: 'Preferências e interesses de cada cliente.',
    border: 'border-[#e3e8f5]'
  },
  {
    number: '03',
    numberBg: 'bg-[#e3faf0]',
    numberColor: 'text-[#0a8c61]',
    label: 'RESULTADO',
    labelColor: 'text-[#40806b]',
    title: 'Indica as melhores opções',
    description: 'Mais agilidade e chances reais de conversão.',
    border: 'border-[#cff0e3]'
  }
]

const checklist = [
  'Menos tempo procurando cliente para cada imóvel',
  'Atendimento mais consultivo e direcionado',
  'Aumento da taxa de conversão'
]
</script>

<template>
  <section id="crm-rural-client-radar" class="section-py">
    <div class="container-page">
      <div
        class="flex flex-col gap-10 rounded-[28px] border border-[#e5e7eb] p-6 tablet-lg:rounded-[40px] tablet-lg:p-12 desktop-full:flex-row desktop-full:items-center desktop-full:gap-20 desktop-full:rounded-[50px] desktop-full:p-[72px]"
        style="background-image: linear-gradient(90deg, #edeffd 0%, #f1f4fd 16.827%, #dae8f5 100%)"
      >
        <div class="w-full rounded-[28px] border border-[rgba(227,232,247,0.5)] bg-[#fbfcff] p-6 shadow-[0px_16px_36px_-12px_rgba(46,51,140,0.08)] tablet-lg:p-8 desktop-full:w-[620px] desktop-full:shrink-0">
          <span class="inline-flex items-center rounded-full bg-[#ebedff] px-3 py-1.5 text-[11px] font-semibold tracking-[0.66px] text-[#4042cc]">
            COMO FUNCIONA
          </span>
          <p class="mt-4 text-2xl font-bold text-[#1a1f38]">Do imóvel ao cliente certo</p>
          <p class="mt-2 text-sm text-[#5e6682]">
            O Radar Inteligente cruza dados e indica as melhores oportunidades.
          </p>

          <div class="mt-6 grid grid-cols-1 gap-4 mobile-lg:grid-cols-3">
            <div
              v-for="step in steps"
              :key="step.number"
              class="flex flex-col gap-2 rounded-[18px] border bg-white p-4 shadow-[0px_8px_20px_-8px_rgba(36,41,89,0.08)]"
              :class="step.border"
            >
              <div class="flex items-center gap-2">
                <span class="rounded-full px-2 py-1 text-[11px] font-bold" :class="[step.numberBg, step.numberColor]">
                  {{ step.number }}
                </span>
                <span class="text-[10px] font-semibold tracking-[0.4px]" :class="step.labelColor">{{ step.label }}</span>
              </div>
              <p class="text-[15px] font-semibold text-[#1c2138]">{{ step.title }}</p>
              <p class="text-[11px] leading-[1.45] text-[#666e87]">{{ step.description }}</p>
            </div>
          </div>

          <div class="mt-6 flex items-center gap-3 rounded-2xl border border-[#d1e0f5] px-4 py-3.5" style="background-image: linear-gradient(90deg, #f2f5ff 0%, #e8fcf5 100%)">
            <span class="size-2.5 shrink-0 rounded-full bg-teal-link" aria-hidden="true" />
            <div class="min-w-0">
              <p class="text-[13px] font-semibold text-[#1f293d]">Conexões mais rápidas e qualificadas</p>
              <p class="text-[11px] text-[#5e6b7d]">Menos busca manual, mais oportunidades para sua equipe.</p>
            </div>
          </div>
        </div>

        <div class="flex w-full flex-col items-start gap-5 desktop-full:flex-1">
          <h2>
            Cada terreno para o <span class="text-brand">investidor certo</span>
          </h2>
          <p class="text-base leading-[1.55] text-ink tablet-lg:text-xl">
            Use o Radar Cliente x Imóveis para identificar automaticamente quais leads têm
            interesse compatível com uma fazenda ou sítio recém cadastrado, por região, finalidade
            e faixa de valor.
          </p>

          <ul class="flex w-full flex-col gap-3.5">
            <li v-for="item in checklist" :key="item" class="flex items-center gap-3">
              <span class="flex size-7 shrink-0 items-center justify-center rounded-[14px] border border-[#e5e7eb] bg-[#eef2ff]" aria-hidden="true">
                <IconCheck class="size-3 text-brand" />
              </span>
              <span class="text-base text-ink-soft">{{ item }}</span>
            </li>
          </ul>

          <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
