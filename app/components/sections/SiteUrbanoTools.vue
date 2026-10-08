<script setup lang="ts">
import type { ToolsStep } from '~/components/layout/ToolsIntegration.vue'

const steps: ToolsStep[] = [
  {
    number: '01',
    title: 'Copie o código',
    description: 'Use o ID ou script da ferramenta.',
    icon: '/icons/site-urbano-tools-icone-codigo.svg',
    circleClass: 'bg-[#eceaff]',
    badgeClass: 'bg-brand'
  },
  {
    number: '02',
    title: 'Adicione no painel',
    description: 'Cole no campo da integração.',
    icon: '/icons/site-urbano-tools-icone-painel.svg',
    circleClass: 'bg-[#e0f0ff]',
    badgeClass: 'bg-[#258ef1]'
  },
  {
    number: '03',
    title: 'Ative no site',
    description: 'Salve e comece a acompanhar.',
    icon: '/icons/site-urbano-tools-icone-ativar.svg',
    circleClass: 'bg-[#e0faf7]',
    badgeClass: 'bg-teal-link',
    status: 'Integração ativa'
  }
]
</script>

<template>
  <ToolsIntegration
    section-id="site-urbano-ferramentas"
    eyebrow="Simples de configurar"
    :steps="steps"
    diagram-src="/images/modulos-site-urbano/tools-diagrama-integracoes.png"
    diagram-alt="Diagrama do Meu Site e integrações"
  >
    <template #title>
      Adicione as principais ferramentas ao <span class="text-brand">seu site</span>
    </template>

    <template #description>
      Insira scripts de marketing, análise, segurança e atendimento diretamente pelo painel
      <strong>SUB100 Meu Site</strong>, com suporte a diversas ferramentas de terceiros.
    </template>
  </ToolsIntegration>
</template>
