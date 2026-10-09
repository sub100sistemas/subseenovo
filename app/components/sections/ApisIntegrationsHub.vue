<script setup lang="ts">
interface HubFeatureItem {
  icon: string
  title: string
  description: string
}

const hubFeatures: HubFeatureItem[] = [
  {
    icon: '/icons/apis-hub-icone-integracao.svg',
    title: 'Integração com APIs',
    description: 'Conecte CRMs, portais e outras ferramentas externas diretamente aos sistemas do SUBSEE, sem esforço manual.'
  },
  {
    icon: '/icons/apis-hub-icone-sincronizacao.svg',
    title: 'Sincronização automática',
    description: 'Leads e imóveis são atualizados em tempo real entre todos os sistemas conectados.'
  },
  {
    icon: '/icons/apis-hub-icone-dados-centralizados.svg',
    title: 'Dados centralizados',
    description: 'Tenha o controle total das informações da operação em um único lugar, com mais segurança.'
  },
  {
    icon: '/icons/apis-hub-icone-eficiencia.svg',
    title: 'Mais eficiência operacional',
    description: 'Reduza tarefas manuais repetitivas e ganhe tempo para focar no que realmente importa.'
  }
]
</script>

<template>
  <CrmPortfolio section-id="apis-hub-integracoes" :features="hubFeatures">
    <template #heading>
      APIs e HUB Integrador:<br class="hidden tablet-lg:inline" /> toda a sua operação <span class="text-brand">conectada</span>
    </template>

    <template #lead>
      Conecte o SUBSEE <span class="text-brand">on</span> aos seus sistemas favoritos e mantenha
      leads, imóveis e atendimentos sempre sincronizados, sem esforço manual.
    </template>

    <template #image>
      <NuxtImg
        src="/images/modulos-apis-hub-integrador/portfolio-telas-apis-hub.png"
        :width="1301"
        :height="1257"
        sizes="mobile-lg:100vw tablet-lg:600px desktop:650px"
        alt="Telas do HUB de integrações" title="Telas do HUB de integrações"
        class="mx-auto h-auto w-full max-w-[650px]"
        loading="lazy"
      />
    </template>

    <template #summary>
      Integre suas ferramentas com agilidade, centralize os dados da operação e elimine tarefas
      manuais repetitivas em poucos cliques.
    </template>
  </CrmPortfolio>
</template>
