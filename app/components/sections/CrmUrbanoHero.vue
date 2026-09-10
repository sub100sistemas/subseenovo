<script setup lang="ts"></script>

<template>
  <CrmHero section-id="crm-urbano-hero" mobile-divider-src="/icons/crm-hero-divider-onda.svg">
    <template #content>
      <div class="flex w-full flex-col items-start gap-6 tablet-lg:w-[48.18%] tablet-lg:gap-[38px]">
        <div>
          <h1 class="font-['Poppins'] text-[28px] leading-[1.2] font-bold text-ink tablet-lg:text-[24px] desktop:text-[30px] desktop-full:text-[36px]">
            Acelere seus negócios no mercado <span class="text-brand">imobiliário urbano</span>
          </h1>
          <p class="mt-[13px] max-w-[520px] font-['Poppins'] text-[16px] leading-[1.4] text-ink tablet-lg:max-w-[675px] tablet-lg:text-[17px] desktop:text-[20px] desktop-full:text-[24px]">
            Organize lançamentos, vendas e locações com gestão de leads, distribuição de
            atendimentos, funil de vendas e integração com portais em uma única plataforma
          </p>
        </div>

        <div class="relative z-[1] flex items-center gap-[15px]">
          <div class="flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]">
            <img
              src="/icons/crm-hero-icone-lancamentos-glyph.svg"
              alt=""
              aria-hidden="true"
              style="width: 14.137px; height: 16.479px"
            />
          </div>
          <div class="flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.6)]">
            <img
              src="/icons/crm-hero-icone-venda.svg"
              alt=""
              aria-hidden="true"
              style="width: 16.409px; height: 19.017px"
            />
          </div>
          <div class="flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]">
            <img
              src="/icons/crm-hero-icone-locacao-glyph.svg"
              alt=""
              aria-hidden="true"
              style="width: 14.165px; height: 16.479px"
            />
          </div>
        </div>
      </div>
    </template>

    <template #visual>
      <div class="relative w-full tablet-lg:w-[51.46%]" style="aspect-ratio: 721 / 456">
        <div class="absolute overflow-hidden" style="left: 34.26%; top: 0; width: 50.21%; height: 100%">
          <NuxtImg
            src="/images/modulos-crm-urbano/hero-foto-mulher-tablet.png"
            :width="724"
            :height="912"
            sizes="mobile-lg:180px tablet:340px tablet-lg:240px desktop:300px desktop-full:362px"
            alt="Corretora sorridente de blazer branco segurando um tablet"
            class="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <div class="absolute overflow-hidden" style="left: 0; top: 4.39%; width: 99.86%; height: 89.47%">
          <img
            src="/icons/crm-hero-seta-curva-azul.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute rotate-45"
            style="left: 29.74%; top: 34.84%; width: 22.36%; height: 12.99%"
          />
          <img
            src="/icons/crm-hero-seta-curva-verde.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute"
            style="left: 76.88%; top: 28.06%; width: 25.42%; height: 30.39%; transform: rotate(90deg) scaleY(-1)"
          />

          <div
            class="absolute overflow-hidden rounded-[20px] border border-[#eee] bg-white/70 backdrop-blur-[10px]"
            style="left: 3.89%; top: 10.29%; width: 50.14%; height: 21.32%"
          >
            <div
              class="absolute flex items-center justify-center rounded-[8px] border border-[#eee] bg-brand"
              style="left: 7.07%; top: 26.19%; width: 10.96%; aspect-ratio: 1"
            >
              <img
                src="/icons/crm-urbano-hero-icone-compartilhar.svg"
                alt=""
                aria-hidden="true"
                style="width: 55%; height: 55%"
              />
            </div>
            <p
              class="absolute font-['Poppins'] text-[9px] leading-[1.8] font-bold tracking-[0.36px] whitespace-nowrap text-ink mobile-lg:text-[12px] tablet:text-[16px] tablet-lg:text-[11px] desktop-compact:text-[12px] desktop:text-[15px] desktop-full:text-[18px]"
              style="left: 22.16%; top: 14.94%"
            >
              Publicação integrado
            </p>
            <p
              class="absolute font-['Poppins'] text-[8px] leading-[1.2] font-medium whitespace-nowrap text-[#545567] mobile-lg:text-[11px] tablet:text-[14px] tablet-lg:text-[10px] desktop-compact:text-[11px] desktop:text-[13px] desktop-full:text-[16px]"
              style="left: 22.44%; top: 52.87%"
            >
              No SUB100 e principais portais
            </p>
          </div>

          <div
            class="absolute overflow-hidden rounded-[20px] border border-solid border-white bg-white/50 backdrop-blur-[10px]"
            style="left: 55.14%; top: 51.23%; width: 43.89%; height: 21.32%"
          >
            <div
              class="absolute flex items-center justify-center rounded-[8px] bg-brand"
              style="left: 6.57%; top: 27.67%; width: 12.52%; aspect-ratio: 1"
            >
              <img
                src="/icons/crm-urbano-hero-icone-busca.svg"
                alt=""
                aria-hidden="true"
                style="width: 60%; height: 60%"
              />
            </div>
            <p
              class="absolute font-['Poppins'] text-[9px] leading-[1.8] font-bold tracking-[0.36px] whitespace-nowrap text-ink mobile-lg:text-[12px] tablet:text-[16px] tablet-lg:text-[11px] desktop-compact:text-[12px] desktop:text-[15px] desktop-full:text-[18px]"
              style="left: 25%; top: 16.09%"
            >
              Proposta em análise
            </p>
            <p
              class="absolute font-['Poppins'] text-[8px] leading-[1.2] whitespace-nowrap text-[#545567] mobile-lg:text-[11px] tablet:text-[14px] tablet-lg:text-[10px] desktop-compact:text-[11px] desktop:text-[13px] desktop-full:text-[16px]"
              style="left: 25%; top: 50.57%"
            >
              Negociação via CRM
            </p>
          </div>

          <div
            class="absolute overflow-hidden rounded-[20px] border border-[#eee] bg-white/70 backdrop-blur-[10px]"
            style="left: 0; top: 54.66%; width: 42.92%; height: 45.34%"
          >
            <NuxtImg
              src="/images/modulos-crm-urbano/hero-card-apartamento-predio.png"
              :width="303"
              :height="423"
              sizes="120px"
              alt="Fachada de um edifício residencial"
              class="absolute rounded-[10px] object-cover"
              style="left: 6.8%; top: 11.89%; width: 32.69%; height: 76.22%"
            />
            <img
              src="/icons/crm-hero-status-dot.svg"
              alt=""
              aria-hidden="true"
              class="absolute"
              style="left: 36.25%; top: 9.73%; width: 5.12%; aspect-ratio: 1"
            />
            <p
              class="absolute font-['Poppins'] text-[8px] leading-[1.2] font-bold tracking-[0.32px] whitespace-nowrap text-ink mobile-lg:text-[11px] tablet:text-[14px] tablet-lg:text-[10px] desktop-compact:text-[11px] desktop:text-[13px] desktop-full:text-[16px]"
              style="left: 44.98%; top: 14.05%"
            >
              Apartamento
            </p>

            <img
              src="/icons/crm-urbano-hero-icone-suites.svg"
              alt=""
              aria-hidden="true"
              class="absolute"
              style="left: 44.98%; top: 30.68%; width: 5.18%; aspect-ratio: 1"
            />
            <p
              class="absolute font-['Poppins'] text-[6px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-ink mobile-lg:text-[8px] tablet:text-[10px] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[11px]"
              style="left: 53.72%; top: 32.43%"
            >
              2 Suítes + 1 Quarto
            </p>

            <img
              src="/icons/crm-urbano-hero-icone-vagas.svg"
              alt=""
              aria-hidden="true"
              class="absolute"
              style="left: 44.98%; top: 42.58%; width: 5.5%; height: 8.65%"
            />
            <p
              class="absolute font-['Poppins'] text-[6px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-ink mobile-lg:text-[8px] tablet:text-[10px] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[11px]"
              style="left: 53.72%; top: 44.32%"
            >
              2 Vagas de garagem
            </p>

            <img
              src="/icons/crm-urbano-hero-icone-area.svg"
              alt=""
              aria-hidden="true"
              class="absolute"
              style="left: 44.98%; top: 54.47%; width: 5.18%; aspect-ratio: 1"
            />
            <p
              class="absolute font-['Poppins'] text-[6px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-ink mobile-lg:text-[8px] tablet:text-[10px] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[11px]"
              style="left: 53.72%; top: 56.22%"
            >
              185m² de Área total
            </p>

            <div
              class="absolute flex items-center justify-center rounded-[7px] border border-brand"
              style="left: 44.98%; top: 71.35%; width: 49.19%; height: 16.76%"
            >
              <p class="font-['Poppins'] text-[6px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-brand mobile-lg:text-[8px] tablet:text-[10px] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[11px]">
                Fazer uma proposta
              </p>
            </div>
          </div>

          <div
            class="absolute overflow-hidden rounded-[6px] border border-brand bg-[#e8e8fd]"
            style="left: 93.06%; top: 0; width: 6.94%; aspect-ratio: 1"
          >
            <img
              src="/icons/crm-urbano-hero-icone-calculadora.svg"
              alt=""
              aria-hidden="true"
              class="absolute"
              style="left: 30%; top: 26%; width: 40%; height: 50%"
            />
          </div>
        </div>
      </div>
    </template>
  </CrmHero>
</template>
