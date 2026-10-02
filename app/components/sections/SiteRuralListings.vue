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
    icon: '/icons/site-rural-listings-icone-descritivo.svg',
    iconWidth: 33,
    iconHeight: 40,
    title: 'Descritivo técnico completo',
    description:
      'Descritivo técnico completo, com campos específicos para as características de imóveis rurais'
  },
  {
    icon: '/icons/site-rural-listings-icone-hidrica.svg',
    iconWidth: 33,
    iconHeight: 37,
    title: 'Disponibilidade hídrica e logística',
    description:
      'Registro de disponibilidade hídrica, logística de acesso à propriedade e capacidade de armazenamento'
  },
  {
    icon: '/icons/site-rural-listings-icone-documentos.svg',
    iconWidth: 34,
    iconHeight: 34,
    title: 'Documentos de apoio',
    description:
      'Disponibilização de links públicos com documentos de apoio no anúncio, como laudos técnicos, histórico de pluviometria e informações do CAR;'
  },
  {
    icon: '/icons/site-rural-listings-icone-mapas.svg',
    iconWidth: 34,
    iconHeight: 36,
    title: 'Mapas interativos',
    description:
      'Integração com atributos georreferenciados em KML, com visualização interativa de informações e controle de camadas'
  }
]
</script>

<template>
  <CrmPortfolio
    section-id="site-rural-anuncios"
    :features="features"
    cta-to="/agendar-demonstracao/"
    cta-text="Agendar Demonstração"
  >
    <template #heading>
      O anúncio de imóveis rurais no Brasil subiu<br class="hidden tablet-lg:block" />
      de patamar com o SUBSEE <span class="text-[#f44336]">on</span>
    </template>

    <template #lead>
      O módulo de imóveis rurais permite ao corretor apresentar informações completas,
      organizadas e padronizadas para potenciais compradores e investidores.
    </template>

    <template #image>
      <NuxtImg
        format="avif"
        src="/images/modulos-site-rural/listings-mockup-telas.png"
        :width="1344"
        :height="1415"
        sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
        alt="Telas de imóveis rurais com mapa"
        class="mx-auto h-auto w-full max-w-[664px]"
        loading="lazy"
      />
    </template>

    <template #summary>
      Do georreferenciamento à disponibilidade hídrica: cultivo predominante, bioma,
      características do solo e logística de acesso, registrados com precisão para atrair
      compradores e investidores qualificados.
    </template>
  </CrmPortfolio>
</template>
