<script setup lang="ts"></script>

<template>
  <Hero
    section-id="crm-rural-hero"
    section-style="background-image: linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)"
    divider-src="/icons/crm-rural-hero-divider-onda.svg"
    badge-src="/icons/crm-rural-hero-badge.svg"
    badge-icon-class="size-full"
    badge-icon-style=""
    :module-icons="[
      { src: '/icons/crm-rural-hero-icone-rural.svg', iconStyle: 'width: 17.911px; height: 19px' },
    ]"
  >
    <template #heading>
      <span class="block">A tecnologia certa para </span>
      <span class="block">quem vende <span class="text-brand">terra</span></span>
    </template>

    <template #description>
      Cadastre propriedades rurais com todos os dados técnicos que fazem diferença na
      negociação, e alcance compradores em qualquer lugar do mundo.
    </template>

    <template #visual>
      <img
        src="/icons/crm-rural-hero-ellipse-blur.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute opacity-70"
        style="left: 31.07%; top: 0; width: 51.87%; height: 97.81%"
      />

      <div class="absolute overflow-hidden" style="left: 30.1%; top: 2.63%; width: 57.14%; height: 99.34%">
        <NuxtImg
          src="/images/modulos-crm-rural/hero-composicao-mapa-propriedade.png"
          :width="412"
          :height="453"
          sizes="mobile-lg:300px tablet-lg:412px"
          alt="Composição mostrando um celular exibindo o mapa de uma propriedade rural com camadas e um homem apontando para o mapa"
          class="h-full w-full object-contain"
          loading="eager"
        />
      </div>

      <div class="rural-visual-layer absolute" style="left: 6.66%; top: 4.39%; width: 93.2%; height: 90.35%">
        <div class="rural-arrow-left absolute flex items-center justify-center" style="left: 4.15%; top: 38.78%; width: 17.79%; height: 45.35%">
          <img
            src="/icons/crm-rural-hero-curva-1.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none max-w-none rotate-[-68.52deg]"
            style="width: 148.68%; height: 31.32%"
          />
        </div>
        <div class="rural-arrow-right absolute flex items-center justify-center" style="left: 62.8%; top: 11.21%; width: 31.24%; height: 53.55%">
          <img
            src="/icons/crm-rural-hero-curva-2.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none"
            style="width: 87.17%; height: 56.2%; transform: rotate(-52.36deg) scaleX(-1)"
          />
        </div>

        <div
          class="rural-card-top absolute flex items-center gap-3 rounded-[10px] tablet-lg:rounded-[20px] border border-[#eee] bg-white/60 px-3 py-2 backdrop-blur-[10px] mobile-lg:px-4 mobile-lg:py-3"
          style="left: 0%; top: 10.19%; width: 44.2%; height: 24.51%"
        >
          <span class="flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-[#eee] bg-brand mobile-lg:size-9">
            <img src="/icons/crm-rural-hero-icone-wheat.svg" alt="" class="size-4 mobile-lg:size-5" />
          </span>
          <span class="min-w-0">
            <p class="font-['Poppins'] text-center text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft tablet-lg:text-[15px] desktop-full:text-[18px]">
              Cadastro do imóvel
            </p>
            <p class="mt-0.5 hidden font-['Poppins'] text-[9px] leading-[1.2] font-medium text-[#545567] tablet-lg:block tablet-lg:text-[13px] desktop-full:text-[16px]">
              Dados completos da propriedade.
            </p>
          </span>
        </div>

        <div
          class="rural-card-bottom absolute flex items-center gap-3 rounded-[10px] tablet-lg:rounded-[20px] border border-white bg-white/70 px-3 py-2 backdrop-blur-[10px] mobile-lg:px-4 mobile-lg:py-3"
          style="left: 3.72%; top: 75%; width: 43.3%; height: 25%"
        >
          <span class="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-brand mobile-lg:size-9">
            <img src="/icons/crm-rural-hero-icone-map-pin.svg" alt="" class="size-4 mobile-lg:size-5" />
          </span>
          <span class="min-w-0">
            <p class="font-['Poppins'] text-center text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft tablet-lg:text-[15px] desktop-full:text-[18px]">
              Mapas e Atributos
            </p>
            <p class="mt-0.5 hidden font-['Poppins'] text-[9px] leading-[1.2] font-medium text-[#545567] tablet-lg:block tablet-lg:text-[13px] desktop-full:text-[16px]">
              Informações da propriedade no mapa
            </p>
          </span>
        </div>

        <div class="absolute hidden rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block" style="left: 92.93%; top: 4.39%; width: 6.94%; aspect-ratio: 1">
          <img src="/icons/crm-rural-hero-badge.svg" alt="" class="absolute inset-0 size-full" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style scoped>
@media (max-width: 991px) {
  .rural-visual-layer {
    left: 4% !important;
    top: 4% !important;
    width: 94% !important;
    height: 90% !important;
  }

  .rural-card-top {
    left: 1% !important;
    top: 10% !important;
    width: 50% !important;
    height: 27% !important;
  }

  .rural-card-bottom {
    left: 4% !important;
    top: 65% !important;
    width: 49% !important;
    height: 27% !important;
  }

  .rural-arrow-left {
    left: 5% !important;
    top: 35% !important;
    width: 22% !important;
    height: 44% !important;
  }

  .rural-arrow-right {
    left: 60% !important;
    top: 10% !important;
    width: 33% !important;
    height: 50% !important;
  }
}

@media (max-width: 767px) {
  .rural-card-top {
    left: 0.5% !important;
    top: 10% !important;
    width: 50% !important;
    height: 27% !important;
  }

  .rural-card-bottom {
    left: 3% !important;
    top: 60% !important;
    width: 51% !important;
    height: 26% !important;
  }

  .rural-arrow-left {
    left: 4% !important;
    top: 36% !important;
    width: 24% !important;
    height: 43% !important;
  }

  .rural-arrow-right {
    left: 58% !important;
    top: 11% !important;
    width: 35% !important;
    height: 49% !important;
  }
}
</style>
