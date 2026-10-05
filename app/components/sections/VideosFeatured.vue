<script setup lang="ts">
const tags: string[] = ['Gestão integrada', 'Mais produtividade']

const featuredVideo = {
  youtubeId: 'kmwo-MkJ34M',
  aspect: '9/16',
  title: 'Uma visão completa da plataforma'
}

const modalOpen = ref(false)
</script>

<template>
  <section id="videos-institucional" class="bg-white py-10">
    <div
      class="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-4 mobile-lg:px-6 tablet:px-8 tablet-lg:h-[485px] tablet-lg:flex-row tablet-lg:items-start tablet-lg:overflow-clip tablet-lg:gap-[6.86%] desktop-full:px-0"
    >
      <div class="flex min-w-0 flex-col gap-[18px] tablet-lg:mt-5 tablet-lg:h-[420px] tablet-lg:w-[37.14%] tablet-lg:shrink-0">
        <SectionHeading
          align="left"
          wrapper-class="gap-[18px]"
          eyebrow-class="text-[14px] leading-normal font-semibold tracking-[0.84px] text-brand uppercase tablet-lg:h-[10px]"
          title-class="text-[28px] leading-[1.2] font-bold text-ink tablet-lg:h-[104px] tablet-lg:text-[30px] tablet-lg:leading-[1.2] desktop-compact:text-[34px] desktop-full:text-[38px] desktop-full:leading-[46px]"
          description-class="text-[16px] leading-[1.5] text-[#596273] tablet-lg:h-[104px] tablet-lg:text-[18px] tablet-lg:leading-[1.5] desktop-full:text-[20px] desktop-full:leading-[30px]"
        >
          <template #eyebrow>Vídeo institucional</template>
          <template #title>Conheça o SUBSEE on em poucos minutos</template>
          <template #description>
            Veja como a plataforma conecta imóveis, leads, equipe e atendimento em uma experiência mais simples para
            sua imobiliária.
          </template>
        </SectionHeading>

        <ul class="flex flex-wrap gap-[10px]">
          <li
            v-for="tag in tags"
            :key="tag"
            class="rounded-full bg-[#eef0ff] px-4 py-[10px] text-[14px] leading-normal font-medium whitespace-nowrap text-brand"
          >
            {{ tag }}
          </li>
        </ul>
      </div>

      <button
        type="button"
        aria-haspopup="dialog"
        :aria-label="`Assistir ao vídeo: ${featuredVideo.title}`"
        class="relative block cursor-pointer text-left aspect-[760/460] w-full overflow-hidden rounded-[28px] bg-[#2e386b] drop-shadow-[0px_10px_7.5px_rgba(46,56,107,0.3)] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white tablet-lg:aspect-auto tablet-lg:h-[460px] tablet-lg:w-[54.29%] tablet-lg:shrink-0"
        @click="modalOpen = true"
      >
        <NuxtImg
          format="avif"
          src="/images/assista-videos/featured-thumb.png"
          :width="1672"
          :height="941"
          sizes="380px mobile-lg:600px tablet:800px tablet-lg:560px desktop-compact:660px desktop:820px"
          alt="Miniatura do vídeo em destaque" title="Miniatura do vídeo em destaque"
          aria-hidden="true"
          class="pointer-events-none absolute top-[-0.435%] left-[-5.13%] block h-[100.87%] w-[108.42%] max-w-none object-cover"
          loading="lazy"
        />
        <span
          class="pointer-events-none absolute top-[44.783%] left-[-2.105%] block h-[59.13%] w-[105.263%] bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_15.865%,rgba(128,128,128,0.58)_49.279%,rgba(0,0,0,0.68)_82.692%)]"
        />
        <span
          class="absolute top-4 left-4 rounded-full bg-white/16 px-4 py-[10px] text-[13px] leading-normal font-semibold whitespace-nowrap text-white tablet-lg:top-7 tablet-lg:left-7"
        >
          SUBSEE ON • 03:24
        </span>
        <span class="absolute inset-0 flex items-center justify-center pb-8">
          <PlayButton size="lg" />
        </span>
        <span
          class="absolute bottom-4 left-4 text-[16px] leading-normal font-semibold text-white tablet-lg:bottom-[43px] tablet-lg:left-9 tablet-lg:text-[18px]"
        >
          {{ featuredVideo.title }}
        </span>
      </button>
    </div>

    <VideoModal
      v-model="modalOpen"
      :video-id="featuredVideo.youtubeId"
      :title="featuredVideo.title"
      eyebrow="Vídeo institucional"
      :aspect="featuredVideo.aspect"
    />
  </section>
</template>
