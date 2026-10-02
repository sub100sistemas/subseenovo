<script setup lang="ts">
interface PortfolioFeature {
  icon: string
  iconWidth: number
  iconHeight: number
  title: string
  description: string
}

const features: PortfolioFeature[] = [
  {
    icon: '/icons/crm-urbano-portfolio-icone-organizacao.svg',
    iconWidth: 33,
    iconHeight: 42.471,
    title: 'Organização do portfólio',
    description:
      'Acompanhe todo o portfólio de venda, locação e lançamento, com indicadores de negócio sempre atualizados, como VGV, propostas e leads'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-midias.svg',
    iconWidth: 27.126,
    iconHeight: 36.577,
    title: 'Mídias e divulgação organizadas',
    description:
      'Centralize fotos, vídeos e demais conteúdos utilizados na apresentação dos imóveis.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-proprietario.svg',
    iconWidth: 33.008,
    iconHeight: 38.011,
    title: 'Gestão de proprietário e angariação',
    description:
      'Controle proprietário, chaves, autorizações, exclusividade e informações de angariação.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-portais.svg',
    iconWidth: 35.033,
    iconHeight: 35.036,
    title: 'Integração com portais imobiliários',
    description:
      'Publique seus imóveis no Portal SUB100 e em outros portais integrados diretamente pelo sistema.'
  }
]
</script>

<template>
  <CrmPortfolio section-id="crm-urbano-portfolio" :features="features">
    <template #heading>
      Todo o seu portfólio, sob controle
      <br class="hidden desktop-compact:block" />
      e pronto para gerar <span class="text-brand">negócio</span>
    </template>

    <template #lead>
      Acompanhe vendas, locações e lançamentos em um só painel,
      <br class="hidden desktop-compact:block" />
      com leads, valores e integração com portais sempre atualizados
    </template>

    <template #image>
      <NuxtPicture
        src="/images/modulos-crm-urbano/portfolio-telas-imoveis-urbanos.png"
        :width="1328"
        :height="1310"
        densities="x1 x2"
        sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
        :img-attrs="{
          alt: 'Telas de imóveis urbanos e busca',
          class: 'mx-auto h-auto w-full max-w-[664px]',
          loading: 'lazy'
        }"
      />
    </template>

    <template #summary>
      Com o portfólio centralizado, acompanhe indicadores de vendas, leads e VGV, e amplie o alcance
      dos seus imóveis com integração direta aos principais portais do mercado.
    </template>
  </CrmPortfolio>
</template>
