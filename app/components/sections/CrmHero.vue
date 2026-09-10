<script setup lang="ts">
type StyleValue = string | Record<string, string | number>

withDefaults(
  defineProps<{
    sectionId?: string
    sectionStyle?: StyleValue
    aspectClass?: string
    gapClass?: string
    topClass?: string
    heightClass?: string
    dividerSrc?: string
    mobileDividerSrc?: string
  }>(),
  {
    sectionId: 'crm-hero',
    sectionStyle: 'background-image: linear-gradient(119.58deg, #dcfdf4 1.99%, #eff0fb 62.6%, #b2c8f1 103.35%)',
    aspectClass: 'tablet-lg:aspect-[1401/528]',
    gapClass: 'gap-10',
    topClass: 'tablet-lg:top-[1.33%]',
    heightClass: 'tablet-lg:h-[86.36%]',
    dividerSrc: '/icons/crm-hero-divider-onda.svg',
    mobileDividerSrc: undefined,
  },
)
</script>

<template>
  <Hero
    :section-id="sectionId"
    :section-style="sectionStyle"
    :aspect-class="aspectClass"
    :gap-class="gapClass"
    :top-class="topClass"
    :height-class="heightClass"
    :divider-src="dividerSrc"
    :mobile-divider-src="mobileDividerSrc"
  >
    <template #content>
      <slot name="content">
            <div class="relative flex w-full flex-col items-start gap-[38px] tablet-lg:w-[48.18%]">
              <div class="absolute top-0 right-0 flex size-9 items-center justify-center rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:hidden">
                <img src="/icons/crm-hero-badge-icone.svg" alt="" style="width: 58%; height: 46%" />
              </div>
              <div>
                <h1 class="font-['Poppins'] text-[32px] leading-[1.1] font-bold text-ink tablet-lg:text-[30px] desktop-full:text-[42px]">
                  <span class="block">CRM Completo</span>
                  <span class="block">para <span class="text-brand">Imobiliárias</span></span>
                </h1>
                <p class="mt-[13px] max-w-[520px] font-['Poppins'] text-[16px] leading-[1.4] text-ink tablet-lg:max-w-[675px] desktop-full:text-[24px]">
                  Gerencie clientes, atendimentos, agendamentos, leads, propostas e negociações, tudo em
                  um só lugar para aumentar a produtividade da sua imobiliária.
                </p>
              </div>

              <div class="relative z-[1] flex items-center gap-[15px]">
                <div class="relative flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]">
                  <img src="/icons/crm-hero-icone-lancamentos-glyph.svg" alt="" style="width: 14.137px; height: 16.479px" />
                </div>
                <div class="relative flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.6)]">
                  <img src="/icons/crm-hero-icone-venda.svg" alt="" style="width: 16.409px; height: 19.017px" />
                </div>
                <div class="relative flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]">
                  <img src="/icons/crm-hero-icone-rural.svg" alt="" style="width: 17.911px; height: 19px" />
                </div>
                <div class="relative flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[0px_10px_20px_rgba(93,95,239,0.4)]">
                  <img src="/icons/crm-hero-icone-locacao-glyph.svg" alt="" style="width: 14.165px; height: 16.479px" />
                </div>
                <div class="relative flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand shadow-[9px_0px_20px_rgba(93,95,239,0.6)]">
                  <img src="/icons/crm-hero-icone-temporada-glyph.svg" alt="" style="width: 16.331px; height: 19px" />
                </div>
              </div>
            </div>
      </slot>
    </template>

    <template #visual>
      <slot name="visual">
            <div class="relative w-full tablet-lg:hidden" style="aspect-ratio: 721 / 456">
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
                  sizes="300px"
                  alt="Mulher sorridente segurando um notebook/tablet"
                  class="h-full w-full object-cover"
                  loading="eager"
                />
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
                  class="absolute rounded-[20px] border border-[#eee] bg-white/60 backdrop-blur-[10px]"
                  style="left: 5.41%; top: 10.29%; width: 43.69%; height: 21.32%"
                >
                  <div
                    class="absolute flex items-center justify-center rounded-[8px] border border-[#eee] bg-brand"
                    style="left: 8.11%; top: 26.2%; width: 12.56%; aspect-ratio: 1"
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
                  <p class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft mobile-lg:text-[11px] tablet:text-[13px]" style="left: 25.4%; top: 35.06%; transform: translateY(-50%)">
                    Agendar uma visita
                  </p>
                  <p class="absolute font-['Poppins'] text-[8px] leading-[1.2] font-medium text-[#696984] mobile-lg:text-[9px] tablet:text-[11px]" style="left: 25.71%; top: 52.87%">
                    Agenda inteligente
                  </p>
                </div>

                <div
                  class="absolute rounded-[20px] border border-solid border-white bg-white/80 backdrop-blur-[10px]"
                  style="left: 56.17%; top: 51.23%; width: 43.83%; height: 21.32%"
                >
                  <div
                    class="absolute flex items-center justify-center rounded-[8px] bg-brand"
                    style="left: 6.57%; top: 27.67%; width: 12.52%; aspect-ratio: 1"
                  >
                    <div class="absolute" style="left: 20%; top: 20%; width: 60%; height: 60%">
                      <img src="/icons/crm-hero-email-1.svg" alt="" class="absolute" style="inset: 14.29% 3.05% 47.47% 3.57%" />
                      <img src="/icons/crm-hero-email-2.svg" alt="" class="absolute" style="inset: 20.59% 0 14.29% 0" />
                    </div>
                  </div>
                  <p class="absolute font-['Poppins'] text-[9px] leading-[1.8] font-bold tracking-[0.36px] text-ink-soft mobile-lg:text-[11px] tablet:text-[13px]" style="left: 25%; top: 16.1%">
                    Fazer uma proposta
                  </p>
                  <p class="absolute font-['Poppins'] text-[8px] leading-[1.2] text-[#696984] mobile-lg:text-[9px] tablet:text-[11px]" style="left: 25%; top: 50.57%">
                    Negociação simplificada
                  </p>
                </div>

                <div
                  class="absolute rounded-[20px] border border-solid border-white bg-white/70 backdrop-blur-[10px]"
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
                  <p class="absolute font-['Poppins'] text-[9px] leading-[1.2] font-medium tracking-[0.36px] text-[#4f4f4f] mobile-lg:text-[11px] tablet:text-[13px]" style="left: 26.9%; top: 14.47%">
                    Paulo Henrique Silva
                  </p>
                  <p class="absolute font-['Nunito_Sans',_ui-sans-serif,_system-ui,_sans-serif] text-[8px] leading-[1.2] font-semibold text-[#696984] mobile-lg:text-[9px] tablet:text-[11px]" style="left: 26.9%; top: 29.56%; width: 67%">
                    Tenho interesse neste apartamento de 2 suítes.
                  </p>
                  <div class="absolute flex items-center justify-center rounded-[80px] bg-teal-link" style="left: 26.9%; top: 60.38%; width: 46.1%; height: 24.9%">
                    <p class="font-['Poppins'] text-[9px] font-medium whitespace-nowrap text-white mobile-lg:text-[11px] tablet:text-[13px]">
                      Me ligue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative hidden tablet-lg:block" style="width: 51.46%; aspect-ratio: 721 / 456">
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
                  sizes="343px"
                  alt="Mulher sorridente segurando um notebook/tablet"
                  class="h-full w-full object-cover"
                  loading="eager"
                />
              </div>

              <div
                class="absolute rounded-[6px] border border-brand bg-[#e8e8fd]"
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
                  class="absolute rounded-[20px] border border-[#eee] bg-white/60 backdrop-blur-[10px]"
                  style="left: 5.41%; top: 10.29%; width: 43.69%; height: 21.32%"
                >
                  <div
                    class="absolute flex items-center justify-center rounded-[8px] border border-[#eee] bg-brand"
                    style="left: 8.11%; top: 26.2%; width: 12.56%; aspect-ratio: 1"
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
                  <p class="absolute font-['Poppins'] text-[13px] leading-[1.2] font-bold tracking-[0.36px] text-ink-soft desktop:text-[15px] desktop-full:text-[18px]" style="left: 25.4%; top: 35.06%; transform: translateY(-50%)">
                    Agendar uma visita
                  </p>
                  <p class="absolute font-['Poppins'] text-[11px] leading-[1.2] font-medium text-[#696984] desktop:text-[13px] desktop-full:text-[16px]" style="left: 25.71%; top: 52.87%">
                    Agenda inteligente
                  </p>
                </div>

                <div
                  class="absolute rounded-[20px] border border-solid border-white bg-white/80 backdrop-blur-[10px]"
                  style="left: 56.17%; top: 51.23%; width: 43.83%; height: 21.32%"
                >
                  <div
                    class="absolute flex items-center justify-center rounded-[8px] bg-brand"
                    style="left: 6.57%; top: 27.67%; width: 12.52%; aspect-ratio: 1"
                  >
                    <div class="absolute" style="left: 20%; top: 20%; width: 60%; height: 60%">
                      <img src="/icons/crm-hero-email-1.svg" alt="" class="absolute" style="inset: 14.29% 3.05% 47.47% 3.57%" />
                      <img src="/icons/crm-hero-email-2.svg" alt="" class="absolute" style="inset: 20.59% 0 14.29% 0" />
                    </div>
                  </div>
                  <p class="absolute font-['Poppins'] text-[13px] leading-[1.8] font-bold tracking-[0.36px] text-ink-soft desktop:text-[15px] desktop-full:text-[18px]" style="left: 25%; top: 16.1%">
                    Fazer uma proposta
                  </p>
                  <p class="absolute font-['Poppins'] text-[11px] leading-[1.2] text-[#696984] desktop:text-[13px] desktop-full:text-[16px]" style="left: 25%; top: 50.57%">
                    Negociação simplificada
                  </p>
                </div>

                <div
                  class="absolute rounded-[20px] border border-solid border-white bg-white/70 backdrop-blur-[10px]"
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
                  <p class="absolute font-['Poppins'] text-[13px] leading-[1.2] font-medium tracking-[0.36px] text-[#4f4f4f] desktop:text-[15px] desktop-full:text-[18px]" style="left: 26.9%; top: 14.47%">
                    Paulo Henrique Silva
                  </p>
                  <p class="absolute font-['Nunito_Sans',_ui-sans-serif,_system-ui,_sans-serif] text-[11px] leading-[1.2] font-semibold text-[#696984] desktop:text-[13px] desktop-full:text-[16px]" style="left: 26.9%; top: 29.56%; width: 67%">
                    Tenho interesse neste apartamento de 2 suítes.
                  </p>
                  <div class="absolute flex items-center justify-center rounded-[80px] bg-teal-link" style="left: 26.9%; top: 60.38%; width: 46.1%; height: 24.9%">
                    <p class="font-['Poppins'] text-[13px] font-medium whitespace-nowrap text-white">
                      Me ligue
                    </p>
                  </div>
                </div>
              </div>
            </div>
      </slot>
    </template>
  </Hero>
</template>
