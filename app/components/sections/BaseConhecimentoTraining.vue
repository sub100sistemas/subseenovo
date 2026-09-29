<script setup lang="ts">
interface TrainingFeatureItem {
  icon: string
  title: string
  description: string
}

const trainingFeatures: TrainingFeatureItem[] = [
  {
    icon: '/icons/base-conhecimento-icone-suporte.svg',
    title: 'Suporte e implantação humanizada',
    description: 'Nossa equipe acompanha você em todas as etapas de implantação do SUBSEE, com apoio de IA.'
  },
  {
    icon: '/icons/base-conhecimento-icone-treinamentos-video.svg',
    title: 'Treinamentos em vídeo',
    description: 'Aprenda cada funcionalidade do sistema com vídeos práticos e objetivos, no seu próprio ritmo.'
  },
  {
    icon: '/icons/base-conhecimento-icone-manuais.svg',
    title: 'Manuais e materiais de apoio',
    description: 'Consulte guias completos sempre que precisar tirar dúvidas sobre qualquer parte do sistema.'
  },
  {
    icon: '/icons/base-conhecimento-icone-eventos.svg',
    title: 'Eventos online',
    description: 'Participe de encontros ao vivo com as novidades do sistema e dicas para aproveitar ainda mais a plataforma.'
  }
]
</script>

<template>
  <Portfolio
    section-id="base-conhecimento-treinamento"
    panel-class="overflow-hidden rounded-[30px] bg-[linear-gradient(75.89deg,_#e6faf1_5.56%,_#ecf8f9_30.92%,_#eff2fa_76.37%,_#c5dcf0_98.37%)] px-6 py-10 tablet:px-10 tablet:py-14 tablet-lg:rounded-[50px] desktop-full:px-[65px] desktop-full:py-[85px]"
    :features="trainingFeatures"
    cta-to="/testar-gratis"
    cta-text="Testar grátis por 30 dias"
  >
    <template #heading>
      Como treinar sua equipe para usar o SUBSEE <span class="text-[#e72f4d]">on</span>
    </template>

    <template #lead>
      Conheça os pilares da jornada de aprendizado do SUBSEE: um ecossistema completo para
      capacitar sua equipe do início ao fim.
    </template>

    <template #image>
      <NuxtImg
        src="/images/modulos-base-de-conhecimento/portfolio-telas-base-conhecimento.png"
        :width="1298"
        :height="1182"
        sizes="mobile-lg:100vw tablet-lg:600px desktop:650px"
        alt="Tela de proposta de compra e venda de imóvel ao lado de um celular mostrando o SUBSEE on com termômetro de atendimento e funil de vendas"
        class="mx-auto h-auto w-full max-w-[650px]"
        loading="lazy"
      />
    </template>

    <template #summary>
      Da implantação ao suporte contínuo, oferecemos tudo o que sua equipe precisa para dominar o
      sistema com rapidez e confiança.
    </template>
  </Portfolio>
</template>
