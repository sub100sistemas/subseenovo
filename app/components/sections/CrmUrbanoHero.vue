<script setup lang="ts"></script>

<template>
  <Hero
    section-id="crm-urbano-hero"
    section-style="background-image: linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)"
    divider-src="/icons/crm-hero-divider-onda.svg"
    badge-src="/icons/crm-hero-badge-icone.svg"
    :module-icons="[
      { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconStyle: 'width: 14.137px; height: 16.479px' },
      { src: '/icons/crm-hero-icone-venda.svg', iconStyle: 'width: 16.409px; height: 19.017px', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
      { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconStyle: 'width: 14.165px; height: 16.479px' },
    ]"
  >
    <template #heading>
      Acelere seus negócios no mercado <span class="text-brand">imobiliário urbano</span>
    </template>

    <template #description>
      Organize lançamentos, vendas e locações com gestão de leads, distribuição de
      atendimentos, funil de vendas e integração com portais em uma única plataforma
    </template>

    <template #visual>
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

      <div class="urbano-visual-layer absolute overflow-hidden" style="left: 0; top: 4.39%; width: 99.86%; height: 89.47%">
        <img
          src="/icons/crm-hero-seta-curva-azul.svg"
          alt=""
          aria-hidden="true"
          class="urbano-arrow-blue pointer-events-none absolute rotate-45"
          style="left: 29.74%; top: 34.84%; width: 22.36%; height: 12.99%"
        />
        <img
          src="/icons/crm-hero-seta-curva-verde.svg"
          alt=""
          aria-hidden="true"
          class="urbano-arrow-green pointer-events-none absolute"
          style="left: 76.88%; top: 28.06%; width: 25.42%; height: 30.39%; transform: rotate(90deg) scaleY(-1)"
        />

        <div
          class="urbano-card-top absolute overflow-hidden rounded-[10px] tablet-lg:rounded-[20px] border border-[#eee] bg-white/70 backdrop-blur-[10px]"
          style="left: 3.89%; top: 10.29%; width: 50.14%; height: 21.32%"
        >
          <div
            class="absolute left-[7.07%] top-[26.19%] flex w-[13.96%] aspect-square items-center justify-center rounded-[8px] border border-[#eee] bg-brand"
          >
            <img
              src="/icons/crm-urbano-hero-icone-compartilhar.svg"
              alt=""
              aria-hidden="true"
              style="width: 55%; height: 55%"
            />
          </div>
          <p
            class="urbano-title-top absolute font-['Poppins'] text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink mobile-lg:text-[13px] tablet:text-[13px] tablet-lg:whitespace-nowrap tablet-lg:text-[15px] desktop-full:text-[18px]"
            style="left: 22.16%; top: 14.94%"
          >
            Publicação integrado
          </p>
          <p
            class="absolute hidden font-['Poppins'] text-[10px] leading-[1.2] font-medium whitespace-nowrap text-[#545567] tablet-lg:block tablet-lg:text-[10px] desktop:text-[13px] desktop-full:text-[16px]"
            style="left: 22.44%; top: 52.87%"
          >
            No SUB100 e principais portais
          </p>
        </div>

        <div
          class="urbano-card-side absolute overflow-hidden rounded-[10px] tablet-lg:rounded-[20px] border border-solid border-white bg-white/50 backdrop-blur-[10px]"
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
            class="urbano-title-side absolute font-['Poppins'] text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink mobile-lg:text-[13px] tablet:text-[13px] tablet-lg:whitespace-nowrap tablet-lg:text-[15px] desktop-full:text-[18px]"
            style="left: 25%; top: 16.09%"
          >
            Proposta em análise
          </p>
          <p
            class="absolute hidden font-['Poppins'] text-[10px] leading-[1.2] whitespace-nowrap text-[#545567] tablet-lg:block tablet-lg:text-[10px] desktop:text-[13px] desktop-full:text-[16px]"
            style="left: 25%; top: 50.57%"
          >
            Negociação via CRM
          </p>
        </div>

        <div
          class="urbano-card-main absolute overflow-hidden rounded-[10px] tablet-lg:block tablet-lg:rounded-[20px] hidden border border-[#eee] bg-white/70 backdrop-blur-[10px]"
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
            class="absolute font-['Poppins'] text-[10px] leading-[1.2] font-bold tracking-[0.32px] whitespace-nowrap text-ink desktop-compact:text-[11px] desktop:text-[13px] desktop-full:text-[16px]"
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
            class="absolute font-['Poppins'] text-[7px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-ink desktop:text-[9px] desktop-full:text-[11px]"
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
            class="absolute font-['Poppins'] text-[7px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-ink desktop:text-[9px] desktop-full:text-[11px]"
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
            class="absolute font-['Poppins'] text-[7px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-ink desktop:text-[9px] desktop-full:text-[11px]"
            style="left: 53.72%; top: 56.22%"
          >
            185m² de Área total
          </p>

          <div
            class="absolute flex items-center justify-center rounded-[7px] border border-brand"
            style="left: 44.98%; top: 71.35%; width: 49.19%; height: 16.76%"
          >
            <p class="font-['Poppins'] text-[7px] leading-[1.2] font-medium tracking-[0.22px] whitespace-nowrap text-brand desktop:text-[9px] desktop-full:text-[11px]">
              Fazer uma proposta
            </p>
          </div>
        </div>

        <div
          class="absolute hidden overflow-hidden rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block"
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
    </template>
  </Hero>
</template>

<style scoped>
@media (max-width: 991px) {
  .urbano-visual-layer {
    left: 0.5% !important;
    top: 4.39% !important;
    width: 98.5% !important;
    height: 89.47% !important;
  }

  .urbano-card-top {
    left: 5% !important;
    top: 10.29% !important;
    width: 49% !important;
    height: auto !important;
    aspect-ratio: 3.5 / 1 !important;
  }

  .urbano-card-side {
    left: 54% !important;
    top: 50% !important;
    width: 45% !important;
    height: auto !important;
    aspect-ratio: 3.4 / 1 !important;
  }

  .urbano-card-main {
    left: 2% !important;
    top: 58% !important;
    width: 44% !important;
    height: 39% !important;
  }

  .urbano-arrow-blue {
    left: 28% !important;
    top: 37% !important;
  }

  .urbano-arrow-green {
    left: 74% !important;
    top: 27% !important;
  }

  .urbano-title-top,
  .urbano-title-side {
    top: 41% !important;
  }
}

@media (max-width: 767px) {
  .urbano-card-side {
    left: 53% !important;
    top: 50% !important;
    width: 46% !important;
    height: auto !important;
    aspect-ratio: 3.2 / 1 !important;
  }

  .urbano-card-main {
    left: 1% !important;
    top: 58% !important;
    width: 45% !important;
    height: 39% !important;
  }
}
</style>
