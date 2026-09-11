<script setup lang="ts">
interface Language {
  icon: string
  name: string
  code: string
}

const languages: Language[] = [
  { icon: '/icons/site-urbano-idioma-pt-br.svg', name: 'Português', code: 'PT' },
  { icon: '/icons/site-urbano-idioma-en.svg', name: 'Inglês', code: 'EN' },
  { icon: '/icons/site-urbano-idioma-es.svg', name: 'Espanhol', code: 'ES' },
  { icon: '/icons/site-urbano-idioma-de.svg', name: 'Alemão', code: 'DE' },
  { icon: '/icons/site-urbano-idioma-it.svg', name: 'Italiano', code: 'IT' },
  { icon: '/icons/site-urbano-idioma-zh.svg', name: 'Chinês', code: 'ZH' }
]
</script>

<template>
  <section id="site-urbano-internacional" class="section-py">
    <div class="container-page">
      <div
        class="flex flex-col items-center gap-10 rounded-[24px] bg-[#f2f1f8] px-6 py-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[3.15%] tablet-lg:rounded-[50px] tablet-lg:px-[79px] tablet-lg:py-[62px]"
      >
        <div class="flex w-full flex-col gap-6 tablet-lg:w-[73%]">
          <h2 class="leading-[1.2]">
            Fale o idioma dos seus<br />
            clientes <span class="text-brand">internacionais</span>
          </h2>
          <p class="text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
            Habilite a tradução automática pelo <strong>painel SUB100 Meu Site</strong> e ofereça
            uma experiência fluida para compradores e locatários estrangeiros interessados em
            imóveis residenciais e comerciais.
          </p>

          <div class="flex flex-col items-center gap-4 tablet-lg:flex-row tablet-lg:flex-wrap tablet-lg:gap-0">
            <div class="flex h-20 w-[180px] shrink-0 items-center justify-center rounded-[6px] bg-white">
              <img
                src="/icons/logo-subsee-on.svg"
                alt="SUBSEE on"
                class="h-[30px] w-auto"
                loading="lazy"
              />
            </div>

            <div class="flex h-9 w-3 shrink-0 items-center justify-center tablet-lg:hidden">
              <svg width="12" height="36" viewBox="0 0 12 36" fill="none" aria-hidden="true">
                <path d="M6 0V27" stroke="#6B6DF0" stroke-width="2" stroke-linecap="round" />
                <path
                  d="M1 23L6 30L11 23"
                  stroke="#6B6DF0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img
              src="/icons/site-urbano-internacional-seta.svg"
              alt=""
              aria-hidden="true"
              class="hidden h-3 w-[52px] shrink-0 tablet-lg:block"
            />

            <img
              src="/icons/site-urbano-internacional-sub100-card.svg"
              alt="SUB100 Meu Site"
              class="h-20 w-[153px] shrink-0"
            />

            <div class="flex h-9 w-3 shrink-0 items-center justify-center tablet-lg:hidden">
              <svg width="12" height="36" viewBox="0 0 12 36" fill="none" aria-hidden="true">
                <path d="M6 0V27" stroke="#6B6DF0" stroke-width="2" stroke-linecap="round" />
                <path
                  d="M1 23L6 30L11 23"
                  stroke="#6B6DF0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img
              src="/icons/site-urbano-internacional-seta.svg"
              alt=""
              aria-hidden="true"
              class="hidden h-3 w-[51px] shrink-0 tablet-lg:block"
            />

            <div class="flex h-20 w-[153px] shrink-0 items-center justify-center gap-2 rounded-[6px] bg-white">
              <img
                src="/images/modulos-site-urbano/internacional-google-icone.png"
                alt=""
                aria-hidden="true"
                class="h-8 w-8 shrink-0"
                loading="lazy"
              />
              <div class="flex flex-col items-start gap-0.5">
                <img
                  src="/icons/site-urbano-internacional-google-wordmark.svg"
                  alt="Google"
                  class="h-[15px] w-[47px]"
                />
                <span class="text-[9px] tracking-[0.18px] text-black">Tradutor</span>
              </div>
            </div>

            <div class="flex h-9 w-3 shrink-0 items-center justify-center tablet-lg:hidden">
              <svg width="12" height="36" viewBox="0 0 12 36" fill="none" aria-hidden="true">
                <path d="M6 0V27" stroke="#6B6DF0" stroke-width="2" stroke-linecap="round" />
                <path
                  d="M1 23L6 30L11 23"
                  stroke="#6B6DF0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img
              src="/icons/site-urbano-internacional-seta.svg"
              alt=""
              aria-hidden="true"
              class="hidden h-3 w-[51px] shrink-0 tablet-lg:block"
            />

            <div class="relative h-20 w-20 shrink-0">
              <img
                src="/icons/site-urbano-internacional-www-icon.svg"
                alt="www."
                class="h-full w-full"
              />
              <span
                class="absolute left-[15%] top-[38.75%] text-[20px] font-semibold tracking-[1px] text-brand"
              >
                www.
              </span>
            </div>
          </div>
        </div>

        <div class="relative w-full tablet-lg:w-[27%]">
          <div
            class="pointer-events-none absolute -left-[108px] -top-6 z-10 hidden h-[100px] w-[130px] items-center justify-center tablet-lg:flex"
            aria-hidden="true"
          >
            <img
              src="/icons/site-urbano-internacional-seta-curva.svg"
              alt=""
              class="h-[42px] w-[128px] -rotate-[31deg]"
            />
          </div>

          <div
            class="relative z-0 flex flex-col items-center gap-3 rounded-[8px] border border-[#dee2e6] bg-white px-6 pb-8 pt-6 shadow-[0px_8px_8px_rgba(0,0,0,0.15)]"
          >
            <p class="text-center text-[20px] font-semibold leading-[30px] text-[#212529]">
              Navegue em seu idioma
            </p>
            <div class="flex w-full flex-col gap-1">
              <div
                v-for="lang in languages"
                :key="lang.code"
                class="flex w-full items-center justify-between rounded-b-[6px] bg-[#e6e6e6] py-[7px] pl-[9px] pr-[17px]"
              >
                <div class="flex items-center gap-4">
                  <div class="flex size-[30px] items-center justify-center rounded-[6px] bg-[#ced4da]">
                    <img :src="lang.icon" alt="" aria-hidden="true" class="size-6 rounded-[4px]" />
                  </div>
                  <span class="text-[16px] leading-6 text-[#212529]">{{ lang.name }}</span>
                </div>
                <span class="text-[16px] leading-6 text-[#212529]">{{ lang.code }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
