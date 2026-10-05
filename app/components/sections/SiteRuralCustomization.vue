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
    icon: '/icons/site-rural-customization-icone-seo.svg',
    iconWidth: 55,
    iconHeight: 50,
    title: 'SEO e Redes Sociais',
    description:
      'Configure o SEO do seu site e escolha a imagem exibida ao compartilhar suas propriedades rurais nas redes sociais.'
  },
  {
    icon: '/icons/site-rural-customization-icone-organizacao.svg',
    iconWidth: 55,
    iconHeight: 50,
    title: 'Organização e Conteúdo',
    description:
      'Organize as seções da página inicial e publique novidades do agronegócio direto pelo painel.'
  },
  {
    icon: '/icons/site-rural-customization-icone-banners.svg',
    iconWidth: 55,
    iconHeight: 50,
    title: 'Banners Personalizados',
    description:
      'Crie banners para divulgar fazendas, safras e eventos do agronegócio da sua imobiliária.'
  },
  {
    icon: '/icons/site-rural-customization-icone-institucional.svg',
    iconWidth: 55,
    iconHeight: 44,
    title: 'Conteúdo Institucional',
    description:
      'Atualize a apresentação da empresa: imagens, links, redes sociais, endereço e WhatsApp para contato com produtores rurais.'
  }
]
</script>

<template>
  <CrmPortfolio
    section-id="site-rural-personalizacao"
    panel-class=""
    feature-icon-wrapper-class="flex w-14 shrink-0 items-center justify-start"
    cta-text=""
    :features="features"
  >
    <template #heading>
      Gerencie <span class="text-brand">seu site rural</span> com total autonomia
    </template>

    <template #lead>
      Tenha autonomia para manter conteúdos, banners, artigos e configurações do site sempre
      atualizados, tudo centralizado em um só painel, sem depender de suporte técnico
    </template>

    <template #image>
      <div class="relative mx-auto w-full max-w-[664px] pb-5">
        <NuxtImg
          src="/images/modulos-site-rural/customization-mockup-laptop-phone.png"
          :width="1946"
          :height="1149"
          sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
          alt="Personalização do site rural" title="Personalização do site rural"
          class="relative z-10 h-auto w-full"
          loading="lazy"
        />
      </div>
    </template>
  </CrmPortfolio>
</template>
