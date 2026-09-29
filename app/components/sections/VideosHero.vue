<script setup lang="ts">
import type { HeroModuleIcon } from '~/components/layout/Hero.vue'

const moduleIcons: HeroModuleIcon[] = [
  { src: '/icons/crm-hero-icone-lancamentos-glyph.svg', iconClass: 'w-[14.137px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-venda.svg', iconClass: 'w-[16.409px] h-[19.017px]', shadowClass: 'shadow-[0px_10px_20px_rgba(93,95,239,0.6)]' },
  { src: '/icons/crm-hero-icone-locacao-glyph.svg', iconClass: 'w-[14.165px] h-[16.479px]' },
  { src: '/icons/crm-hero-icone-rural.svg', iconClass: 'w-[17.911px] h-[19px]' },
  { src: '/icons/crm-hero-icone-temporada-glyph.svg', iconClass: 'w-[16.331px] h-[19px]', shadowClass: 'shadow-[9px_0px_20px_rgba(93,95,239,0.6)]' }
]

const sectionClass =
  'relative overflow-hidden bg-[linear-gradient(90deg,#E6FDF7_17.3%,#EFF8F5_47.6%,#E1E9F9_100%)] tablet-lg:[mask-image:url(/icons/videos-hero-bg.svg)] tablet-lg:[mask-repeat:no-repeat] tablet-lg:[mask-size:100%_548px] tablet-lg:[mask-position:0_-85px]'
const containerClass = 'relative z-10 mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0'
const dividerClass =
  'pointer-events-none absolute hidden max-w-none top-[67.7%] h-[29.92%] left-[calc(50%_-_50vw)] w-screen tablet-lg:block'
const headingClass = 'text-[28px] leading-[1.2] font-bold text-ink tablet:text-[32px] tablet-lg:text-[30px] desktop-full:text-[36px]'
const descriptionClass =
  'mt-5 max-w-[520px] text-[16px] leading-normal text-ink tablet-lg:max-w-[630px] tablet-lg:text-[16px] desktop-compact:text-[18px] desktop-full:text-[20px]'
</script>

<template>
  <Hero
    section-id="videos-hero"
    :section-class="sectionClass"
    :container-class="containerClass"
    aspect-class="tablet-lg:aspect-[1400/483]"
    top-class="tablet-lg:top-[2.48%]"
    height-class="tablet-lg:h-[79.92%]"
    content-gap="gap-[26px]"
    :heading-class="headingClass"
    :description-class="descriptionClass"
    divider-src="/icons/videos-hero-divider.svg"
    :divider-class="dividerClass"
    mobile-divider-src="/icons/videos-hero-divider.svg"
    :module-icons="moduleIcons"
  >
    <template #heading>
      Assista aos vídeos<br />
      do SUBSEE <span class="text-[#e72f4d]">on</span>
    </template>

    <template #description>
      Escolher um sistema de gestão para sua imobiliária ou equipe de corretores é uma decisão estratégica, que exige
      análise, clareza e segurança na escolha da plataforma ideal para potencializar suas vendas.
    </template>

    <template #visual>
      <div class="absolute inset-0 [container-type:inline-size]">
        <img
          src="/icons/videos-hero-glow.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute top-[-36.646cqw] left-[-1.041cqw] block w-[132.01cqw] max-w-none"
        />

        <div
          class="absolute top-[5.969cqw] left-[31.302cqw] h-[62.604cqw] w-[47.751cqw] overflow-hidden [transform:scaleX(-1)]"
        >
          <NuxtImg
            src="/images/assista-videos/hero-photo.png"
            :width="1536"
            :height="1024"
            sizes="mobile-lg:520px tablet-lg:480px desktop-full:676px"
            alt="Profissional sorridente de blazer marrom segurando um celular"
            class="absolute top-0 left-[-51.38%] block h-full w-[196.66%] max-w-none"
            loading="eager"
          />
        </div>

        <img
          src="/icons/videos-hero-curve-a.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute top-[48.896cqw] left-[57.919cqw] block h-auto w-[22.349cqw] max-w-none [transform:rotate(150.44deg)]"
        />
        <img
          src="/icons/crm-hero-seta-curva-verde.svg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute top-[22.904cqw] left-[12.32cqw] block h-auto w-[25.403cqw] max-w-none [transform:rotate(77.14deg)_scaleX(-1)]"
        />

        <div
          class="absolute top-[11.799cqw] left-[5.344cqw] h-[14.575cqw] w-[44.836cqw] rounded-[2.776cqw] border border-[#eee] bg-white/80 backdrop-blur-[10px]"
        >
          <span
            class="absolute top-[3.38cqw] left-[2.88cqw] flex h-[5.557cqw] w-[5.493cqw] items-center justify-center rounded-[1.11cqw] bg-brand"
          >
            <img src="/icons/videos-hero-globe.svg" alt="" aria-hidden="true" class="block size-[3.315cqw]" />
          </span>
          <p
            class="absolute top-[1.966cqw] left-[10.966cqw] text-[2.499cqw] leading-[1.8] font-bold tracking-[0.05cqw] whitespace-nowrap text-ink"
          >
            Vídeos Práticos
          </p>
          <p
            class="absolute top-[6.177cqw] left-[10.966cqw] w-[32.204cqw] text-[2.221cqw] leading-[1.2] font-medium text-[#545567]"
          >
            Aprenda no seu ritmo com tutoriais rápidos.
          </p>
        </div>

        <div
          class="absolute top-[30.4cqw] left-[56.011cqw] h-[14.575cqw] w-[44.003cqw] rounded-[2.776cqw] border border-[#eee] bg-white/60 backdrop-blur-[10px]"
        >
          <span
            class="absolute top-[3.164cqw] left-[3.545cqw] flex size-[5.493cqw] items-center justify-center rounded-[1.11cqw] border border-[#eee] bg-brand"
          >
            <img src="/icons/videos-hero-people.svg" alt="" aria-hidden="true" class="block h-[3.47cqw] w-[3.748cqw]" />
          </span>
          <p
            class="absolute top-[1.805cqw] left-[11.105cqw] text-[2.499cqw] leading-[1.8] font-bold tracking-[0.05cqw] whitespace-nowrap text-ink"
          >
            Time Capacitado
          </p>
          <p
            class="absolute top-[6.385cqw] left-[11.244cqw] w-[29.983cqw] text-[2.221cqw] leading-[1.2] font-medium text-[#545567]"
          >
            Treine sua equipe direto na plataforma.
          </p>
        </div>
      </div>
    </template>
  </Hero>
</template>
