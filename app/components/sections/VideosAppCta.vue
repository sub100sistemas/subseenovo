<script setup lang="ts">
import { videosAppUrl } from '~/data/videos'
</script>

<template>
  <section id="videos-app" class="bg-white pt-10 pb-10 tablet-lg:pt-[76px]">
    <div class="mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0">
      <div
        class="relative flex flex-col gap-6 overflow-hidden rounded-[28px] bg-[linear-gradient(90deg,#5d5fef,#2e386b)] p-6 tablet:p-8 tablet-lg:block tablet-lg:h-[220px] tablet-lg:p-0"
      >
        <img
          src="/icons/videos-cta-ellipse.svg"
          alt=""
          aria-hidden="true"
          width="360"
          height="360"
          class="pointer-events-none absolute -top-[180px] -right-[40px] block max-w-none"
        />
        <div class="relative tablet-lg:absolute tablet-lg:top-[46px] tablet-lg:left-[58px] tablet-lg:w-[54.3%]">
          <h2 class="text-[24px] leading-[1.2] font-bold text-white tablet-lg:text-[26px] desktop-full:h-[48px] desktop-full:text-[30px] desktop-full:leading-normal">
            Continue aprendendo no App SUBSEE
          </h2>
          <p class="mt-2 text-[16px] leading-[1.4] text-white/82 tablet-lg:mt-[10px] tablet-lg:text-[18px] desktop-full:text-[24px] desktop-full:leading-[25px]">
            Acesse mais vídeos, novidades e conteúdos para aproveitar melhor todos os recursos da plataforma.
          </p>
        </div>
        <a
          :href="videosAppUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex h-[58px] w-full items-center justify-center rounded-[10px] bg-white px-6 text-[15px] leading-normal font-semibold whitespace-nowrap text-brand transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tablet-lg:absolute tablet-lg:top-[81px] tablet-lg:right-[66px] tablet-lg:w-[300px]"
        >
          Veja mais no App SUBSEE →
        </a>
      </div>
    </div>
  </section>
</template>
