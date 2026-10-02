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
    icon: '/icons/crm-temporada-portfolio-icone-calendario-reservas.svg',
    iconWidth: 34,
    iconHeight: 34.5,
    title: 'Calendário de reservas',
    description: 'Visualize a ocupação de cada imóvel por período, evite conflitos de datas e maximize a taxa de ocupação ao longo do ano.'
  },
  {
    icon: '/icons/crm-temporada-portfolio-icone-camera.svg',
    iconWidth: 35.467,
    iconHeight: 29.29,
    title: 'Fotos e tour virtual',
    description: 'Cadastre fotos profissionais, vídeos e tours 360° de cada imóvel para atrair hóspedes e aumentar as reservas.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-organizacao.svg',
    iconWidth: 33,
    iconHeight: 42.471,
    title: 'Gestão de proprietários e contratos',
    description: 'Controle repasses, comissões e contratos com proprietários de forma transparente e automatizada.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-portais.svg',
    iconWidth: 35.033,
    iconHeight: 35.036,
    title: 'Integração com portais de temporada',
    description: 'Publique seus imóveis no Airbnb, Booking, TripAdvisor e outros portais integrados diretamente pelo sistema.'
  }
]
</script>

<template>
  <CrmPortfolio section-id="crm-temporada-portfolio" :features="features">
    <template #heading>
      Gerencie imóveis de temporada<br class="hidden tablet-lg:block" />
      com <span class="text-brand">agilidade</span> e <span class="text-brand">controle total</span>
    </template>

    <template #lead>
      Organize reservas, diárias e disponibilidade em um só painel, com visão completa de ocupação e faturamento por período.
    </template>

    <template #image>
      <NuxtPicture
        src="/images/modulos-crm-temporada/portfolio-app-screenshot.png"
        :width="1366"
        :height="1284"
        densities="x1 x2"
        sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
        :img-attrs="{
          alt: 'Lista de imóveis de temporada',
          class: 'mx-auto h-auto w-full max-w-[664px]',
          loading: 'lazy'
        }"
      />
    </template>

    <template #summary>
      Centralize a gestão dos seus imóveis de temporada, acompanhe check-ins, avaliações e integre com os principais portais de locação.
    </template>
  </CrmPortfolio>
</template>

