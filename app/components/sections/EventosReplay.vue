<script setup lang="ts">
interface ReplayCard {
  thumbnail: string
  alt: string
  tag: string
  title: string
  overlayCaption?: string
  versionBadge?: string
}

const replayCards: ReplayCard[] = [
  {
    thumbnail: '/images/eventos/eventos-replay-thumb-1.png',
    alt: 'Corretora sendo entrevistada em um escritório',
    tag: 'LIVE',
    title: 'Domine as estratégias de captação de recursos para loteamentos',
    overlayCaption: 'SVN Investimentos SUB100 Sistemas'
  },
  {
    thumbnail: '/images/eventos/eventos-replay-thumb-2.png',
    alt: 'Gráficos da versão 1.0.18',
    tag: 'VERSÃO ATUAL',
    title: 'Nova versão 1.0.18 do CRM SUBSEE — A maturidade nos processos.',
    versionBadge: '1.0.18'
  },
  {
    thumbnail: '/images/eventos/eventos-replay-thumb-3.png',
    alt: 'Notebook com capelo de formatura',
    tag: 'NOVOS TREINAMENTOS',
    title: 'Acesse a base de conhecimento e aprimore-se com as novas funcionalidades do CRM SUBSEE.'
  }
]
</script>

<template>
  <section id="eventos-replay" class="section-py">
    <div class="container-page">
      <div
        class="flex flex-col items-center gap-10 rounded-[30px] px-6 py-10 tablet:px-10 tablet-lg:rounded-[50px] desktop-full:px-[65px] desktop-full:py-[73px]"
        style="background-image: linear-gradient(117.49deg, rgb(235, 244, 254) 2.78%, rgb(239, 240, 251) 65.12%, rgba(178, 200, 241, 0.45) 104.45%)"
      >
        <div class="mx-auto max-w-[970px] text-center">
          <h2 class="text-[28px] leading-[1.4] font-bold text-ink tablet-lg:text-[36px]">
            Reveja nossos <span class="text-brand">eventos</span> e
            <span class="text-brand">novidades</span>
          </h2>
          <p class="mt-3 text-[18px] leading-[1.5] text-ink tablet-lg:text-[20px]">
            Assista aos <strong>replays de lives</strong>, treinamentos e lançamentos do CRM
            SUBSEE quando quiser.
          </p>
        </div>

        <div class="flex w-full flex-wrap items-stretch justify-center gap-[30px]">
          <div
            v-for="card in replayCards"
            :key="card.title"
            class="relative w-full min-w-[280px] max-w-[399px] flex-1 basis-0 overflow-hidden rounded-[15px] border border-[#ededf1] bg-white shadow-[0px_2px_5.5px_0px_rgba(0,0,0,0.08)]"
          >
            <div class="relative aspect-[399/267]">
              <NuxtImg
                format="avif"
                :src="card.thumbnail"
                :width="399"
                :height="267"
                sizes="tablet-lg:399px"
                :alt="card.alt"
                class="h-full w-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="relative flex size-[58px] items-center justify-center rounded-full border border-[#dde6f6] bg-white">
                  <img
                    src="/icons/eventos-icone-play-triangle.svg"
                    alt=""
                    aria-hidden="true"
                    class="ml-1 h-[15px] w-[20px] rotate-90"
                  />
                </div>
              </div>
              <div
                v-if="card.versionBadge"
                class="absolute top-[33.3%] left-[38.1%] flex"
              >
                <span class="rounded-[4px] bg-[#fdfdfe] px-3 py-1 text-[20px] leading-none font-bold tracking-[-0.28px] text-[#2764f2]">
                  {{ card.versionBadge }}
                </span>
              </div>
              <p
                v-if="card.overlayCaption"
                class="absolute bottom-4 left-[19px] w-[164px] text-[16px] leading-[1.1] font-bold text-white opacity-80"
              >
                {{ card.overlayCaption }}
              </p>
            </div>
            <div class="px-5 pt-4 pb-5">
              <p class="text-[14px] font-semibold tracking-[1.5px] text-[#3359d9] uppercase">
                {{ card.tag }}
              </p>
              <h3 class="mt-2 text-[16px] leading-[1.45] font-medium text-[#1a1a26]">
                {{ card.title }}
              </h3>
            </div>
          </div>
        </div>

        <a
          href="https://app.subsee.com.br/treinamentos/eventos-online?page=1&order=default"
          target="_blank"
          rel="noopener"
          class="flex h-[56px] w-full max-w-[349px] items-center justify-center gap-2 rounded-[12px] bg-brand text-[18px] text-white"
        >
          Ver mais vídeos no App SUBSEE
          <IconArrowRight class="size-5 shrink-0" />
        </a>
      </div>
    </div>
  </section>
</template>
