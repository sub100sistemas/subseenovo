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
    icon: '/icons/site-urbano-customization-icone-seo.svg',
    iconWidth: 50,
    iconHeight: 50,
    title: 'SEO e Redes Sociais',
    description:
      'Otimize o SEO do seu site e destaque seus lançamentos e imóveis ao compartilhar nas redes sociais.'
  },
  {
    icon: '/icons/site-urbano-customization-icone-organizacao.svg',
    iconWidth: 53,
    iconHeight: 50,
    title: 'Organização e Conteúdo',
    description:
      'Organize as seções da página inicial e publique novidades do mercado imobiliário direto pelo painel.'
  },
  {
    icon: '/icons/site-urbano-customization-icone-banners.svg',
    iconWidth: 45,
    iconHeight: 50,
    title: 'Banners Personalizados',
    description:
      'Crie banners para divulgar lançamentos, campanhas e condições especiais de venda e locação.'
  },
  {
    icon: '/icons/site-urbano-customization-icone-institucional.svg',
    iconWidth: 55,
    iconHeight: 44,
    title: 'Conteúdo Institucional',
    description:
      'Atualize a apresentação da empresa: imagens, links, redes sociais, endereço e WhatsApp para atendimento a compradores e locatários.'
  }
]
</script>

<template>
  <CrmPortfolio
    section-id="site-urbano-personalizacao"
    panel-class=""
    feature-icon-wrapper-class="flex w-14 shrink-0 items-center justify-start"
    cta-text=""
    :features="features"
  >
    <template #heading>
      Tenha controle total sobre o site da
      <span class="text-brand">sua imobiliária</span>
    </template>

    <template #lead>
      Personalize cada detalhe do seu site com ferramentas intuitivas que fortalecem
      sua marca e destacam seus diferenciais no mercado imobiliário.
    </template>

    <template #image>
      <div class="relative mx-auto w-full max-w-[664px] pb-5">
        <NuxtImg
          src="/images/modulos-site-urbano/customization-mockup-laptop-phone.png"
          :width="1471"
          :height="832"
          sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
          alt="Personalização do site urbano"
          class="relative z-10 h-auto w-full"
          loading="lazy"
        />
        <div
          class="pointer-events-none absolute bottom-0 left-[10%] z-0 h-4 w-[45%] rounded-full bg-black/25 blur-md"
          aria-hidden="true"
        />
      </div>
    </template>
  </CrmPortfolio>
</template>
