<script setup lang="ts">
import { videosFallbackUrl } from '~/data/videos'

interface VideoProfile {
  number: string
  title: string
  description: string
  linkLabel: string
  bgClass: string
  accentClass: string
  circleSrc: string
  href: string
}

const profiles: VideoProfile[] = [
  {
    number: '01',
    title: 'Imobiliárias urbanas',
    description: 'Gestão de imóveis, integração com portais, leads e atendimento em um só lugar.',
    linkLabel: 'Ver vídeos →',
    bgClass: 'bg-[#eef0ff]',
    accentClass: 'text-[#5d5fef]',
    circleSrc: '/icons/videos-profile-1.svg',
    href: videosFallbackUrl
  },
  {
    number: '02',
    title: 'Imobiliárias rurais',
    description: 'Cadastros completos, informações técnicas e oportunidades para o mercado rural.',
    linkLabel: 'Ver vídeos →',
    bgClass: 'bg-[#eaf9f7]',
    accentClass: 'text-[#159c96]',
    circleSrc: '/icons/videos-profile-2.svg',
    href: videosFallbackUrl
  },
  {
    number: '03',
    title: 'Corretores e equipes',
    description: 'Agenda, distribuição de contatos e acompanhamento para vender com mais organização.',
    linkLabel: 'Ver vídeos →',
    bgClass: 'bg-[#f4eefc]',
    accentClass: 'text-[#7652b5]',
    circleSrc: '/icons/videos-profile-3.svg',
    href: videosFallbackUrl
  }
]
</script>

<template>
  <section id="videos-por-perfil" class="bg-white pt-10">
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

      <ul class="grid gap-6 tablet:grid-cols-2 tablet-lg:grid-cols-3 desktop-full:gap-[55px]">
        <li
          v-for="(profile, index) in profiles"
          :key="profile.title"
          class="relative flex min-w-0 flex-col overflow-hidden rounded-[22px] px-[28px] pt-[26px] pb-5 tablet-lg:min-h-[260px]"
          :class="profile.bgClass"
        >
          <span class="absolute top-[24px] right-[28px]">
            <PlayButton size="sm" :circle-src="profile.circleSrc" />
          </span>
          <p class="h-6 text-[14px] leading-normal font-bold" :class="profile.accentClass">{{ profile.number }}</p>
          <h3
            :id="`profile-${index}-title`"
            class="mt-[44px] text-[20px] leading-[36px] font-semibold text-ink desktop-full:text-[23px]"
          >
            {{ profile.title }}
          </h3>
          <p class="mt-3 text-[15px] leading-[23px] text-[#596273] tablet-lg:min-h-[72px]">{{ profile.description }}</p>
          <a
            :id="`profile-${index}-link`"
            :href="profile.href"
            target="_blank"
            rel="noopener"
            :aria-labelledby="`profile-${index}-link profile-${index}-title`"
            class="mt-2 h-6 text-[14px] leading-normal font-semibold after:absolute after:inset-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-brand"
            :class="profile.accentClass"
          >
            {{ profile.linkLabel }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
