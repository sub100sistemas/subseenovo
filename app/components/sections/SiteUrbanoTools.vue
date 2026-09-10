<script setup lang="ts">
interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Copie o código',
    description: 'Use o ID ou script da ferramenta.'
  },
  {
    number: '2',
    title: 'Adicione no painel',
    description: 'Cole no campo da integração.'
  },
  {
    number: '3',
    title: 'Ative no site',
    description: 'Salve e comece a acompanhar.'
  }
]
</script>

<template>
  <section id="site-urbano-ferramentas" class="section-py">
    <div class="container-page">
      <div
        class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[3.15%]"
      >
        <div class="flex w-full flex-col gap-8 tablet-lg:w-[48%]">
          <div>
            <h2 class="leading-[1.2]">
              Adicione as principais<br />
              ferramentas ao <span class="text-brand">seu site</span>
            </h2>
            <p class="mt-4 text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
              Insira scripts de marketing, análise, segurança e atendimento diretamente pelo painel
              <strong>SUB100 Meu Site</strong>, com suporte a mais de 30 ferramentas compatíveis.
            </p>
          </div>

          <div>
            <p class="text-[12px] font-semibold uppercase tracking-[0.1em] text-brand">
              SIMPLES DE CONFIGURAR
            </p>
            <div class="mt-4 flex flex-col gap-5">
              <div
                v-for="step in steps"
                :key="step.number"
                class="flex items-start gap-4"
              >
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-[15px] font-bold text-white"
                >
                  {{ step.number }}
                </div>
                <div>
                  <p class="text-[16px] font-semibold text-ink">{{ step.title }}</p>
                  <p class="text-[15px] leading-[1.4] text-ink-soft">{{ step.description }}</p>
                </div>
              </div>
            </div>

            <div class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e8fdf4] px-4 py-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="#22C55E"/>
                <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[13px] font-semibold text-[#16A34A]">Integração ativa</span>
            </div>
          </div>
        </div>

        <div class="w-full tablet-lg:w-[48%]">
          <NuxtImg
            src="/images/modulos-site-urbano/tools-mockup-integration-circle.png"
            :width="900"
            :height="900"
            sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
            alt="Diagrama circular mostrando as integrações do SUB100 Meu Site com mais de 30 ferramentas de marketing, análise e atendimento"
            class="mx-auto h-auto w-full max-w-[560px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
