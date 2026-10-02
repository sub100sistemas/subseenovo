<script setup lang="ts">
interface FeatureSegment {
  text: string
  bold?: boolean
}

interface PricingFeatureItem {
  segments: FeatureSegment[]
  footnoteMarker?: '*' | '**'
}

interface PricingPlan {
  nome: string
  descricao: string
  preco: string
  complemento: string
  features: PricingFeatureItem[]
}

const sharedFeatures: PricingFeatureItem[] = [
  { segments: [{ text: 'Até ' }, { text: '10 usuários', bold: true }, { text: ' para sua equipe' }] },
  { segments: [{ text: 'Organize seus ' }, { text: 'leads', bold: true }, { text: ' e clientes em um só lugar' }] },
  { segments: [{ text: 'Acompanhe negociações e ' }, { text: 'follow-ups', bold: true }, { text: ' pelo funil de vendas' }] },
  { segments: [{ text: 'Cadastre e gerencie ' }, { text: 'seus imóveis', bold: true }, { text: ' com facilidade' }] },
  { segments: [{ text: 'Divulgue no SUB100', bold: true }, { text: ' e em outros portais imobiliários' }], footnoteMarker: '*' },
  { segments: [{ text: 'Tenha seu ' }, { text: 'site imobiliário', bold: true }, { text: ' integrado' }], footnoteMarker: '**' },
  { segments: [{ text: 'Automatize tarefas', bold: true }, { text: ' e ações do dia a dia' }] },
  { segments: [{ text: 'Treinamentos e suporte ' }, { text: 'especializado', bold: true }] },
  { segments: [{ text: 'Conte com a ' }, { text: 'MEL.IA', bold: true }, { text: ' para apoiar seus atendimentos' }] }
]

const planos: PricingPlan[] = [
  {
    nome: 'Urbano',
    descricao: 'Gestão de apartamentos, casas e imóveis comerciais em áreas urbanas, com foco em resultados e eficiência.',
    preco: 'R$450',
    complemento: '/mês + opcionais',
    features: sharedFeatures
  },
  {
    nome: 'Rural',
    descricao: 'Gerencie fazendas, sítios e terras com mais controle e produtividade.',
    preco: 'R$450',
    complemento: '/mês + opcionais',
    features: sharedFeatures
  }
]
</script>

<template>
  <section class="section-py relative">
    <div class="container-page flex flex-col items-center gap-10">
      <div class="relative flex items-center">
        <div class="flex items-center gap-1 rounded-full border border-ink p-1.5">
          <span class="rounded-full bg-brand px-6 py-2.5 text-base font-medium text-white">Mensal</span>
          <span class="rounded-full px-6 py-2.5 text-base font-medium text-ink">Anual</span>
        </div>
        <img
          src="/images/pricing/plano-e-preco-selo-12-off.svg"
          alt="Selo de 12% de desconto anual"
          width="209"
          height="135"
          class="pointer-events-none absolute inset-y-0 left-[calc(100%-40px)] my-auto hidden h-fit w-[140px] desktop-compact:block"
        />
      </div>

      <div class="grid w-full grid-cols-1 items-stretch gap-8 tablet-lg:grid-cols-2 tablet-lg:gap-6">
        <div
          v-for="plano in planos"
          :key="plano.nome"
          class="flex flex-col rounded-2xl border-2 border-brand bg-white p-8 tablet-lg:p-10"
        >
          <h2 class="text-[36px] leading-[1.2] font-bold text-brand">{{ plano.nome }}</h2>
          <p class="mt-3 text-lg text-ink-soft">{{ plano.descricao }}</p>

          <p class="mt-6 text-black">
            <span class="text-[48px] leading-[58px] font-semibold text-ink">{{ plano.preco }}</span>
            <span class="text-[22px] text-[#404040]">{{ plano.complemento }}</span>
          </p>

          <CtaButton variant="primary" to="/testar-gratis/" class="mt-6 w-full!">
            Testar grátis por 30 dias
          </CtaButton>

          <ul class="mt-8 flex flex-col gap-4">
            <li v-for="(feature, index) in plano.features" :key="index" class="flex items-start gap-3">
              <img
                src="/icons/icone-check-verde-circulo.svg"
                width="20"
                height="20"
                alt=""
                aria-hidden="true"
                class="mt-0.5 shrink-0"
              />
              <span class="text-base text-[#404040]">
                <template v-for="(segment, segIndex) in feature.segments" :key="segIndex">
                  <strong v-if="segment.bold" class="font-semibold">{{ segment.text }}</strong>
                  <template v-else>{{ segment.text }}</template>
                </template>
                <template v-if="feature.footnoteMarker"> {{ feature.footnoteMarker }}</template>
              </span>
            </li>
          </ul>

          <CtaButton variant="outline" :icon="false" to="#opcionais" class="mt-8 w-full! border-ink! text-ink! hover:bg-ink/5!">
            + Opcionais
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
