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
    icon: '/icons/crm-urbano-portfolio-icone-portais.svg',
    iconWidth: 35,
    iconHeight: 35,
    title: 'SEO e Redes Sociais',
    description:
      'Otimize o SEO do seu site e destaque seus lançamentos e imóveis ao compartilhar nas redes sociais.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-organizacao.svg',
    iconWidth: 33,
    iconHeight: 42,
    title: 'Organização e Conteúdo',
    description:
      'Organize as seções da página inicial e publique novidades do mercado imobiliário direto pelo painel.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-midias.svg',
    iconWidth: 27,
    iconHeight: 37,
    title: 'Banners Personalizados',
    description:
      'Crie banners para divulgar lançamentos, campanhas e condições especiais de venda e locação.'
  },
  {
    icon: '/icons/crm-urbano-portfolio-icone-proprietario.svg',
    iconWidth: 33,
    iconHeight: 38,
    title: 'Conteúdo Institucional',
    description:
      'Atualize a apresentação da empresa: imagens, links, redes sociais, endereço e WhatsApp para atendimento a compradores e locatários.'
  }
]
</script>

<template>
  <CrmPortfolio section-id="site-urbano-personalizacao" :features="features" cta-to="/contato" cta-text="Agendar Demonstração">
    <template #heading>
      Tenha controle total sobre o site da
      <span class="text-brand">sua imobiliária</span>
    </template>

    <template #lead>
      Personalize cada detalhe do seu site com ferramentas intuitivas que fortalecem
      sua marca e destacam seus diferenciais no mercado imobiliário.
    </template>

    <template #image>
      <NuxtImg
        src="/images/modulos-site-urbano/customization-mockup-laptop-phone.png"
        :width="1100"
        :height="900"
        sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:664px"
        alt="Mockup mostrando laptop e celular com o painel de personalização do site da imobiliária urbana"
        class="mx-auto h-auto w-full max-w-[664px]"
        loading="lazy"
      />
    </template>

    <template #summary>
      Com ferramentas simples e intuitivas, ajuste textos, banners, imagens e seções do site
      sem depender de agências ou equipes técnicas.
    </template>
  </CrmPortfolio>
</template>
