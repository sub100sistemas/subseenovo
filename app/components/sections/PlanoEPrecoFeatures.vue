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
    'Cadastro de Imóveis Nacionais\ne Internacionais',
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
  allIncluded('Experiência, Visitas e\nRelacionamento', [
    'Atualização Rápida',
    'Performance do Imóvel',
    'Validação pelo Proprietário',
    'Feedback de Visita',
    'Rota de Visitas pelo Google\nMaps',
    'Compartilhamento por Link\nTemporário',
    'Portarias Remotas e Controle\nde Acessos'
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

const categoriasNoResumo = 2
const tabelaCompleta = ref(false)
const categoriasVisiveis = computed(() =>
  tabelaCompleta.value ? categorias : categorias.slice(0, categoriasNoResumo)
)

const secao = ref<HTMLElement | null>(null)
const titulo = ref<HTMLElement | null>(null)
const botao = ref<HTMLElement | null>(null)

const folgaInicioSecao = 96
const folgaTitulo = 112
const folgaBotao = 24

function posicaoAbsoluta(elemento: HTMLElement | null, borda: 'top' | 'bottom') {
  return (elemento?.getBoundingClientRect()[borda] ?? 0) + window.scrollY
}

function destinoAoRecolher() {
  const inicioSecao = posicaoAbsoluta(secao.value, 'top') - folgaInicioSecao
  const limiteTitulo = posicaoAbsoluta(titulo.value, 'top') - folgaTitulo
  const botaoVisivel = posicaoAbsoluta(botao.value, 'bottom') + folgaBotao - window.innerHeight
  return Math.min(limiteTitulo, Math.max(inicioSecao, botaoVisivel))
}

async function alternarTabela() {
  const recolhendo = tabelaCompleta.value
  const posicaoAtual = window.scrollY
  tabelaCompleta.value = !recolhendo
  await nextTick()
  if (recolhendo) {
    window.scrollTo({ top: destinoAoRecolher(), behavior: 'smooth' })
  } else {
    window.scrollTo({ top: posicaoAtual, behavior: 'instant' })
  }
}

const columnsClass = 'grid-cols-[minmax(0,304fr)_minmax(0,370fr)_minmax(0,40fr)_minmax(0,370fr)]'
const rowClass =
  'flex min-h-[28px] items-center gap-2 px-2 desktop:grid desktop:grid-cols-[minmax(0,304fr)_minmax(0,370fr)_minmax(0,40fr)_minmax(0,370fr)] desktop:gap-0 desktop:px-0'

interface PlanoCabecalho {
  nome: string
  to: string
}

const planosCabecalho: PlanoCabecalho[] = [
  { nome: 'Urbano', to: '/modulos/site-para-imobiliarias-urbanas/' },
  { nome: 'Rural', to: '/modulos/site-para-imobiliarias-rurais/' }
]
</script>

<template>
  <section ref="secao" class="py-10">
    <div class="container-page">
      <div class="relative overflow-hidden rounded-[28px] bg-[#f5f5f5] px-3 pt-12 pb-10 mobile-lg:px-4 tablet-lg:rounded-[50px] tablet-lg:px-8 tablet-lg:pt-[97px] tablet-lg:pb-[75px]">
        <div
          class="pointer-events-none absolute -bottom-[189px] -left-px h-[672px] w-[1398px] rounded-[50%] bg-[radial-gradient(closest-side,rgba(93,95,239,0.26)_39%,rgba(93,95,239,0)_100%)] opacity-50 blur-[100px]"
          aria-hidden="true"
        />

        <div class="relative flex flex-col items-center gap-[41px]">
          <div class="flex flex-col items-center gap-3 text-center tablet-lg:gap-[41px]">
            <h2 ref="titulo" class="text-[24px] leading-8 font-bold text-[#0b0d0f] tablet-lg:text-[32px]">
              Funcionalidades do <span class="text-brand">CRM Imobiliário</span>
            </h2>
            <p class="max-w-[1027px] text-lg leading-normal text-ink tablet-lg:text-[26px]">
              Compare os princípios recursos e escolha a solução ideal para sua operação
            </p>
          </div>

          <div class="w-full">
            <div class="relative mx-auto max-w-[1099px] desktop:pb-[45px]">
              <div :class="[columnsClass, 'pointer-events-none absolute inset-0 hidden pl-[15px] desktop:grid']" aria-hidden="true">
                <div class="col-start-2 rounded-2xl bg-white/80" />
                <div class="col-start-4 rounded-2xl bg-white/80" />
              </div>

              <div class="relative flex flex-col items-center gap-4 pb-6 desktop:hidden">
                <img src="/icons/logo-subsee-on.svg" alt="SUBSEE on" title="SUBSEE on" width="187" height="40" class="h-auto w-[160px]" />
                <div class="grid w-full grid-cols-1 gap-3 mobile-lg:grid-cols-2">
                  <div v-for="plano in planosCabecalho" :key="plano.nome" class="flex flex-col items-center gap-3 rounded-2xl bg-white/80 px-4 py-5">
                    <h3 class="text-[28px] leading-8 font-bold text-brand">{{ plano.nome }}</h3>
                    <CtaButton
                      variant="outline"
                      :icon="true"
                      :to="plano.to"
                      class="h-[52px]! min-h-0! w-full! rounded-lg! border-ink! px-3! text-[15px]! font-medium! whitespace-nowrap text-ink! hover:bg-ink/5!"
                    >
                      Site &amp; hotsite padrão
                    </CtaButton>
                  </div>
                </div>
              </div>

              <div :class="[columnsClass, 'relative hidden h-[145px] pl-[15px] desktop:grid']">
                <div class="mt-[52px] ml-3">
                  <img src="/icons/logo-subsee-on.svg" alt="SUBSEE on" title="SUBSEE on" width="187" height="40" class="h-auto w-[187px]" />
                </div>
                <div class="flex flex-col items-center gap-[19px] px-[30px] pt-[34px]">
                  <h3 class="text-[32px] leading-8 font-bold text-brand">Urbano</h3>
                  <CtaButton
                    variant="outline"
                    :icon="true"
                    to="/modulos/site-para-imobiliarias-urbanas/"
                    class="h-[55px]! min-h-0! w-full! rounded-lg! border-ink! whitespace-nowrap px-3! text-[14px]! font-medium! desktop-compact:text-[16px]! desktop:text-[20px]! text-ink! hover:bg-ink/5!"
                  >
                    Site &amp; hotsite padrão
                  </CtaButton>
                </div>
                <div />
                <div class="flex flex-col items-center gap-[19px] px-[30px] pt-[34px]">
                  <h3 class="text-[32px] leading-8 font-bold text-brand">Rural</h3>
                  <CtaButton
                    variant="outline"
                    :icon="true"
                    to="/modulos/site-para-imobiliarias-rurais/"
                    class="h-[55px]! min-h-0! w-full! rounded-lg! border-ink! whitespace-nowrap px-3! text-[14px]! font-medium! desktop-compact:text-[16px]! desktop:text-[20px]! text-ink! hover:bg-ink/5!"
                  >
                    Site &amp; hotsite padrão
                  </CtaButton>
                </div>
              </div>

              <div class="relative flex flex-col gap-7 desktop:pl-[15px]">
                <div v-for="categoria in categoriasVisiveis" :key="categoria.titulo">
                  <div class="mb-2 flex items-end justify-between gap-3">
                    <h3 class="min-w-0 pl-2 text-base leading-normal font-semibold whitespace-normal text-brand desktop:w-fit desktop:pl-[7px] desktop:whitespace-pre">{{ categoria.titulo }}</h3>
                    <div class="flex shrink-0 gap-2 pr-2 text-[10px] leading-none font-semibold text-brand desktop:hidden" aria-hidden="true">
                      <span class="w-9 text-center">Urbano</span>
                      <span class="w-9 text-center">Rural</span>
                    </div>
                  </div>
                  <ul class="flex flex-col gap-[10px] bg-brand/[0.04] pt-2 pb-2.5">
                    <li
                      v-for="item in categoria.itens"
                      :key="item.label"
                      :class="rowClass"
                    >
                      <p class="relative min-w-0 flex-1 pr-1 pl-5 text-[14px] leading-6 min-[375px]:text-[15px] whitespace-normal [overflow-wrap:anywhere] mobile-lg:text-base desktop:[overflow-wrap:normal] text-[#0b0d0f] before:absolute before:top-[10px] before:left-1.5 before:size-[5px] before:rounded-full before:bg-[#0b0d0f] desktop:pr-4 desktop:pl-[34px] desktop:leading-7 desktop:whitespace-pre desktop:before:top-[11px] desktop:before:left-[22px]">{{ item.label }}</p>
                      <div class="flex w-9 shrink-0 justify-center desktop:w-auto">
                        <img
                          v-if="item.incluidoUrbano"
                          src="/icons/plano-e-preco-check-badge.svg"
                          width="26"
                          height="26"
                          alt="Incluso no plano Urbano" title="Incluso no plano Urbano"
                          class="size-[26px]"
                        />
                      </div>
                      <div class="hidden desktop:block" />
                      <div class="flex w-9 shrink-0 justify-center desktop:w-auto">
                        <img
                          v-if="item.incluidoRural"
                          src="/icons/plano-e-preco-check-badge.svg"
                          width="26"
                          height="26"
                          alt="Incluso no plano Rural" title="Incluso no plano Rural"
                          class="size-[26px]"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center gap-6 tablet-lg:flex-row tablet-lg:gap-10 desktop-compact:gap-[219px]">
            <p class="text-sm leading-[1.2] text-ink italic">
              * No período gratuito de 30 dias<br />
              as integrações não estão liberadas.
            </p>
            <button
              ref="botao"
              type="button"
              class="inline-flex h-[55px] w-full max-w-[426px] items-center justify-center gap-[6px] rounded-lg bg-brand px-[34px] text-lg font-medium text-white hover:bg-brand/90 tablet-lg:w-[426px] tablet-lg:text-[20px]"
              @click="alternarTabela"
            >
              {{ tabelaCompleta ? 'Ocultar as funcionalidades' : 'Ver todas as funcionalidades' }}
              <IconArrowRight class="size-[22px] shrink-0 transition-transform" :class="{ '-rotate-90': tabelaCompleta }" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

