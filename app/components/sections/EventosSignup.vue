<script setup lang="ts"></script>

<template>
  <section id="eventos-inscricao" class="section-py">
    <div class="container-page flex justify-center">
      <a
        href="/inscreva-se"
        class="relative flex w-full max-w-[1080px] flex-col overflow-hidden rounded-[30px] bg-[#f2f5f4] tablet-lg:min-h-[350px] tablet-lg:flex-row tablet-lg:rounded-[50px]"
      >
        <div class="flex w-full flex-col items-start gap-4 px-6 py-8 tablet-lg:w-[55%] tablet-lg:justify-center tablet-lg:px-12 tablet-lg:py-10">
          <span class="rounded-[100px] bg-[rgba(140,110,254,0.12)] px-3 py-1.5 text-[11px] font-bold tracking-[1px] text-brand uppercase">
            Evento online
          </span>
          <h2 class="text-[28px] leading-[1.05] font-bold text-brand tablet-lg:text-[36px]">
            Participe dos Nossos<br />Eventos ao Vivo
          </h2>
          <p class="max-w-[522px] text-[16px] leading-[1.3] text-ink tablet-lg:text-[20px]">
            Inscreva-se e acompanhe treinamentos, novidades e lançamentos do SUBSEE on pelo Zoom.
          </p>
          <div class="mt-2 flex flex-wrap items-center gap-4 tablet-lg:gap-[58px]">
            <span class="flex h-[50px] w-[220px] items-center justify-center rounded-[10px] border border-[#ddd] bg-white text-[16px] font-medium text-ink">
              Inscreva-se!!! →
            </span>
            <span class="text-[11px] text-ink">Vagas limitadas por evento</span>
          </div>
        </div>

        <div class="relative w-full tablet-lg:w-[48%]">
          <NuxtImg
            src="/images/eventos/eventos_vivo.png"
            :width="2056"
            :height="700"
            sizes="tablet-lg:600px desktop-full:1028px"
            alt="Videochamada com três pessoas em uma reunião online"
            class="h-full w-full object-contain object-right tablet-lg:absolute tablet-lg:inset-0 tablet-lg:object-cover"
            loading="lazy"
          />
        </div>
      </a>
    </div>
  </section>
</template>
