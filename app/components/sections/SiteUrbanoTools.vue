<script setup lang="ts">
interface Step {
  number: string
  title: string
  description: string
  icon: string
  circleClass: string
  badgeClass: string
  status?: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Copie o código',
    description: 'Use o ID ou script da ferramenta.',
    icon: '/icons/site-urbano-tools-icone-codigo.svg',
    circleClass: 'bg-[#eceaff]',
    badgeClass: 'bg-brand'
  },
  {
    number: '02',
    title: 'Adicione no painel',
    description: 'Cole no campo da integração.',
    icon: '/icons/site-urbano-tools-icone-painel.svg',
    circleClass: 'bg-[#e0f0ff]',
    badgeClass: 'bg-[#258ef1]'
  },
  {
    number: '03',
    title: 'Ative no site',
    description: 'Salve e comece a acompanhar.',
    icon: '/icons/site-urbano-tools-icone-ativar.svg',
    circleClass: 'bg-[#e0faf7]',
    badgeClass: 'bg-teal-link',
    status: 'Integração ativa'
  }
]
</script>

<template>
  <section id="site-urbano-ferramentas" class="section-py">
    <div class="container-page">
      <div class="rounded-[24px] bg-[#f5f5f5] px-6 py-10 tablet-lg:rounded-[50px] tablet-lg:px-[5.4%] tablet-lg:py-[69px]">
        <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:justify-between tablet-lg:gap-0">
          <div class="w-full tablet-lg:w-[55.4%]">
            <h2 class="leading-[1.2] desktop-full:text-[45px]">
              Adicione as principais ferramentas ao <span class="text-brand">seu site</span>
            </h2>
            <p class="mt-4 text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:mt-10 desktop-full:text-[24px]">
              Insira scripts de marketing, análise, segurança e atendimento diretamente pelo painel
              <strong>SUB100 Meu Site</strong>, com suporte a mais de 30 ferramentas compatíveis.
            </p>

            <p class="mt-10 text-[14px] font-semibold uppercase leading-[1.2] tracking-[1.12px] text-brand">
              Simples de configurar
            </p>

            <div class="relative mt-[18px] grid grid-cols-1 gap-10 tablet:grid-cols-3 tablet:gap-0">
              <div
                class="pointer-events-none absolute hidden h-[2px] bg-[rgba(92,94,240,0.42)] tablet:block"
                style="top: 41px; left: calc(16.6667% + 42px); right: calc(50% + 42px)"
              ></div>
              <div
                class="pointer-events-none absolute hidden h-[2px] bg-[rgba(20,184,178,0.42)] tablet:block"
                style="top: 41px; left: calc(50% + 42px); right: calc(16.6667% + 42px)"
              ></div>
              <img
                src="/icons/site-urbano-tools-seta-conector-1.svg"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute hidden size-[18px] tablet:block"
                style="top: 33px; left: calc(33.3333% - 9px)"
              />
              <img
                src="/icons/site-urbano-tools-seta-conector-2.svg"
                alt=""
                aria-hidden="true"
                class="pointer-events-none absolute hidden size-[18px] tablet:block"
                style="top: 33px; left: calc(66.6667% - 9px)"
              />

              <div
                v-for="step in steps"
                :key="step.number"
                class="flex flex-col items-center text-center"
              >
                <div
                  class="relative flex size-[84px] items-center justify-center rounded-full"
                  :class="step.circleClass"
                >
                  <img :src="step.icon" alt="" aria-hidden="true" class="size-10" />
                  <span
                    class="absolute inset-x-0 -bottom-[18px] mx-auto flex size-8 items-center justify-center rounded-full text-[13px] font-semibold text-white"
                    :class="step.badgeClass"
                  >
                    {{ step.number }}
                  </span>
                </div>

                <p class="mt-[26px] text-[16px] font-semibold leading-[1.25] text-ink">
                  {{ step.title }}
                </p>
                <p class="mt-[5px] max-w-[168px] text-[14px] leading-[1.45] text-ink">
                  {{ step.description }}
                </p>

                <div
                  v-if="step.status"
                  class="mt-2 flex h-8 w-[168px] max-w-full items-center justify-center gap-[7px] rounded-[16px] bg-[#d9f7e5] pr-[12px] pl-[10px]"
                >
                  <img
                    src="/icons/site-urbano-tools-check-status.svg"
                    alt=""
                    aria-hidden="true"
                    class="size-[17px] shrink-0"
                  />
                  <span class="text-[13px] font-semibold whitespace-nowrap text-[#0d9e5c]">
                    {{ step.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full tablet-lg:w-[40.2%]">
            <NuxtImg
              src="/images/modulos-site-urbano/tools-diagrama-integracoes.png"
              :width="1084"
              :height="1180"
              sizes="mobile-lg:100vw tablet-lg:360px desktop:440px desktop-full:542px"
              alt="Diagrama circular com o SUB100 Meu Site ao centro conectado a ferramentas de marketing, análise e atendimento"
              class="mx-auto h-auto w-full max-w-[542px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
