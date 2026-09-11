<script setup lang="ts">
interface LeadSource {
  label: string
  icon: string
  chipColor: string
  position: string
}

interface Broker {
  initials: string
  name: string
  position: string
}

const sources: LeadSource[] = [
  {
    label: 'Site',
    icon: '/icons/crm-urbano-leads-icone-site.svg',
    chipColor: '#313846',
    position: 'tablet-lg:top-0'
  },
  {
    label: 'Portais',
    icon: '/icons/crm-urbano-leads-icone-portais.svg',
    chipColor: '#676af1',
    position: 'tablet-lg:top-[20.87%]'
  },
  {
    label: 'WhatsApp',
    icon: '/icons/crm-urbano-leads-icone-whatsapp.svg',
    chipColor: '#25d366',
    position: 'tablet-lg:top-[41.74%]'
  },
  {
    label: 'Redes Sociais',
    icon: '/icons/crm-urbano-leads-icone-redes-sociais.svg',
    chipColor: '#fbbc04',
    position: 'tablet-lg:top-[62.61%]'
  },
  {
    label: 'Indicações',
    icon: '/icons/crm-urbano-leads-icone-indicacoes.svg',
    chipColor: '#1cd9a4',
    position: 'tablet-lg:top-[83.48%]'
  }
]

const brokers: Broker[] = [
  { initials: 'JS', name: 'João Silva', position: 'tablet-lg:top-[10.43%]' },
  { initials: 'MC', name: 'Mariana Costa', position: 'tablet-lg:top-[40.22%]' },
  { initials: 'RL', name: 'Rafael Lima', position: 'tablet-lg:top-[70%]' }
]
</script>

<template>
  <section id="crm-urbano-leads" class="section-py">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[30px] bg-[linear-gradient(112.23deg,_#f2f1f8_5.76%,_#e3ecf8_46%,_#f2f1f8_89.6%)] px-4 py-10 tablet:px-8 tablet-lg:rounded-[50px] desktop-full:px-0 desktop-full:py-[56px]"
      >
        <img
          src="/icons/crm-urbano-leads-bloco-blobs.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover"
        />

        <div class="relative">
          <div class="mx-auto max-w-[900px] text-center">
            <h2 class="leading-[1.2]">
              Leads de todos os canais,
              <br class="hidden desktop-compact:block" />
              no corretor certo, na <span class="text-brand">hora certa</span>
            </h2>
            <p class="mx-auto mt-6 max-w-[960px] text-[20px] leading-[1.5] text-ink tablet-lg:text-[24px]">
              Centralize leads do site, portais, WhatsApp e indicações, e distribua automaticamente
              para quem pode atender primeiro.
            </p>
          </div>

          <div class="relative mx-auto mt-10 flex max-w-[420px] flex-col gap-4 tablet-lg:mt-[49px] tablet-lg:block tablet-lg:aspect-[1195/460] tablet-lg:max-w-[85.36%] tablet-lg:gap-0">
            <img
              src="/icons/crm-urbano-leads-conectores-esquerda.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute hidden max-w-none tablet-lg:block tablet-lg:left-[24.18%] tablet-lg:top-[8.02%] tablet-lg:h-[83.96%] tablet-lg:w-[13.95%]"
            />
            <img
              src="/icons/crm-urbano-leads-pontos-esquerda.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute hidden max-w-none tablet-lg:block tablet-lg:left-[23.52%] tablet-lg:top-[6.3%] tablet-lg:h-[87.39%] tablet-lg:w-[1.51%]"
            />
            <img
              src="/icons/crm-urbano-leads-conectores-direita.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute hidden max-w-none tablet-lg:block tablet-lg:left-[63.17%] tablet-lg:top-[19.98%] tablet-lg:h-[60.04%] tablet-lg:w-[12.65%]"
            />
            <img
              src="/icons/crm-urbano-leads-pontos-direita.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute hidden max-w-none tablet-lg:block tablet-lg:left-[74.98%] tablet-lg:top-[18.26%] tablet-lg:h-[63.48%] tablet-lg:w-[1.51%]"
            />
            <img
              src="/icons/crm-urbano-leads-ponto-central.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute hidden max-w-none tablet-lg:block tablet-lg:left-[37.16%] tablet-lg:top-[47.83%] tablet-lg:h-[4.35%] tablet-lg:w-[1.67%]"
            />
            <img
              src="/icons/crm-urbano-leads-ponto-central.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none absolute hidden max-w-none tablet-lg:block tablet-lg:left-[62.43%] tablet-lg:top-[47.83%] tablet-lg:h-[4.35%] tablet-lg:w-[1.67%]"
            />

            <div class="flex flex-col gap-4 tablet-lg:absolute tablet-lg:top-0 tablet-lg:left-0 tablet-lg:block tablet-lg:h-full tablet-lg:w-[24.27%]">
              <div
                v-for="source in sources"
                :key="source.label"
                class="flex items-center gap-[18px] rounded-[16px] border border-[#dce5f3] bg-white/92 py-[14px] pl-[16px] tablet-lg:absolute tablet-lg:left-0 tablet-lg:w-full tablet-lg:gap-[14px] tablet-lg:rounded-[12px] tablet-lg:py-[9px] tablet-lg:pl-[11px] desktop-compact:gap-[15px] desktop-compact:py-[10px] desktop-compact:pl-[12px] desktop:gap-[18px] desktop:rounded-[15px] desktop:py-[12px] desktop:pl-[15px] desktop-full:gap-[21px] desktop-full:rounded-[17px] desktop-full:py-[15px] desktop-full:pl-[17px]"
                :class="source.position"
              >
                <span
                  class="flex size-10 shrink-0 items-center justify-center rounded-[12px] tablet-lg:size-7 tablet-lg:rounded-[8px] desktop-compact:size-[29px] desktop:size-9 desktop:rounded-[10px] desktop-full:size-[42px] desktop-full:rounded-[13px]"
                  :style="{ backgroundColor: source.chipColor }"
                >
                  <img
                    :src="source.icon"
                    alt=""
                    aria-hidden="true"
                    class="max-h-[60%] max-w-[60%] object-contain"
                  />
                </span>
                <span class="text-[15px] leading-none whitespace-nowrap text-[#242a3a] tablet-lg:text-[10px] desktop-compact:text-[11px] desktop:text-[13px] desktop-full:text-[15px]">
                  {{ source.label }}
                </span>
              </div>
            </div>

            <div class="flex flex-col items-center gap-4 rounded-[24px] border border-[#d8d7fa] bg-white/93 px-6 py-5 tablet-lg:absolute tablet-lg:top-[26.09%] tablet-lg:left-[37.99%] tablet-lg:w-[25.27%] tablet-lg:gap-[10px] tablet-lg:rounded-[19px] tablet-lg:px-[14px] tablet-lg:py-[15px] desktop-compact:rounded-[20px] desktop-compact:py-[16px] desktop:gap-3 desktop:rounded-[25px] desktop:px-5 desktop:py-[19px] desktop-full:rounded-[30px] desktop-full:px-6 desktop-full:py-[23px]">
              <div class="flex items-center gap-[14px] tablet-lg:gap-[9px] desktop:gap-[11px] desktop-full:gap-[14px]">
                <span
                  class="flex size-[60px] shrink-0 items-center justify-center rounded-[17px] bg-[linear-gradient(126deg,_#6e67ff_0%,_#4644e8_100%)] tablet-lg:size-[46px] tablet-lg:rounded-[13px] desktop-compact:size-12 desktop:size-[58px] desktop:rounded-[16px] desktop-full:size-[69px] desktop-full:rounded-[19px]"
                >
                  <img
                    src="/icons/crm-urbano-leads-icone-camadas.svg"
                    alt=""
                    aria-hidden="true"
                    class="max-h-[46%] max-w-[44%] object-contain"
                  />
                </span>
                <span class="flex flex-col">
                  <span class="text-[26px] leading-[1.1] font-bold text-[#242a3a] tablet-lg:text-[20px] desktop-compact:text-[21px] desktop:text-[25px] desktop-full:text-[30px]">
                    CRM
                  </span>
                  <span class="text-[17px] leading-[1.1] font-bold text-[#655fef] tablet-lg:text-[13px] desktop:text-[16px] desktop-full:text-[19px]">
                    SUB100
                  </span>
                </span>
              </div>

              <span class="block h-px w-[84%] bg-[#e3e5f1]"></span>

              <p class="text-center text-[13px] leading-[1.35] text-ink tablet-lg:text-[10px] desktop:text-[12px] desktop-full:text-[14px]">
                Distribuição inteligente
                <br />
                para o corretor disponível.
              </p>

              <span class="block h-[5px] w-[46%] overflow-hidden rounded-full bg-[#ececff]">
                <span class="block h-full w-[71%] rounded-full bg-[#6863f1]"></span>
              </span>
            </div>

            <div class="flex items-center gap-[11px] rounded-[16px] border border-[#dfe1f4] bg-white/94 px-[11px] py-3 tablet-lg:absolute tablet-lg:top-[80.43%] tablet-lg:left-[41.34%] tablet-lg:w-[18.58%] tablet-lg:gap-[8px] tablet-lg:rounded-[12px] tablet-lg:px-[8px] tablet-lg:py-[9px] desktop:gap-[10px] desktop:rounded-[15px] desktop:px-[10px] desktop:py-[11px] desktop-full:gap-[12px] desktop-full:rounded-[18px] desktop-full:px-[12px] desktop-full:py-[13px]">
              <span class="flex size-[33px] shrink-0 items-center justify-center rounded-full bg-[#f0f0ff] tablet-lg:size-[23px] desktop-compact:size-6 desktop:size-[29px] desktop-full:size-[34px]">
                <span class="relative block size-[80%]">
                  <img
                    src="/icons/crm-urbano-leads-icone-tempo-1.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute left-[8.33%] top-[16.67%] w-[83.33%] h-[38.89%] max-w-none"
                  />
                  <img
                    src="/icons/crm-urbano-leads-icone-tempo-2.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute left-[25%] top-[27.78%] w-1/2 h-1/2 max-w-none"
                  />
                  <img
                    src="/icons/crm-urbano-leads-icone-tempo-3.svg"
                    alt=""
                    aria-hidden="true"
                    class="absolute left-[47.22%] top-[38.89%] w-[19.44%] h-[16.67%] max-w-none"
                  />
                </span>
              </span>
              <span class="flex flex-col">
                <span class="text-[11px] leading-[1.2] whitespace-nowrap text-[#747c92] tablet-lg:text-[8px] desktop:text-[10px] desktop-full:text-[11px]">
                  Tempo médio
                </span>
                <span class="flex items-baseline gap-2 tablet-lg:gap-[5px] desktop:gap-[6px] desktop-full:gap-2">
                  <span class="text-[24px] leading-[1.1] font-bold whitespace-nowrap text-[#5753e8] tablet-lg:text-[17px] desktop:text-[21px] desktop-full:text-[25px]">
                    8s
                  </span>
                  <span class="text-[10px] leading-[1.2] font-bold whitespace-nowrap text-[#0daf7d] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[10px]">
                    +32% rápido
                  </span>
                </span>
              </span>
            </div>

            <div class="flex flex-col gap-4 tablet-lg:absolute tablet-lg:top-0 tablet-lg:left-[75.73%] tablet-lg:block tablet-lg:h-full tablet-lg:w-[24.27%]">
              <div
                v-for="broker in brokers"
                :key="broker.initials"
                class="flex items-center gap-[14px] rounded-[20px] border border-[#deddf5] bg-white/94 py-4 pl-[19px] tablet-lg:absolute tablet-lg:left-0 tablet-lg:w-full tablet-lg:gap-[10px] tablet-lg:rounded-[14px] tablet-lg:py-[13px] tablet-lg:pl-[13px] desktop-compact:gap-[11px] desktop-compact:py-[14px] desktop-compact:pl-[14px] desktop:gap-[13px] desktop:rounded-[17px] desktop:py-[17px] desktop:pl-[17px] desktop-full:gap-[15px] desktop-full:rounded-[20px] desktop-full:py-5 desktop-full:pl-5"
                :class="broker.position"
              >
                <span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#eeedff] text-[15px] font-bold text-[#605be8] tablet-lg:size-[31px] tablet-lg:text-[10px] desktop-compact:size-8 desktop-compact:text-[11px] desktop:size-[39px] desktop:text-[13px] desktop-full:size-[46px] desktop-full:text-[15px]">
                  {{ broker.initials }}
                </span>
                <span class="flex flex-col gap-[3px]">
                  <span class="text-[14px] leading-[1.2] font-medium whitespace-nowrap text-ink tablet-lg:text-[10px] desktop:text-[12px] desktop-full:text-[14px]">
                    {{ broker.name }}
                  </span>
                  <span class="flex items-center gap-[7px] tablet-lg:gap-[5px] desktop-full:gap-[7px]">
                    <span class="block size-[7px] shrink-0 rounded-full bg-[#12be83] tablet-lg:size-[5px] desktop-full:size-[7px]"></span>
                    <span class="text-[10px] leading-[1.2] whitespace-nowrap text-[#12a976] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[10px]">
                      Disponível agora
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div class="mt-10 flex justify-center desktop-full:mt-[45px]">
            <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
              Testar grátis por 30 dias
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
