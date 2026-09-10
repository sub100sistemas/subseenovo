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
    iconHeight: 42,
    title: 'Descritivo técnico completo',
    description:
      'Descritivo técnico completo, com campos específicos para as características de imóveis residenciais e comerciais'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-midias.svg',
    iconWidth: 27,
    iconHeight: 37,
    title: 'Diferenciais do imóvel',
    description:
      'Registro de diferenciais do imóvel, como vagas de garagem, área de lazer e infraestrutura do condomínio'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-proprietario.svg',
    iconWidth: 33,
    iconHeight: 38,
    title: 'Documentos de apoio',
    description:
      'Disponibilização de links públicos com documentos de apoio no anúncio, como matrícula do imóvel, memorial descritivo e habite-se'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-portais.svg',
    iconWidth: 35,
    iconHeight: 35,
    title: 'Mapas interativos',
    description:
      'Integração com mapas interativos, exibindo a localização exata do imóvel, pontos de interesse e infraestrutura do entorno'
  }
]
</script>

<template>
  <CrmPortfolio section-id="site-urbano-fichas" :features="features" cta-to="/contato" cta-text="Agendar Demonstração">
    <template #heading>
      A tecnologia que entende<br class="hidden tablet-lg:block" />
      o ritmo da <span class="text-brand">cidade</span>
    </template>

    <template #lead>
      Apresente cada imóvel com fichas completas e padronizadas,
      do primeiro contato à assinatura do contrato de venda ou locação.
    </template>

    <template #image>
      <NuxtImg
        src="/images/modulos-site-urbano/listings-mockup-tablet.png"
        :width="1100"
        :height="900"
        sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
        alt="Mockup do tablet mostrando a listagem de imóveis urbanos com filtros e cards de propriedades"
        class="mx-auto h-auto w-full max-w-[664px]"
        loading="lazy"
      />
    </template>

    <template #summary>
      Da metragem ao padrão de acabamento: tipologia, vagas de garagem, diferenciais do condomínio
      e localização, registrados com precisão para atrair compradores e locatários qualificados.
    </template>
  </CrmPortfolio>
</template>
