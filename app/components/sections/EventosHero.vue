<script setup lang="ts"></script>

<template>
  <section id="eventos-hero" class="relative overflow-hidden section-py">
    <img
      src="/icons/eventos-icone-divider-horizontal.svg"
      alt="Divisor decorativo" title="Divisor decorativo"
      aria-hidden="true"
      class="pointer-events-none absolute top-[17px] left-[calc(50%_-_50vw)] hidden w-screen max-w-none tablet-lg:block"
    />

    <div class="container-page relative flex flex-col items-center gap-[26px]">
      <h1 class="max-w-[738px] text-center text-[28px] leading-[1.2] font-bold text-ink tablet-lg:text-[36px]">
        Eventos Online e Replays do SUBSEE <span class="text-[#e33b48]">on</span>
      </h1>
      <p class="max-w-[1047px] text-center text-[18px] leading-[1.4] text-ink tablet-lg:text-[24px]">
        Participe de lives, webinars e treinamentos ao vivo sobre o sistema, e acesse os replays a
        qualquer momento para não perder nenhum conteúdo.
      </p>

      <div class="relative mt-4 flex w-full max-w-[1400px] flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[56px]">
        <img
          src="/images/eventos/eventos-hero-shape-1.png"
          alt="Forma decorativa" title="Forma decorativa"
          aria-hidden="true"
          class="pointer-events-none absolute left-[-6.4%] top-[-3%] -z-[1] hidden w-[12.7%] opacity-50 desktop-full:block"
        />
        <img
          src="/images/eventos/eventos-hero-shape-2.png"
          alt="Forma decorativa" title="Forma decorativa"
          aria-hidden="true"
          class="pointer-events-none absolute left-[44.1%] top-[77.5%] -z-[1] hidden w-[12.1%] desktop-full:block"
        />

        <div class="w-full tablet-lg:w-[55.36%]">
          <NuxtImg
            format="avif"
            src="/images/eventos/banner-eventos.png"
            :width="1550"
            :height="976"
            sizes="mobile-lg:100vw tablet-lg:600px desktop-full:775px"
            alt="Versão 1.0.19: evento ao vivo, 29 out às 09h" title="Versão 1.0.19: evento ao vivo, 29 out às 09h"
            class="h-auto w-full rounded-[20px]"
            loading="eager"
            fetchpriority="high"
          />
        </div>

        <div class="flex w-full flex-col items-start gap-4 tablet-lg:w-[40.79%]">
          <p class="text-[13px] font-medium tracking-[2px] text-[#595959] uppercase">
            Próximo evento
          </p>
          <p class="text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px] tablet-lg:leading-[36px]">
            A <strong class="font-bold text-brand">nova versão do</strong> <strong class="font-bold text-brand">CRM SUBSEE</strong> fecha um importante ciclo de evolução, com Automações de
            Marketing, Kanban personalizável para Lançamentos, Venda, Rural e Locação, além de
            novos recursos como Radar de Oportunidades, Comparação de Imóveis e Comitê de
            Avaliação, ampliando a gestão comercial e a inteligência do atendimento.
          </p>
          <a
            href="/inscreva-se/" :title="titleForLink('/inscreva-se/')" :aria-label="titleForLink('/inscreva-se/')"
            class="flex h-[52px] w-[193px] items-center justify-center rounded-[5px] border border-brand bg-brand text-[15px] font-bold text-white tablet-lg:mt-[19px]"
          >
            Inscreva-se!!!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
