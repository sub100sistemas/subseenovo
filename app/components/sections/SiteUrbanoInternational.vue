<script setup lang="ts">
interface Language {
  flag: string
  name: string
  code: string
}

const languages: Language[] = [
  { flag: '🇧🇷', name: 'Português', code: 'PT' },
  { flag: '🇺🇸', name: 'Inglês', code: 'EN' },
  { flag: '🇪🇸', name: 'Espanhol', code: 'ES' },
  { flag: '🇩🇪', name: 'Alemão', code: 'DE' },
  { flag: '🇮🇹', name: 'Italiano', code: 'IT' },
  { flag: '🇨🇳', name: 'Chinês', code: 'ZH' }
]
</script>

<template>
  <section id="site-urbano-internacional" class="section-py">
    <div class="container-page">
      <div
        class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[3.15%]"
      >
        <div class="flex w-full flex-col gap-6 tablet-lg:w-[48%]">
          <h2 class="leading-[1.2]">
            Fale o idioma dos seus<br />
            clientes <span class="text-brand">internacionais</span>
          </h2>
          <p class="text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
            Habilite a tradução automática pelo <strong>painel SUB100 Meu Site</strong> e ofereça
            uma experiência fluida para compradores e locatários estrangeiros interessados em
            imóveis residenciais e comerciais.
          </p>

          <div class="flex flex-col gap-3">
            <p class="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
              Como funciona
            </p>
            <div class="flex flex-wrap items-center gap-2">
              <div class="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
                <img
                  src="/icons/logo-subsee-on.svg"
                  alt="SUBSEE on"
                  class="h-5 w-auto"
                  loading="lazy"
                />
                <span class="text-[12px] font-medium text-ink">SUBSEE on</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="shrink-0 text-ink-soft">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
                <img
                  src="/icons/logo-sub100-imoveis-produto.svg"
                  alt="SUB100 Meu Site"
                  class="h-5 w-auto"
                  loading="lazy"
                />
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="shrink-0 text-ink-soft">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/>
                </svg>
                <span class="text-[12px] font-medium text-ink">Google Tradutor</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="shrink-0 text-ink-soft">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="flex items-center gap-2 rounded-[10px] bg-white px-3 py-2 shadow-[0px_2px_12px_rgba(0,0,0,0.08)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="#5D5FEF" stroke-width="2"/>
                  <path d="M2 12h20M12 2c-3 4-3 14 0 20M12 2c3 4 3 14 0 20" stroke="#5D5FEF" stroke-width="1.5"/>
                </svg>
                <span class="text-[12px] font-medium text-ink">www.</span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full tablet-lg:w-[48%]">
          <div class="rounded-[20px] bg-white p-6 shadow-[0px_4px_30px_rgba(0,0,0,0.08)] tablet-lg:rounded-[30px] tablet-lg:p-8">
            <p class="text-[18px] font-semibold text-ink tablet-lg:text-[22px]">
              Navegue em seu idioma
            </p>
            <div class="mt-5 flex flex-col gap-3">
              <div
                v-for="lang in languages"
                :key="lang.code"
                class="flex items-center gap-3 rounded-[10px] bg-[#F7F7FF] px-4 py-3"
              >
                <span class="text-[22px] leading-none">{{ lang.flag }}</span>
                <span class="flex-1 text-[15px] font-medium text-ink">{{ lang.name }}</span>
                <span class="text-[13px] font-bold text-brand">{{ lang.code }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
