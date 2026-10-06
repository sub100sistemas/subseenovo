<script setup lang="ts">
import { videosFallbackUrl } from '~/data/videos'

interface DemoVideo {
  duration: string
  type: string
  title: string
  description: string
  linkLabel: string
  thumbClass: string
  href: string
  videoId?: string
  provider?: 'youtube' | 'vimeo'
  videoHash?: string
  aspect?: string
}

const videos: DemoVideo[] = [
  {
    duration: '03:11',
    type: 'DEMONSTRAÇÃO',
    title: 'Organize imóveis e publique com agilidade',
    description: 'Cadastre, organize e distribua seus imóveis nos principais canais com mais eficiência.',
    linkLabel: 'Assistir ao vídeo →',
    thumbClass: 'bg-[linear-gradient(90deg,#5d5fef,#8b8dff)]',
    href: videosFallbackUrl,
    videoId: '1232991899',
    provider: 'vimeo',
    videoHash: '79104a1a7f',
    aspect: '9/16'
  },
  {
    duration: '05:02',
    type: 'DEMONSTRAÇÃO',
    title: 'Centralize leads e atendimento',
    description: 'Reúna contatos, mensagens e histórico para acompanhar cada oportunidade do início ao fim.',
    linkLabel: 'Assistir ao vídeo →',
    thumbClass: 'bg-[linear-gradient(90deg,#17a6a6,#66d4c9)]',
    href: videosFallbackUrl,
    videoId: '1232991899',
    provider: 'vimeo',
    videoHash: '79104a1a7f',
    aspect: '9/16'
  },
  {
    duration: '03:46',
    type: 'DEMONSTRAÇÃO',
    title: 'Acompanhe sua equipe e oportunidades',
    description: 'Visualize tarefas, agenda e evolução comercial para tomar decisões com mais clareza.',
    linkLabel: 'Assistir ao vídeo →',
    thumbClass: 'bg-[linear-gradient(90deg,#7357c7,#b491e8)]',
    href: videosFallbackUrl,
    videoId: '1232991899',
    provider: 'vimeo',
    videoHash: '79104a1a7f',
    aspect: '9/16'
  }
]

const linkClass =
  "mt-[4px] text-left text-[14px] leading-6 font-semibold text-brand after:absolute after:inset-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-brand"

const activeVideo = ref<DemoVideo | null>(null)
const modalOpen = ref(false)

const openVideo = (video: DemoVideo) => {
  activeVideo.value = video
  modalOpen.value = true
}
</script>

<template>
  <section id="videos-demonstrativos" class="bg-white py-10">
    <div class="bg-[#f8f9ff] py-10">
      <div class="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0">
        <SectionHeading
          wrapper-class="gap-0"
          eyebrow-class="h-6 text-[14px] leading-normal font-semibold tracking-[0.84px] text-brand uppercase"
          title-class="mt-[14px] text-[28px] leading-[1.2] font-bold text-ink tablet-lg:text-[32px] desktop-full:text-[38px] desktop-full:leading-[55px]"
          description-class="mx-auto mt-[9px] max-w-[1100px] text-[16px] leading-normal text-[#596273] tablet-lg:text-[18px] desktop-full:min-h-[60px]"
        >
          <template #eyebrow>Vídeos demonstrativos</template>
          <template #title>Veja o SUBSEE on em ação</template>
          <template #description>
            Conteúdos rápidos para conhecer os recursos que fazem diferença na rotina da sua imobiliária.
          </template>
        </SectionHeading>

        <ul class="grid gap-6 tablet-lg:grid-cols-3 desktop-full:gap-[55px]">
          <li
            v-for="(video, index) in videos"
            :key="video.title"
            class="relative flex min-w-0 flex-col overflow-hidden rounded-[22px] shadow-[0px_14px_32px_rgba(48,56,77,0.08)] tablet-lg:min-h-[520px]"
          >
            <div class="relative flex h-[240px] shrink-0 items-center justify-center" :class="video.thumbClass">
              <span class="absolute top-[25px] left-[28px] text-[13px] leading-normal font-semibold text-white">
                {{ video.duration }}
              </span>
              <PlayButton size="md" />
            </div>
            <div
              class="flex flex-1 flex-col rounded-b-[22px] border border-t-0 border-[#e6e8f2] bg-white px-[27px] pt-[33px] pb-[17px]"
            >
              <p class="text-[12px] leading-[22px] font-semibold tracking-[0.6px] text-brand">{{ video.type }}</p>
              <h3
                :id="`demo-video-${index}-title`"
                class="mt-[13px] text-[22px] leading-[30px] font-semibold text-ink tablet-lg:min-h-[81px]"
              >
                {{ video.title }}
              </h3>
              <p class="mt-[7px] text-[15px] leading-[23px] text-[#657083] tablet-lg:min-h-[78px]">
                {{ video.description }}
              </p>
              <button
                v-if="video.videoId"
                :id="`demo-video-${index}-link`"
                type="button"
                aria-haspopup="dialog"
                :aria-labelledby="`demo-video-${index}-link demo-video-${index}-title`"
                :class="[linkClass, 'cursor-pointer']"
                @click="openVideo(video)"
              >
                {{ video.linkLabel }}
              </button>
              <a
                v-else
                :id="`demo-video-${index}-link`"
                :href="video.href" :title="titleForLink(video.href)" :aria-label="titleForLink(video.href)"
                target="_blank"
                rel="noopener"
                :aria-labelledby="`demo-video-${index}-link demo-video-${index}-title`"
                :class="linkClass"
              >
                {{ video.linkLabel }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <VideoModal
      v-if="activeVideo?.videoId"
      v-model="modalOpen"
      :video-id="activeVideo.videoId"
      :provider="activeVideo.provider"
      :video-hash="activeVideo.videoHash"
      :title="activeVideo.title"
      :eyebrow="activeVideo.type"
      :aspect="activeVideo.aspect"
    />
  </section>
</template>
