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
    panel-class="rounded-[28px] px-6 py-10 tablet-lg:rounded-[40px] tablet-lg:px-16 tablet-lg:py-16 desktop-full:rounded-[50px] desktop-full:px-[80px] desktop-full:py-[80px]"
    panel-gradient="linear-gradient(75.89deg, #e6faf1 5.56%, #ecf8f9 30.92%, #eff2fa 76.37%, #c5dcf0 98.37%)"
    header-wrapper-class="mx-auto max-w-[850px] text-center"
    heading-class="mx-auto"
    lead-class="mx-auto mt-4 text-base leading-[1.4] text-ink tablet-lg:text-xl"
    content-wrapper-class="mt-10 flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-start tablet-lg:gap-12 desktop-full:mt-[75px] desktop-full:gap-[70px]"
    image-wrapper-class="w-full tablet-lg:w-auto"
    text-wrapper-class="flex w-full flex-col items-start gap-8 tablet-lg:flex-1"
    summary-class="text-base leading-[1.6] text-ink tablet-lg:text-lg"
    features-wrapper-tag="ul"
    features-wrapper-class="flex w-full flex-col gap-6"
    feature-item-tag="li"
    feature-item-class="flex items-start gap-4"
    feature-icon-wrapper-class="mt-1 shrink-0"
    feature-icon-class="h-9 w-auto"
    :feature-icon-width="35"
    :feature-icon-height="40"
    feature-text-wrapper-class=""
    feature-title-class="text-base font-bold text-ink"
    feature-description-class="mt-1 text-sm leading-[1.4] text-ink-soft"
    cta-wrapper-class=""
    :features="items"
  >
    <template #heading>
      Cada detalhe da propriedade, no <span class="text-brand">lugar certo</span>
    </template>

    <template #lead>
      Apresente propriedades rurais com fichas detalhadas e organizadas, prontas para conquistar
      compradores e investidores qualificados.
    </template>

    <template #image>
      <NuxtImg
        src="/images/modulos-crm-rural/portfolio-mockup-telas-fazenda.png"
        :width="655"
        :height="640"
        sizes="mobile-lg:80vw tablet-lg:420px desktop-full:520px"
        alt="Composição mostrando a ficha de uma propriedade rural, um mockup de celular com mapa e um card de sincronização com portais imobiliários"
        class="h-auto w-full max-w-[420px] shrink-0 desktop-full:max-w-[520px]"
        loading="lazy"
      />
    </template>

    <template #summary>
      Do georreferenciamento à análise de solo: registre cultivo predominante, bioma, recursos
      hídricos e acessos logísticos com precisão para atrair compradores e investidores qualificados.
    </template>

    <template #cta>
      <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
        Testar grátis por 30 dias
      </CtaButton>
    </template>
  </CrmPortfolio>
</template>
