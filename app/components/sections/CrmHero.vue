<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

type StyleValue = string | Record<string, string | number>

withDefaults(
  defineProps<{
    sectionId?: string
    sectionStyle?: StyleValue
    dividerSrc?: string
    badgeSrc?: string
    moduleIcons?: HeroModuleIcon[]
  }>(),
  {
    sectionId: 'crm-hero',
    sectionStyle:
      'background-image: linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)',
    dividerSrc: '/icons/crm-hero-divider-onda.svg',
    badgeSrc: '/icons/crm-hero-badge-icone.svg',
    moduleIcons: () => [
      { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconStyle: 'width: 14.137px; height: 16.479px' },
      { src: '/icons/crm-hero-icone-venda.svg', iconStyle: 'width: 16.409px; height: 19.017px', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
      { src: '/icons/crm-hero-icone-rural.svg', iconStyle: 'width: 17.911px; height: 19px' },
      { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconStyle: 'width: 14.165px; height: 16.479px' },
      { src: '/icons/crm-hero-icone-temporada-glyph.svg', iconStyle: 'width: 16.331px; height: 19px', shadowClass: 'shadow-[9px_0px_20px_rgba(93,95,239,0.6)]' },
    ],
  },
)
</script>

<template>
  <Hero
    :section-id="sectionId"
    :section-style="sectionStyle"
    :divider-src="dividerSrc"
    :badge-src="badgeSrc"
    :module-icons="moduleIcons"
  >
    <template #heading>
      <slot name="heading">
        <span class="block">CRM Completo</span>
        <span class="block">para <span class="text-brand">Imobiliárias</span></span>
      </slot>
    </template>

    <template #description>
      <slot name="description">
        Gerencie clientes, atendimentos, agendamentos, leads, propostas e negociações, tudo em
        um só lugar para aumentar a produtividade da sua imobiliária.
      </slot>
    </template>

    <template #visual>
      <slot name="visual">
        <img
          src="/icons/crm-hero-ellipse-blur.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute opacity-70"
          style="left: 31.07%; top: 0; width: 51.87%; height: 97.81%"
        />

        <div class="absolute overflow-hidden" style="left: 31.07%; top: 0; width: 47.57%; height: 100%">
          <NuxtImg
            src="/images/modulos-crm/hero-foto-mulher-notebook.png"
            :width="343"
            :height="456"
            sizes="mobile-lg:300px tablet:340px tablet-lg:240px desktop:300px desktop-full:343px"
            alt="Mulher sorridente segurando um notebook/tablet"
            class="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <div
          class="absolute rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:rounded-[6px]"
          style="left: 92.93%; top: 0; width: 6.94%; aspect-ratio: 1"
        >
          <img src="/icons/crm-hero-badge-icone.svg" alt="" class="absolute" style="left: 24%; top: 30%; width: 58%; height: 46%" />
        </div>

        <div class="absolute overflow-hidden z-[1]" style="left: 0; top: 4.39%; width: 100%; height: 89.47%">
          <img
            src="/icons/crm-hero-seta-curva-azul.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute rotate-[-30.95deg]"
            style="left: 26.24%; top: 37.66%; width: 22.33%; height: 12.99%"
          />
          <img
            src="/icons/crm-hero-seta-curva-verde.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute"
            style="left: 74%; top: 28.06%; width: 25.38%; height: 30.39%; transform: rotate(90deg) scaleY(-1)"
          />

          <div
            class="crm-card-top absolute rounded-[10px] tablet-lg:rounded-[20px] border border-[#eee] bg-white/60 backdrop-blur-[10px]"
            style="left: 5.41%; top: 10.29%; width: 43.69%; height: 21.32%"
          >
            <div
              class="absolute left-[8.11%] top-[26.2%] flex w-[13.96%] aspect-square items-center justify-center rounded-[8px] border border-[#eee] bg-brand"
            >
              <div class="absolute" style="left: 22.5%; top: 22.5%; width: 55%; height: 55%">
                <img src="/icons/crm-hero-calendar-1.svg" alt="" class="absolute" style="inset: 0 71.43% 89.29% 21.43%" />
                <img src="/icons/crm-hero-calendar-2.svg" alt="" class="absolute" style="inset: 0 21.43% 89.29% 71.43%" />
                <img src="/icons/crm-hero-calendar-3.svg" alt="" class="absolute" style="inset: 10.71% 0 0 0" />
                <img src="/icons/crm-hero-calendar-4.svg" alt="" class="absolute" style="bottom: 42.86%; left: 17.86%; right: 67.86%; top: 50%" />
                <img src="/icons/crm-hero-calendar-5.svg" alt="" class="absolute" style="bottom: 42.86%; left: 42.86%; right: 42.86%; top: 50%" />
                <img src="/icons/crm-hero-calendar-6.svg" alt="" class="absolute" style="bottom: 42.86%; left: 67.86%; right: 17.86%; top: 50%" />
                <img src="/icons/crm-hero-calendar-7.svg" alt="" class="absolute" style="inset: 64.29% 67.86% 28.57% 17.86%" />
                <img src="/icons/crm-hero-calendar-8.svg" alt="" class="absolute" style="inset: 64.29% 42.86% 28.57% 42.86%" />
                <img src="/icons/crm-hero-calendar-9.svg" alt="" class="absolute" style="inset: 64.29% 17.86% 28.57% 67.86%" />
                <img src="/icons/crm-hero-calendar-10.svg" alt="" class="absolute" style="inset: 78.57% 67.86% 14.29% 17.86%" />
                <img src="/icons/crm-hero-calendar-11.svg" alt="" class="absolute" style="inset: 78.57% 42.86% 14.29% 42.86%" />
                <img src="/icons/crm-hero-calendar-12.svg" alt="" class="absolute" style="inset: 78.57% 17.86% 14.29% 67.86%" />
              </div>
            </div>
            <p class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft mobile-lg:text-[13px] tablet:text-[13px] tablet-lg:text-[15px] desktop-full:text-[18px]" style="left: 25.4%; top: 41%">
              Agendar uma visita
            </p>
            <p class="absolute hidden font-['Poppins'] text-[9px] leading-[1.2] font-medium text-[#696984] tablet-lg:block tablet-lg:text-[9px] desktop:text-[13px] desktop-full:text-[16px]" style="left: 25.71%; top: 52.87%">
              Agenda inteligente
            </p>
          </div>

          <div
            class="crm-card-side absolute rounded-[10px] tablet-lg:rounded-[20px] border border-solid border-white bg-white/80 backdrop-blur-[10px]"
            style="left: 56.17%; top: 51.23%; width: 43.83%; height: 21.32%"
          >
            <div
              class="absolute left-[6.57%] top-[27.67%] flex w-[13.96%] aspect-square items-center justify-center rounded-[8px] bg-brand"
            >
              <div class="absolute" style="left: 20%; top: 20%; width: 60%; height: 60%">
                <img src="/icons/crm-hero-email-1.svg" alt="" class="absolute" style="inset: 14.29% 3.05% 47.47% 3.57%" />
                <img src="/icons/crm-hero-email-2.svg" alt="" class="absolute" style="inset: 20.59% 0 14.29% 0" />
              </div>
            </div>
            <p class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft mobile-lg:text-[13px] tablet:text-[13px] tablet-lg:text-[15px] desktop-full:text-[18px]" style="left: 25%; top: 41%">
              Fazer uma proposta
            </p>
            <p class="absolute hidden font-['Poppins'] text-[9px] leading-[1.2] text-[#696984] tablet-lg:block tablet-lg:text-[9px] desktop:text-[13px] desktop-full:text-[16px]" style="left: 25%; top: 50.57%">
              Negociação simplificada
            </p>
          </div>

          <div
            class="absolute rounded-[10px] tablet-lg:rounded-[20px] border border-solid border-white bg-white/70 backdrop-blur-[10px]"
            style="left: 0; top: 61.03%; width: 42.86%; height: 38.97%"
          >
            <img
              src="/images/modulos-crm/hero-avatar-paulo-henrique.png"
              width="44"
              height="44"
              alt="Foto de perfil de Paulo Henrique Silva"
              class="absolute rounded-full object-cover"
              style="left: 6.65%; top: 12.87%; width: 14.4%; aspect-ratio: 1"
            />
            <img
              src="/icons/crm-hero-status-dot.svg"
              alt=""
              class="absolute"
              style="left: 16.15%; top: 32.3%; width: 5.13%; aspect-ratio: 1"
            />
            <p class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium tracking-[0.36px] text-[#4f4f4f] mobile-lg:text-[13px] tablet:text-[13px] tablet-lg:text-[15px] desktop-full:text-[18px]" style="left: 26.9%; top: 14.47%">
              Paulo Henrique Silva
            </p>
            <p class="absolute font-['Nunito_Sans',_ui-sans-serif,_system-ui,_sans-serif] text-[9px] leading-[1.2] font-semibold text-[#696984] mobile-lg:text-[9px] tablet:text-[9px] tablet-lg:text-[13px] desktop-full:text-[16px]" style="left: 26.9%; top: 29.56%; width: 67%">
              Tenho interesse neste apartamento de 2 suítes.
            </p>
            <div class="absolute flex items-center justify-center rounded-[80px] bg-teal-link" style="left: 26.9%; top: 60.38%; width: 46.1%; height: 24.9%">
              <p class="font-['Poppins'] text-[9px] font-medium whitespace-nowrap text-white mobile-lg:text-[13px] tablet:text-[13px]">
                Me ligue
              </p>
            </div>
          </div>
        </div>
      </slot>
    </template>
  </Hero>
</template>

<style scoped>
@media (max-width: 991px) {
  .crm-card-top {
    width: 47% !important;
    height: auto !important;
    aspect-ratio: 3.4 / 1 !important;
  }

  .crm-card-side {
    width: 45% !important;
    height: auto !important;
    aspect-ratio: 3.3 / 1 !important;
  }
}

@media (max-width: 767px) {
  .crm-card-top {
    width: 48% !important;
    height: auto !important;
    aspect-ratio: 3.2 / 1 !important;
  }

  .crm-card-side {
    width: 46% !important;
    height: auto !important;
    aspect-ratio: 3.2 / 1 !important;
  }
}
</style>
