<script setup lang="ts">
interface FeatureItem {
  icon: string
  title: string
  description: string
}

const items: FeatureItem[] = [
  {
    icon: '/icons/crm-rural-portfolio-icone-solo-bioma.svg',
    title: 'Dados de solo e bioma',
    description:
      'Classificação do solo, tipo de bioma, cobertura vegetal e aptidão agrícola — informações essenciais para quem busca propriedades rurais produtivas.'
  },
  {
    icon: '/icons/crm-rural-portfolio-icone-area.svg',
    title: 'Área total e aproveitável',
    description:
      'Registre a área total da propriedade, percentual aproveitável, reserva legal e áreas de preservação com clareza para o comprador.'
  },
  {
    icon: '/icons/crm-rural-portfolio-icone-pluviometria.svg',
    title: 'Índices de pluviometria da região',
    description:
      'Apresente dados climáticos e de chuva da região, fundamentais para avaliar o potencial produtivo e a viabilidade do investimento.'
  },
  {
    icon: '/icons/crm-rural-portfolio-icone-integracao.svg',
    title: 'Integração com portais imobiliários',
    description:
      'Publique propriedades rurais nos principais portais do mercado de forma automática, ampliando a visibilidade para compradores e investidores.'
  }
]
</script>

<template>
  <CrmPortfolio
    section-id="crm-rural-portfolio"
    panel-class="rounded-[28px] bg-[linear-gradient(75.89deg,_#e6faf1_5.56%,_#ecf8f9_30.92%,_#eff2fa_76.37%,_#c5dcf0_98.37%)] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-16 desktop-full:rounded-[50px] desktop-full:px-[65px] desktop-full:py-[80px]"
    header-wrapper-class="mx-auto max-w-[850px] text-center desktop-full:max-w-[1150px]"
    heading-class="mx-auto desktop-full:max-w-[1053px]"
    lead-class="mx-auto mt-4 text-base leading-[1.4] text-ink tablet-lg:text-xl desktop-full:mt-[27px] desktop-full:max-w-[980px] desktop-full:text-[24px]"
    content-wrapper-class="mt-10 flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[3.15%] desktop-full:mt-[27px]"
    image-wrapper-class="w-full tablet-lg:w-[52.26%]"
    text-wrapper-class="flex w-full flex-col items-start gap-8 tablet-lg:w-[43.39%] desktop-full:gap-5"
    summary-class="text-base leading-[1.6] text-ink tablet-lg:text-lg desktop-full:text-[20px] desktop-full:leading-[1.4]"
    features-wrapper-tag="ul"
    features-wrapper-class="flex w-full flex-col gap-6 desktop-full:gap-5"
    feature-item-tag="li"
    feature-item-class="flex items-start gap-4 desktop-full:items-center"
    feature-icon-wrapper-class="mt-1 shrink-0 desktop-full:mt-0 desktop-full:flex desktop-full:w-11 desktop-full:items-center desktop-full:justify-start"
    feature-icon-class="h-9 w-auto"
    :feature-icon-width="35"
    :feature-icon-height="40"
    feature-text-wrapper-class=""
    feature-title-class="text-base font-bold text-ink desktop-full:leading-[1.4]"
    feature-description-class="mt-1 text-sm leading-[1.4] text-ink-soft desktop-full:mt-0 desktop-full:text-[16px] desktop-full:text-ink"
    cta-wrapper-class="desktop-full:flex desktop-full:w-full desktop-full:justify-center desktop-full:pt-[10px]"
    :features="items"
  >
    <template #heading>
      Cada detalhe da propriedade,<br class="hidden desktop-full:inline" /> no <span class="text-brand">lugar certo</span>
    </template>

    <template #lead>
      Apresente propriedades rurais com fichas detalhadas e organizadas, prontas para conquistar
      compradores e investidores qualificados.
    </template>

    <template #image>
      <NuxtImg
        format="avif"
        src="/images/modulos-crm-rural/portfolio-mockup-telas-fazenda.png"
        :width="655"
        :height="640"
        sizes="mobile-lg:80vw tablet-lg:440px desktop-full:650px"
        alt="Ficha e mapa de propriedade rural" title="Ficha e mapa de propriedade rural"
        class="h-auto w-full max-w-[420px] tablet-lg:max-w-none"
        loading="lazy"
      />
    </template>

    <template #summary>
      Do georreferenciamento à análise de solo: registre cultivo predominante, bioma, recursos
      hídricos e acessos logísticos com precisão para atrair compradores e investidores qualificados.
    </template>

    <template #cta>
      <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
        Testar grátis por 30 dias
      </CtaButton>
    </template>
  </CrmPortfolio>
</template>
