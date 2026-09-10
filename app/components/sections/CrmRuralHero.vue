<script setup lang="ts"></script>

<template>
  <CrmHero section-id="crm-rural-hero" divider-src="/icons/crm-rural-hero-divider-onda.svg">
    <template #content>
      <div class="flex w-full flex-col items-start gap-[38px] tablet-lg:w-[48.18%]">
        <div>
          <h1 class="font-['Poppins'] text-[28px] leading-[1.2] font-bold text-ink mobile-lg:text-[32px] tablet-lg:text-[34px] desktop-full:text-[36px]">
            <span class="block">A tecnologia certa para </span>
            <span class="block">quem vende <span class="text-brand">terra</span></span>
          </h1>
          <p class="mt-[13px] max-w-[520px] font-['Poppins'] text-[16px] leading-[1.4] text-ink tablet-lg:max-w-[675px] desktop-full:text-[24px]">
            Cadastre propriedades rurais com todos os dados técnicos que fazem diferença na
            negociação, e alcance compradores em qualquer lugar do mundo.
          </p>
        </div>

        <div class="relative z-[1] flex items-center gap-[15px]">
          <div class="relative flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]">
            <img src="/icons/crm-rural-hero-icone-rural.svg" alt="" style="width: 17.911px; height: 19px" />
          </div>
        </div>
      </div>
    </template>

    <template #visual>
      <div class="relative w-full tablet-lg:w-[51.46%]" style="aspect-ratio: 721 / 456">
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

        <div class="absolute" style="left: 6.66%; top: 4.39%; width: 93.2%; height: 90.35%">
          <div class="absolute hidden tablet-lg:flex items-center justify-center" style="left: 4.15%; top: 38.78%; width: 17.79%; height: 45.35%">
            <img
              src="/icons/crm-rural-hero-curva-1.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none max-w-none rotate-[-68.52deg]"
              style="width: 148.68%; height: 31.32%"
            />
          </div>
          <div class="absolute hidden tablet-lg:flex items-center justify-center" style="left: 62.8%; top: 11.21%; width: 31.24%; height: 53.55%">
            <img
              src="/icons/crm-rural-hero-curva-2.svg"
              alt=""
              aria-hidden="true"
              class="pointer-events-none"
              style="width: 87.17%; height: 56.2%; transform: rotate(-52.36deg) scaleX(-1)"
            />
          </div>

          <div
            class="absolute flex items-center gap-3 rounded-[20px] border border-[#eee] bg-white/60 px-3 py-2 backdrop-blur-[10px] mobile-lg:px-4 mobile-lg:py-3"
            style="left: 0%; top: 10.19%; width: 44.2%; height: 24.51%"
          >
            <span class="flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-[#eee] bg-brand mobile-lg:size-9">
              <img src="/icons/crm-rural-hero-icone-wheat.svg" alt="" class="size-4 mobile-lg:size-5" />
            </span>
            <span class="min-w-0">
              <p class="font-['Poppins'] text-[11px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft mobile-lg:text-[13px] tablet-lg:text-[15px] desktop-full:text-[18px]">
                Cadastro do imóvel
              </p>
              <p class="mt-0.5 font-['Poppins'] text-[9px] leading-[1.2] font-medium text-[#545567] mobile-lg:text-[11px] tablet-lg:text-[13px] desktop-full:text-[16px]">
                Dados completos da propriedade.
              </p>
            </span>
          </div>

          <div
            class="absolute flex items-center gap-3 rounded-[20px] border border-white bg-white/70 px-3 py-2 backdrop-blur-[10px] mobile-lg:px-4 mobile-lg:py-3"
            style="left: 3.72%; top: 75%; width: 43.3%; height: 25%"
          >
            <span class="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-brand mobile-lg:size-9">
              <img src="/icons/crm-rural-hero-icone-map-pin.svg" alt="" class="size-4 mobile-lg:size-5" />
            </span>
            <span class="min-w-0">
              <p class="font-['Poppins'] text-[11px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft mobile-lg:text-[13px] tablet-lg:text-[15px] desktop-full:text-[18px]">
                Mapas e Atributos
              </p>
              <p class="mt-0.5 font-['Poppins'] text-[9px] leading-[1.2] font-medium text-[#545567] mobile-lg:text-[11px] tablet-lg:text-[13px] desktop-full:text-[16px]">
                Informações da propriedade no mapa
              </p>
            </span>
          </div>

          <div class="absolute hidden rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:block" style="left: 92.93%; top: 4.39%; width: 6.94%; aspect-ratio: 1">
            <img src="/icons/crm-rural-hero-badge.svg" alt="" class="absolute inset-0 size-full" />
          </div>
        </div>
      </div>
    </template>
  </CrmHero>
</template>
