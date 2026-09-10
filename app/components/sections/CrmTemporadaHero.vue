<script setup lang="ts"></script>

<template>
  <CrmHero
    section-id="crm-temporada-hero"
    aspect-class="tablet-lg:aspect-[1401/456]"
    gap-class="gap-8"
    top-class="tablet-lg:top-[1.5%]"
    height-class="tablet-lg:h-[95%]"
    divider-src="/icons/crm-temporada-hero-divider-onda.svg"
  >
    <template #content>
      <div class="relative flex w-full flex-col items-start gap-[38px] tablet-lg:w-[48.18%] tablet-lg:pb-[50px]">
        <div>
          <h1
            class="font-['Poppins'] text-[30px] leading-[1.2] font-bold text-ink tablet-lg:text-[30px] desktop-full:text-[36px]"
          >
            <span class="block">Simplifique a gestão de</span>
            <span class="block">imóveis para <span class="text-brand">temporada</span></span>
          </h1>
          <p class="mt-[13px] font-['Poppins'] text-[16px] leading-[1.4] text-ink tablet-lg:max-w-[675px] desktop-full:text-[24px]">
            Cadastre imóveis, organize reservas, controle períodos disponíveis e apresente todas as informações necessárias para facilitar a locação por temporada.
          </p>
        </div>

        <div class="flex items-center">
          <div
            class="flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]"
          >
            <img
              src="/icons/crm-temporada-hero-icone-imovel.svg"
              alt=""
              aria-hidden="true"
              style="width: 17.91px; height: 19px"
            />
          </div>
        </div>
      </div>
    </template>

    <template #visual>
      <div class="relative w-full tablet-lg:hidden" style="aspect-ratio: 721 / 456">
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
            sizes="300px"
            alt="Homem sorridente com laptop mostrando sistema de gestão de imóveis por temporada"
            class="h-full w-full object-bottom"
            loading="eager"
          />
        </div>

        <div class="absolute overflow-hidden z-[1]" style="left: 1.39%; top: 4.39%; width: 98.47%; height: 82.04%">
          <div class="absolute flex items-center justify-center" style="left: 3.94%; top: 62.35%; width: 30.61%; height: 52.69%">
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
            class="absolute rounded-[20px] border border-white bg-white/70 backdrop-blur-[10px]"
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
              class="absolute font-['Poppins'] text-[12px] leading-[1.2] font-bold tracking-[0.32px] whitespace-nowrap text-ink mobile-lg:text-[14px] tablet:text-[16px]"
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
              class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium whitespace-nowrap text-ink mobile-lg:text-[10px] tablet:text-[11px]"
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
              class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium whitespace-nowrap text-ink mobile-lg:text-[10px] tablet:text-[11px]"
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
              class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium whitespace-nowrap text-ink mobile-lg:text-[10px] tablet:text-[11px]"
              style="left: 53.72%; top: 55.68%"
            >
              Vista para o mar
            </p>
            <div
              class="absolute flex items-center justify-center rounded-[7px] border border-brand"
              style="left: 44.98%; top: 71.35%; width: 49.19%; height: 16.76%"
            >
              <p class="font-['Poppins'] text-[9px] font-medium whitespace-nowrap text-brand mobile-lg:text-[10px] tablet:text-[11px]">
                Solicitar Reserva
              </p>
            </div>
          </div>

          <div
            class="absolute rounded-[20px] border border-white bg-white/50 backdrop-blur-[10px]"
            style="left: 54.51%; top: 55.87%; width: 44.51%; height: 23.26%"
          >
            <div
              class="absolute flex items-center justify-center rounded-[8px] bg-brand"
              style="left: 6.57%; top: 27.67%; width: 12.52%; aspect-ratio: 1"
            >
              <img src="/icons/crm-temporada-hero-card-calendar-icon.svg" alt="" class="absolute" style="inset: 27.5%" />
            </div>
            <p
              class="absolute font-['Poppins'] text-[10px] leading-[1.8] font-bold tracking-[0.36px] text-ink mobile-lg:text-[12px] tablet:text-[14px] tablet:leading-[1.8]"
              style="left: 25%; top: 16.09%"
            >
              Nova reserva
            </p>
            <p
              class="absolute font-['Poppins'] text-[8px] leading-[1.2] text-[#545567] mobile-lg:text-[10px] tablet:text-[12px]"
              style="left: 25%; top: 50.57%"
            >
              Recebe agenda na SUBSEE
            </p>
          </div>
        </div>
      </div>

      <div class="relative hidden tablet-lg:block" style="width: 51.46%; aspect-ratio: 721 / 456">
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
            sizes="400px"
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
          <div class="absolute flex items-center justify-center" style="left: 3.94%; top: 62.35%; width: 30.61%; height: 52.69%">
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
            class="absolute rounded-[20px] border border-white bg-white/70 backdrop-blur-[10px]"
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
              class="absolute font-['Poppins'] text-[14px] leading-[1.2] font-bold tracking-[0.32px] whitespace-nowrap text-ink desktop:text-[16px] desktop-full:text-[18px]"
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
              class="absolute font-['Poppins'] text-[10px] leading-[1.2] font-medium whitespace-nowrap text-ink desktop:text-[11px]"
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
              class="absolute font-['Poppins'] text-[10px] leading-[1.2] font-medium whitespace-nowrap text-ink desktop:text-[11px]"
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
              class="absolute font-['Poppins'] text-[10px] leading-[1.2] font-medium whitespace-nowrap text-ink desktop:text-[11px]"
              style="left: 53.72%; top: 55.68%"
            >
              Vista para o mar
            </p>
            <div
              class="absolute flex items-center justify-center rounded-[7px] border border-brand"
              style="left: 44.98%; top: 71.35%; width: 49.19%; height: 16.76%"
            >
              <p class="font-['Poppins'] text-[10px] font-medium whitespace-nowrap text-brand desktop:text-[11px]">
                Solicitar Reserva
              </p>
            </div>
          </div>

          <div
            class="absolute rounded-[20px] border border-white bg-white/50 backdrop-blur-[10px]"
            style="left: 54.51%; top: 55.87%; width: 44.51%; height: 23.26%"
          >
            <div
              class="absolute flex items-center justify-center rounded-[8px] bg-brand"
              style="left: 6.57%; top: 27.67%; width: 12.52%; aspect-ratio: 1"
            >
              <img src="/icons/crm-temporada-hero-card-calendar-icon.svg" alt="" class="absolute" style="inset: 27.5%" />
            </div>
            <p
              class="absolute font-['Poppins'] text-[12px] leading-[1.8] font-bold tracking-[0.36px] text-ink desktop:text-[14px] desktop-full:text-[18px]"
              style="left: 25%; top: 16.09%"
            >
              Nova reserva
            </p>
            <p
              class="absolute font-['Poppins'] text-[11px] leading-[1.2] text-[#545567] desktop:text-[13px] desktop-full:text-[16px]"
              style="left: 25%; top: 50.57%"
            >
              Recebe agenda na SUBSEE
            </p>
          </div>
        </div>
      </div>
    </template>
  </CrmHero>
</template>
