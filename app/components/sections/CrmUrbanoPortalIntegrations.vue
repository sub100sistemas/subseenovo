<script setup lang="ts">
interface PortalBadge {
  name: string
  logo: string
  alt: string
  background: string
  badgeStyle: Record<string, string>
  logoStyle: Record<string, string>
  label?: string[]
  labelStyle?: Record<string, string>
  labelClass?: string
}

const badgeSize = { width: '11.11%', aspectRatio: '1' }

const badges: PortalBadge[] = [
  {
    name: 'SUB100',
    logo: '/icons/crm-urbano-portais-logo-sub100.svg',
    alt: 'Logo SUB100',
    background: '#5d5fef',
    badgeStyle: { ...badgeSize, left: '9.72%', top: '23.49%' },
    logoStyle: { left: '18.75%', top: '28.85%', width: '62.5%', height: '42.3%' }
  },
  {
    name: 'VivaReal',
    logo: '/icons/crm-urbano-portais-logo-vivareal.svg',
    alt: 'Logo VivaReal',
    background: '#ffffff',
    badgeStyle: { ...badgeSize, left: '13.75%', top: '44.97%' },
    logoStyle: { left: '18.75%', top: '25%', width: '62.5%', height: '50.29%' }
  },
  {
    name: 'imovelweb',
    logo: '/icons/crm-urbano-portais-logo-imovelweb.svg',
    alt: 'Logo imovelweb',
    background: '#ffffff',
    badgeStyle: { ...badgeSize, left: '0', top: '63.59%' },
    logoStyle: { left: '42.5%', top: '17.5%', width: '18.75%', height: '37.76%' },
    label: ['imovel', 'web'],
    labelStyle: { top: '58.75%' },
    labelClass:
      'font-semibold text-ink text-[5px] mobile-lg:text-[7px] tablet:text-[9px] tablet-lg:text-[7px] desktop:text-[9px] desktop-full:text-[11px] desktop-full:tracking-[-0.33px]'
  },
  {
    name: '123i',
    logo: '/icons/crm-urbano-portais-logo-123i.svg',
    alt: 'Logo 123i',
    background: '#ffffff',
    badgeStyle: { ...badgeSize, left: '15.69%', top: '78.69%' },
    logoStyle: { left: '19.08%', top: '35.63%', width: '61.85%', height: '28.75%' }
  },
  {
    name: 'Zap Imóveis',
    logo: '/icons/crm-urbano-portais-logo-zap.svg',
    alt: 'Logo Zap Imóveis',
    background: '#ffffff',
    badgeStyle: { ...badgeSize, left: '81.53%', top: '20.3%' },
    logoStyle: { left: '18.75%', top: '41.25%', width: '62.5%', height: '27.5%' }
  },
  {
    name: 'OLX',
    logo: '/icons/crm-urbano-portais-logo-olx.svg',
    alt: 'Logo OLX',
    background: '#ffffff',
    badgeStyle: { ...badgeSize, left: '79.31%', top: '45.13%' },
    logoStyle: { left: '22.5%', top: '30.01%', width: '56.25%', height: '34.31%' }
  },
  {
    name: 'Chaves na Mão',
    logo: '/icons/crm-urbano-portais-logo-chave-na-mao.svg',
    alt: 'Logo Chaves na Mão',
    background: '#ffffff',
    badgeStyle: { ...badgeSize, left: '77.78%', top: '78.69%' },
    logoStyle: { left: '33.75%', top: '18.75%', width: '33.75%', height: '33.75%' },
    label: ['chave', 'na mão'],
    labelStyle: { top: '56.25%' },
    labelClass:
      'font-bold text-black text-[4px] mobile-lg:text-[6px] tablet:text-[8px] tablet-lg:text-[6px] desktop:text-[8px] desktop-full:text-[10px] desktop-full:tracking-[-0.3px]'
  }
]
</script>

<template>
  <section id="crm-urbano-portais" class="section-py">
    <div class="container-page">
      <div class="overflow-hidden rounded-[30px] bg-[#eeedff] px-6 py-10 tablet:px-8 tablet-lg:flex tablet-lg:items-center tablet-lg:gap-[4.48%] tablet-lg:rounded-[50px] tablet-lg:px-[30px] tablet-lg:py-0">
        <div
          class="relative mx-auto w-full max-w-[720px] aspect-[720/596] tablet-lg:mx-0 tablet-lg:w-[53.73%] tablet-lg:max-w-none"
        >
          <NuxtImg
            src="/images/modulos-crm-urbano/portais-mockup-app-marketing.png"
            :width="1362"
            :height="1146"
            sizes="mobile-lg:100vw tablet-lg:450px desktop:580px desktop-full:681px"
            alt="Mockup do app SUB100 na etapa de Marketing, com os portais imobiliários integrados e seus interruptores ativos"
            class="absolute left-[5.42%] top-[3.86%] w-[94.58%] h-auto max-w-none"
            loading="lazy"
          />

          <div
            v-for="badge in badges"
            :key="badge.name"
            class="absolute overflow-hidden rounded-full shadow-[0px_35px_32px_rgba(0,0,0,0.08)]"
            :style="{ ...badge.badgeStyle, backgroundColor: badge.background }"
          >
            <img
              :src="badge.logo"
              :alt="badge.alt"
              class="absolute max-w-none"
              :style="badge.logoStyle"
            />
            <p
              v-if="badge.label"
              class="absolute inset-x-0 text-center leading-none"
              :class="badge.labelClass"
              :style="badge.labelStyle"
            >
              <span class="block">{{ badge.label[0] }}</span>
              <span class="block">{{ badge.label[1] }}</span>
            </p>
          </div>
        </div>

        <div class="mt-8 flex flex-col items-start gap-6 tablet-lg:mt-0 tablet-lg:w-[39.18%] tablet-lg:gap-[38px]">
          <h2 class="leading-[1.2]">
            Publique <span class="text-brand">seus imóveis</span>
            <br class="hidden desktop-compact:block" />
            nos principais portais
          </h2>
          <p class="text-[18px] leading-[1.4] text-ink desktop:text-[20px] desktop-full:text-[24px]">
            Centralize o cadastro dos seus imóveis no <strong class="font-bold">SUBSEE</strong> e
            envie seus anúncios para diferentes portais imobiliários de forma integrada, facilitando
            a gestão e ampliando a visibilidade
          </p>
          <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
