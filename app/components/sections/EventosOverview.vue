<script setup lang="ts"></script>

<template>
  <section id="eventos-visao-geral" class="section-py">
    <div class="container-page relative flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:justify-between tablet-lg:gap-12">
      <img
        src="/icons/eventos-icone-ellipse-1.svg"
        alt="Elipse decorativa" title="Elipse decorativa"
        aria-hidden="true"
        class="pointer-events-none absolute top-[12%] left-[-1.5%] -z-[1] hidden size-[66px] desktop-full:block"
      />
      <img
        src="/icons/eventos-icone-ellipse-2.svg"
        alt="Elipse decorativa" title="Elipse decorativa"
        aria-hidden="true"
        class="pointer-events-none absolute top-[55%] left-[45.3%] -z-[1] hidden h-[30px] w-[27px] desktop-full:block"
      />

      <div class="w-full tablet-lg:w-[42%]">
        <h2 class="text-[28px] leading-[1.6] font-medium text-brand tablet-lg:text-[36px]">
          Tudo que sua imobiliária precisa, em um só sistema com o
          <strong class="font-bold">SUBSEE on</strong>
        </h2>
        <p class="mt-6 text-[18px] leading-[1.8] tracking-[0.48px] text-ink tablet-lg:text-[24px]">
          O CRM SUBSEE centraliza a gestão de imóveis urbanos, rurais e de temporada com
          ferramentas de captação, vendas, integração com portais e acompanhamento de resultados
          em tempo real.
        </p>
      </div>

      <div class="relative w-full tablet-lg:aspect-[674/513] tablet-lg:w-[48%]">
        <div class="absolute top-[55%] left-[69%] hidden size-[31%] rounded-[20px] bg-[#1cd9a4] desktop-full:block" aria-hidden="true" />
        <div class="absolute top-0 left-0 hidden h-[27%] w-[18.5%] rounded-[20px] bg-brand desktop-full:block" aria-hidden="true" />

        <div class="relative aspect-[638/471] overflow-hidden rounded-[20px] tablet-lg:absolute tablet-lg:top-[3.7%] tablet-lg:left-[2.7%] tablet-lg:aspect-auto tablet-lg:h-[91.8%] tablet-lg:w-[94.6%]">
          <NuxtImg
            format="avif"
            src="/images/eventos/eventos-overview-foto.png"
            :width="637"
            :height="471"
            sizes="mobile-lg:100vw tablet-lg:500px desktop-full:638px"
            alt="Corretora apresentando resultados à equipe" title="Corretora apresentando resultados à equipe"
            class="h-full w-full rounded-[20px] object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <img
              src="/icons/eventos-icone-overview-play.svg"
              alt="Ícone de reproduzir vídeo" title="Ícone de reproduzir vídeo"
              aria-hidden="true"
              class="size-[58px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
