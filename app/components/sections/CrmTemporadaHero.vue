<script setup lang="ts"></script>

<template>
  <Hero
    section-id="crm-temporada-hero"
    section-style="background-image: linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)"
    divider-src="/icons/crm-temporada-hero-divider-onda.svg"
    content-pad="tablet-lg:pb-[50px]"
    :module-icons="[
      { src: '/icons/crm-temporada-hero-icone-imovel.svg', iconStyle: 'width: 17.91px; height: 19px' },
    ]"
  >
    <template #heading>
      <span class="block">Simplifique a gestão de</span>
      <span class="block">imóveis para <span class="text-brand">temporada</span></span>
    </template>

    <template #description>
      Cadastre imóveis, organize reservas, controle períodos disponíveis e apresente todas as informações necessárias para facilitar a locação por temporada.
    </template>

    <template #visual>
      <img
        src="/icons/crm-temporada-hero-ellipse-blur.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute opacity-70"
        style="left: 31.07%; top: 0; width: 51.87%; height: 97.81%"
      />

      <div class="absolute overflow-hidden mix-blend-darken" style="left: 31.07%; top: 0; width: 54.65%; height: 100%">
        <NuxtImg
          src="/images/modulos-crm-temporada/hero-foto-homem-laptop.png"
          :width="394"
          :height="428"
          sizes="mobile-lg:300px tablet:340px tablet-lg:240px desktop:300px desktop-full:394px"
          alt="Homem sorridente com laptop mostrando sistema de gestão de imóveis por temporada"
          class="h-full w-full object-bottom"
          loading="eager"
        />
      </div>

      <div
        class="absolute flex items-center justify-center rounded-[6px] border border-brand bg-[#e8e8fd]"
        style="right: 0; top: 4.39%; width: 6.94%; aspect-ratio: 1"
      >
        <img src="/icons/crm-temporada-hero-icone-calendar-badge.svg" alt="" class="absolute inset-0 size-full" />
      </div>

      <div class="absolute overflow-hidden z-[1]" style="left: 1.39%; top: 4.39%; width: 98.47%; height: 82.04%">
        <div class="season-arrow-lower absolute flex items-center justify-center" style="left: 3.94%; top: 54%; width: 30.61%; height: 52.69%">
          <img
            src="/icons/crm-temporada-hero-seta-curva-1.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none"
            style="width: 101.92%; height: 36.99%; transform: rotate(-140.52deg) scaleX(-1)"
          />
        </div>
        <div class="absolute flex items-center justify-center" style="left: 77.76%; top: 7.57%; width: 23.4%; height: 55.69%">
          <img
            src="/icons/crm-temporada-hero-seta-curva-2.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none"
            style="width: 110.15%; height: 59.52%; transform: rotate(-75.39deg) scaleX(-1)"
          />
        </div>

        <div
          class="season-card-principal absolute rounded-[10px] tablet-lg:rounded-[20px] border border-white bg-white/70 backdrop-blur-[10px]"
          style="left: 0; top: 14.43%; width: 43.52%; height: 49.45%"
        >
          <div class="absolute overflow-hidden rounded-[10px]" style="left: 6.8%; top: 11.35%; width: 32.69%; height: 76.22%">
            <NuxtImg
              src="/images/modulos-crm-temporada/hero-card-imovel-praia.png"
              :width="101"
              :height="141"
              sizes="101px"
              alt=""
              aria-hidden="true"
              class="h-full w-full object-bottom"
            />
          </div>
          <img
            src="/icons/crm-temporada-hero-status-dot.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute"
            style="left: 36.25%; top: 9.19%; width: 5.12%; aspect-ratio: 1"
          />
          <p
            class="absolute font-['Poppins'] text-[12px] leading-[1.2] font-bold tracking-[0.32px] whitespace-nowrap text-ink mobile-lg:text-[14px] tablet:text-[16px] desktop:text-[16px] desktop-full:text-[18px]"
            style="left: 44.98%; top: 13.51%"
          >
            Casa na Praia
          </p>
          <img
            src="/icons/crm-temporada-hero-icone-suites.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute"
            style="left: 44.98%; top: 30.14%; width: 5.18%; height: 8.39%"
          />
          <p
            class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium whitespace-nowrap text-ink mobile-lg:text-[10px] tablet:text-[11px] desktop:text-[11px]"
            style="left: 53.72%; top: 31.89%"
          >
            4 Suítes + 1 Quarto
          </p>
          <img
            src="/icons/crm-temporada-hero-icone-pessoas.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute"
            style="left: 44.98%; top: 41.87%; width: 5.18%; height: 9.97%"
          />
          <p
            class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium whitespace-nowrap text-ink mobile-lg:text-[10px] tablet:text-[11px] desktop:text-[11px]"
            style="left: 53.72%; top: 43.78%"
          >
            Até 10 pessoas
          </p>
          <img
            src="/icons/crm-temporada-hero-icone-vista-mar.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute"
            style="left: 44.98%; top: 55.57%; width: 5.18%; height: 8.65%"
          />
          <p
            class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium whitespace-nowrap text-ink mobile-lg:text-[10px] tablet:text-[11px] desktop:text-[11px]"
            style="left: 53.72%; top: 55.68%"
          >
            Vista para o mar
          </p>
          <div
            class="absolute flex items-center justify-center rounded-[7px] border border-brand"
            style="left: 44.98%; top: 71.35%; width: 49.19%; height: 16.76%"
          >
            <p class="font-['Poppins'] text-[9px] font-medium whitespace-nowrap text-brand mobile-lg:text-[10px] tablet:text-[11px] desktop:text-[11px]">
              Solicitar Reserva
            </p>
          </div>
        </div>

        <div
          class="season-card-reserva absolute rounded-[10px] tablet-lg:rounded-[20px] border border-white bg-white/50 backdrop-blur-[10px]"
          style="left: 54.51%; top: 55.87%; width: 44.51%; height: 23.26%"
        >
          <div
            class="season-card-icon absolute flex items-center justify-center rounded-[8px] bg-brand"
            style="left: 6.57%; top: 27.67%; width: 12.52%; aspect-ratio: 1"
          >
            <img src="/icons/crm-temporada-hero-card-calendar-icon.svg" alt="" class="season-card-icon-img absolute" style="inset: 27.5%" />
          </div>
          <p
            class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink mobile-lg:text-[12px] tablet:text-[14px] desktop:text-[14px] desktop-full:text-[18px]"
            style="left: 25%; top: 16.09%"
          >
            Nova reserva
          </p>
          <p
            class="absolute hidden font-['Poppins'] text-[9px] leading-[1.2] text-[#545567] tablet-lg:block desktop:text-[13px] desktop-full:text-[16px]"
            style="left: 25%; top: 50.57%"
          >
            Recebe agenda na SUBSEE
          </p>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style scoped>
@media (max-width: 991px) {
  .season-arrow-lower {
    left: 1.5% !important;
    top: 45% !important;
    width: 36% !important;
    height: 44% !important;
  }

  .season-card-principal {
    left: 2.5% !important;
    top: 8% !important;
    width: 50% !important;
    height: auto !important;
    aspect-ratio: 1.55 / 1 !important;
  }

  .season-card-reserva {
    left: 50% !important;
    top: 50% !important;
    width: 45% !important;
    height: auto !important;
    aspect-ratio: 3.25 / 1 !important;
  }

  .season-card-icon {
    left: 6.5% !important;
    top: 22% !important;
    width: 14.5% !important;
  }

  .season-card-icon-img {
    inset: auto !important;
    width: 56% !important;
    height: 56% !important;
    left: 22% !important;
    top: 22% !important;
  }
}

@media (max-width: 767px) {
  .season-arrow-lower {
    left: 1% !important;
    top: 41% !important;
    width: 36% !important;
    height: 44% !important;
  }

  .season-card-principal {
    left: 2% !important;
    top: 8% !important;
    width: 51% !important;
    height: auto !important;
    aspect-ratio: 1.5 / 1 !important;
  }

  .season-card-reserva {
    left: 49% !important;
    top: 50% !important;
    width: 46% !important;
    height: auto !important;
    aspect-ratio: 3.1 / 1 !important;
  }

  .season-card-icon {
    left: 6% !important;
    top: 21% !important;
    width: 15% !important;
  }

  .season-card-icon-img {
    inset: auto !important;
    width: 56% !important;
    height: 56% !important;
    left: 22% !important;
    top: 22% !important;
  }
}
</style>
