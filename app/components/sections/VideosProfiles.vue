<script setup lang="ts">
import { videosAppUrl } from '~/data/videos'

interface VideoProfile {
  number: string
  title: string
  titleClass?: string
  description: string
  linkLabel: string
  bgClass: string
  accentClass: string
  circleSrc: string
  href?: string
  vimeoId?: string
  vimeoHash?: string
  aspect?: string
}

const profiles: VideoProfile[] = [
  {
    number: '01',
    title: 'Imobiliárias urbanas',
    description: 'Gestão de imóveis, integração com portais, coleta de leads, CRM e inteligência artificial em um só lugar.',
    linkLabel: 'Ver vídeos →',
    bgClass: 'bg-[#eef0ff]',
    accentClass: 'text-[#5d5fef]',
    circleSrc: '/icons/videos-profile-1.svg',
    vimeoId: '1232991899',
    vimeoHash: '79104a1a7f',
    aspect: '9/16'
  },
  {
    number: '02',
    title: 'Imobiliárias rurais',
    description: 'Cadastro especializados para cadastrar sua fazenda. CRM que fala a linguagem do agronegócio.',
    linkLabel: 'Ver vídeos →',
    bgClass: 'bg-[#eaf9f7]',
    accentClass: 'text-[#159c96]',
    circleSrc: '/icons/videos-profile-2.svg',
    vimeoId: '1232989227',
    vimeoHash: '03a0ee7fd5',
    aspect: '9/16'
  },
  {
    number: '03',
    title: 'Imobiliárias locação & temporada',
    titleClass: 'text-[22px] leading-[22px]',
    description: 'Não importa qual é a sua locação, residência, comercial ou de temporada. Importa que a jornada esteja em um só sistema.',
    linkLabel: 'Ver vídeos →',
    bgClass: 'bg-[#f4eefc]',
    accentClass: 'text-[#7652b5]',
    circleSrc: '/icons/videos-profile-3.svg',
    vimeoId: '1233155178',
    vimeoHash: '157787ee2d',
    aspect: '9/16'
  }
]

const linkClass =
  "mt-2 h-6 text-[14px] leading-normal font-semibold after:absolute after:inset-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-brand"

const labelClass = 'mt-2 h-6 text-[14px] leading-normal font-semibold'

const activeProfile = ref<VideoProfile | null>(null)
const modalOpen = ref(false)

const openVideo = (profile: VideoProfile) => {
  activeProfile.value = profile
  modalOpen.value = true
}
</script>

<template>
  <section id="videos-por-perfil" class="bg-white pt-10 pb-10">
    <div class="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 mobile-lg:px-6 tablet:px-8 tablet-lg:gap-[35px] desktop-full:px-0">
      <SectionHeading
        wrapper-class="gap-0"
        eyebrow-class="h-6 text-[14px] leading-normal font-semibold tracking-[0.84px] text-brand uppercase"
        title-class="mt-[14px] text-[28px] leading-[1.2] font-bold text-ink tablet-lg:text-[32px] desktop-full:text-[36px] desktop-full:leading-[54px]"
        description-class="mx-auto mt-[11px] max-w-[1100px] text-[16px] leading-normal text-[#596273] tablet-lg:text-[18px] desktop-full:min-h-[40px]"
      >
        <template #eyebrow>Conteúdo para cada perfil</template>
        <template #title>Encontre os vídeos ideais para o seu negócio</template>
        <template #description>
          Escolha um tema e descubra como o SUBSEE on pode apoiar sua rotina e seus objetivos.
        </template>
      </SectionHeading>

      <ul class="grid gap-6 tablet-lg:grid-cols-3 desktop-full:gap-[55px]">
        <li
          v-for="(profile, index) in profiles"
          :key="profile.title"
          class="relative flex min-w-0 flex-col overflow-hidden rounded-[22px] px-[28px] pt-[26px] pb-[14px] tablet-lg:min-h-[260px]"
          :class="profile.bgClass"
        >
          <span v-if="profile.vimeoId || profile.href" class="absolute top-[24px] right-[28px]">
            <PlayButton size="sm" :circle-src="profile.circleSrc" />
          </span>
          <p class="h-6 text-[14px] leading-normal font-bold" :class="profile.accentClass">{{ profile.number }}</p>
          <h3
            :id="`profile-${index}-title`"
            class="mt-[40px] flex min-h-[44px] items-center font-semibold text-ink"
            :class="profile.titleClass ?? 'text-[20px] leading-[36px] desktop-full:text-[23px]'"
          >
            {{ profile.title }}
          </h3>
          <p class="mt-2 text-[15px] leading-[23px] text-[#596273] tablet-lg:min-h-[72px]">{{ profile.description }}</p>
          <button
            v-if="profile.vimeoId"
            :id="`profile-${index}-link`"
            type="button"
            aria-haspopup="dialog"
            :aria-labelledby="`profile-${index}-link profile-${index}-title`"
            class="flex cursor-pointer items-start text-left"
            :class="[linkClass, profile.accentClass]"
            @click="openVideo(profile)"
          >
            {{ profile.linkLabel }}
          </button>
          <a
            v-else-if="profile.href"
            :id="`profile-${index}-link`"
            :href="profile.href" :title="titleForLink(profile.href)" :aria-label="titleForLink(profile.href)"
            target="_blank"
            rel="noopener noreferrer"
            :aria-labelledby="`profile-${index}-link profile-${index}-title`"
            :class="[linkClass, profile.accentClass]"
          >
            {{ profile.linkLabel }}
          </a>
          <span v-else :class="[labelClass, profile.accentClass]">{{ profile.linkLabel }}</span>
        </li>
      </ul>
    </div>

    <VideoModal
      v-if="activeProfile?.vimeoId"
      v-model="modalOpen"
      provider="vimeo"
      :video-id="activeProfile.vimeoId"
      :video-hash="activeProfile.vimeoHash"
      :title="activeProfile.title"
      :aspect="activeProfile.aspect"
    />
  </section>
</template>
