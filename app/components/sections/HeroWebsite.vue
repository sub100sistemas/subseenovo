<script setup lang="ts">
const categories = [
  {
    icon: '/icons/icone-site-imobiliarias-corretores.png',
    label: ['Imobiliárias', 'e Corretores'],
    alt: 'Ícone representando imobiliárias e corretores'
  },
  {
    icon: '/icons/icone-site-agrocorretores.png',
    label: ['Agrocorretores'],
    alt: 'Ícone representando agrocorretores'
  },
  {
    icon: '/icons/icone-site-loteadoras.png',
    label: ['Loteadoras'],
    alt: 'Ícone representando loteadoras'
  },
  {
    icon: '/icons/icone-site-incorporadoras.png',
    label: ['Incorporadoras'],
    alt: 'Ícone representando incorporadoras'
  }
]
</script>

<template>
  <section id="site-hotsites" class="section-py relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[206px]" aria-hidden="true">
      <img
        src="/icons/hero-website-onda-decorativa-branca.svg"
        width="1920"
        height="174"
        alt=""
        class="absolute -left-px top-[11px] w-[1920px] h-[173.455px] rotate-180 -scale-y-100 max-w-none"
      />
      <img
        src="/icons/hero-website-onda-decorativa-azul.svg"
        width="1920"
        height="191"
        alt=""
        class="absolute -left-[0.95px] top-[14.79px] w-[1919.95px] h-[190.853px] rotate-180 -scale-y-100 max-w-none"
      />
    </div>

    <div class="container-page relative">
      <div>
        <div class="inline-flex items-center gap-2 text-[12px] font-bold tracking-[1.44px] text-brand uppercase">
          <span class="size-2 shrink-0 rounded-full bg-teal shadow-[0_0_0_4px_rgba(28,217,164,0.36)]" aria-hidden="true" />
          Especialidade · Sites, Hotsites e Landing Pages
        </div>

        <h2 class="mt-4">
          Sites, Hotsites e Landing Pages otimizados para <span class="text-brand">SEO</span> e
          <span class="text-brand">GEO</span>
        </h2>
      </div>

      <div
        class="mt-4 grid grid-cols-1 items-start gap-10 tablet-lg:grid-cols-2 tablet-lg:gap-8 desktop:grid-cols-[656px_1fr] desktop:gap-[32px]"
      >
        <div>
          <p class="text-[20px] leading-[1.4] font-bold text-[#374151]">
            Sites profissionais desenvolvidos para cada segmento do mercado imobiliário.
          </p>

          <p class="mt-5 text-[16px] leading-[1.6] text-[#374151]">
            Desenvolvemos <strong class="font-bold text-ink">sites modernos</strong>, rápidos e
            inteligentes para imobiliárias, corretores de imóveis, agrocorretores, loteadoras e
            incorporadoras, com foco em desempenho, credibilidade e geração de oportunidades
            comerciais.
          </p>

          <div
            class="mt-6 grid grid-cols-4 gap-x-3 gap-y-6 tablet:grid-cols-4 tablet:gap-x-[39px] tablet-lg:grid-cols-2 desktop:grid-cols-4 desktop:gap-x-[39px]"
          >
            <div v-for="cat in categories" :key="cat.alt" class="flex flex-col items-center gap-[10px] text-center">
              <div class="flex size-[64px] shrink-0 items-center justify-center rounded-full border border-[#CCCCCC] bg-white/35 tablet:size-[130px]">
                <NuxtImg :src="cat.icon" format="webp" width="82" height="82" :alt="cat.alt" class="size-10 tablet:size-[82px]" />
              </div>
              <p class="text-[12px] leading-[1.15] text-[#4F4F4F] tablet:text-[19px] tablet:leading-[1.2]">
                <template v-for="(line, i) in cat.label" :key="i">
                  {{ line }}<br v-if="i < cat.label.length - 1" />
                </template>
              </p>
            </div>
          </div>

          <div class="mt-[45px] flex flex-col gap-3 tablet:flex-row tablet:gap-4">
            <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
              Testar grátis por 30 dias
            </CtaButton>
            <CtaButton
              variant="outline"
              :icon="false"
              to="/modulos/sites"
              class="whitespace-nowrap"
            >
              Conheça o módulo Sites e Hotsites
            </CtaButton>
          </div>
        </div>

        <div class="w-full max-w-[711px] desktop:w-[calc(100%+2rem)] desktop:max-w-none desktop:-mr-8 desktop-lg:w-[calc(100%+1.25rem)] desktop-lg:-mr-5 pt-10">
          <NuxtPicture
            src="/images/hero-website/mockup-telas-do-site.png"
            :img-attrs="{ class: 'block w-full h-auto' }"
            sizes="100vw tablet-lg:400px desktop-compact:460px desktop:711px"
            :width="711"
            :height="439"
            alt="Mockup do site 'Ideal Imóveis' em notebook e celular, com busca de imóveis por lançamento, compra e aluguel, e destaques de lançamento"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
