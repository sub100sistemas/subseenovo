<script setup lang="ts">
interface FeatureRow {
  label: string
  incluidoUrbano: boolean
  incluidoRural: boolean
}

interface FeatureCategory {
  titulo: string
  itens: FeatureRow[]
}

function allIncluded(titulo: string, labels: string[]): FeatureCategory {
  return {
    titulo,
    itens: labels.map((label) => ({ label, incluidoUrbano: true, incluidoRural: true }))
  }
}

const categorias: FeatureCategory[] = [
  allIncluded('Gestão Imobiliária e Cadastros', [
    'Cadastro de Imóveis Nacionais e Internacionais',
    'Cadastro de Pessoas',
    'Edifícios e Condomínios'
  ]),
  allIncluded('CRM e Atendimento', [
    'Funil Imobiliário',
    'Kanban de Atendimentos',
    'Base de Leads',
    'Roleta de Distribuição de Leads',
    'Radar de Oportunidades',
    'Agenda integrada ao Google',
    'Gestão de Metas',
    'Automação de Marketing'
  ]),
  allIncluded('Canais, Mensageria e Integrações', [
    'Portal SUB100',
    'Portais Imobiliários',
    'Redes de Parcerias',
    'Meu Site',
    'Lais.AI',
    'Facebook Forms',
    'WhatsApp Oficial e Parceiros',
    'E-mail, Push e SMS',
    'API'
  ]),
  allIncluded('Negociação e Gestão Operacional', [
    'Dashboard',
    'Propostas e Contrapropostas',
    'Empréstimo de Chaves',
    'Quadro de Chaves',
    'Análise de Locação',
    'Rateio de Comissões'
  ]),
  allIncluded('Experiência, Visitas e Relacionamento', [
    'Atualização Rápida',
    'Performance do Imóvel',
    'Validação pelo Proprietário',
    'Feedback de Visita',
    'Rota de Visitas pelo Google Maps',
    'Compartilhamento por Link Temporário',
    'Portarias Remotas e Controle de Acessos'
  ]),
  allIncluded('Inteligência e Produtividade', ['Inteligência Artificial Embarcada', 'Site otimizado para SEO/GEO']),
  allIncluded('Carreira e Oportunidades', ['Vagas de Emprego', 'Currículo do Corretor']),
  allIncluded('Plugin para WhatsApp', [
    'Mensagens Automáticas',
    'Anotações e Tarefas',
    'Compartilhamento de Imóveis',
    'Follow-up de Atendimento'
  ]),
  allIncluded('Treinamentos e Evolução', [
    'Histórico de Versões',
    'Base de Conhecimento',
    'Aprenda com a Mel.AI',
    'Eventos Online'
  ])
]

const tabelaVisivel = ref(true)
</script>

<template>
  <section
    class="section-py relative overflow-hidden"
    style="background: radial-gradient(60% 60% at 50% 100%, rgba(93, 95, 239, 0.12) 0%, rgba(93, 95, 239, 0) 100%)"
  >
    <div class="container-page relative flex flex-col items-center gap-2 text-center">
      <h2 class="max-w-[591px]">Funcionalidades do <span class="text-brand">CRM Imobiliário</span></h2>
      <p class="max-w-[1027px] text-lg text-ink tablet-lg:text-xl">
        Compare os princípios recursos e escolha a solução ideal para sua operação
      </p>
    </div>

    <div class="container-page relative mt-10 overflow-x-auto">
      <div class="min-w-[720px]">
        <div class="grid grid-cols-[1fr_180px_180px] items-end gap-4 tablet-lg:grid-cols-[1fr_220px_220px]">
          <div />
          <div class="flex flex-col items-center gap-3 rounded-2xl border-2 border-brand bg-white px-4 py-6">
            <img src="/icons/logo-subsee-on.svg" alt="SUBSEE on" width="184" height="40" class="h-auto w-[140px]" />
            <h3 class="text-brand">Urbano</h3>
            <CtaButton variant="outline" :icon="false" to="#" class="w-full!">Site &amp; hotsite padrão</CtaButton>
          </div>
          <div class="flex flex-col items-center justify-end gap-3 rounded-2xl border-2 border-brand bg-white px-4 py-6">
            <h3 class="text-brand">Rural</h3>
            <CtaButton variant="outline" :icon="false" to="#" class="w-full!">Site &amp; hotsite padrão</CtaButton>
          </div>
        </div>

        <Transition name="features-fade">
        <div v-show="tabelaVisivel" class="mt-6 flex flex-col">
          <div v-for="categoria in categorias" :key="categoria.titulo" class="border-b border-ink/10 py-5 last:border-b-0">
            <h3 class="mb-3 text-base text-brand">{{ categoria.titulo }}</h3>
            <div
              v-for="item in categoria.itens"
              :key="item.label"
              class="grid grid-cols-[1fr_180px_180px] items-center gap-4 py-2 tablet-lg:grid-cols-[1fr_220px_220px]"
            >
              <p class="text-sm text-ink tablet-lg:text-base">• {{ item.label }}</p>
              <div class="flex justify-center">
                <img
                  v-if="item.incluidoUrbano"
                  src="/icons/icone-check-verde-circulo.svg"
                  width="22"
                  height="22"
                  alt="Incluso no plano Urbano"
                />
              </div>
              <div class="flex justify-center">
                <img
                  v-if="item.incluidoRural"
                  src="/icons/icone-check-verde-circulo.svg"
                  width="22"
                  height="22"
                  alt="Incluso no plano Rural"
                />
              </div>
            </div>
          </div>
        </div>
        </Transition>
      </div>
    </div>

    <div class="container-page relative mt-8 flex flex-col items-center gap-6 tablet-lg:flex-row tablet-lg:justify-center">
      <p class="text-sm text-ink italic">
        * No período gratuito de 30 dias<br />
        as integrações não estão liberadas.
      </p>
      <button
        type="button"
        class="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base text-white hover:bg-brand/90"
        @click="tabelaVisivel = !tabelaVisivel"
      >
        {{ tabelaVisivel ? 'Ocultar as funcionalidades' : 'Ver todas as funcionalidades' }}
        <IconArrowRight class="size-5 shrink-0 transition-transform" :class="{ '-rotate-90': tabelaVisivel }" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.features-fade-enter-active,
.features-fade-leave-active {
  transition: opacity 0.2s ease;
}

.features-fade-enter-from,
.features-fade-leave-to {
  opacity: 0;
}
</style>
