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
  precoAnual: string
  complemento: string
  contentGapClass: string
  features: PricingFeatureItem[]
}

const sharedFeatures: PricingFeatureItem[] = [
  { segments: [{ text: 'Até ' }, { text: '10 usuários', bold: true }, { text: ' para sua equipe' }] },
  { segments: [{ text: 'Organize seus ' }, { text: 'leads', bold: true }, { text: ' e clientes em um só lugar' }] },
  { segments: [{ text: 'Acompanhe negociações e ' }, { text: 'follow-ups', bold: true }, { text: ' pelo funil de vendas' }] },
  { segments: [{ text: 'Cadastre e gerencie ' }, { text: 'seus imóveis', bold: true }, { text: ' com facilidade' }] },
  { segments: [{ text: 'Divulgue no SUB100', bold: true }, { text: ' e em outros portais imobiliários' }], footnoteMarker: '*' },
  { segments: [{ text: 'Tenha seu ' }, { text: 'site imobiliário', bold: true }, { text: ' integrado' }], footnoteMarker: '**' },
  { segments: [{ text: 'Conte com a ' }, { text: 'MEL.IA', bold: true }, { text: ' para apoiar seus atendimentos' }] },
  { segments: [{ text: 'Automatize tarefas', bold: true }, { text: ' e ações do dia a dia' }] },
  { segments: [{ text: 'Treinamentos e suporte ' }, { text: 'especializado', bold: true }] }
]

const planos: PricingPlan[] = [
  {
    nome: 'Urbano',
    descricao: 'Gestão de apartamentos, casas e imóveis comerciais em áreas urbanas, com foco em resultados e eficiência.',
    preco: 'R$450',
    precoAnual: 'R$396',
    complemento: 'mês + opcionais',
    contentGapClass: 'gap-5',
    features: sharedFeatures
  },
  {
    nome: 'Rural',
    descricao: 'Gerencie fazendas, sítios e terras com mais controle e produtividade.',
    preco: 'R$450',
    precoAnual: 'R$396',
    complemento: 'mês + opcionais',
    contentGapClass: 'gap-[26px]',
    features: sharedFeatures
  }
]

const periodo = ref<'mensal' | 'anual'>('mensal')
</script>

<template>
  <section class="relative pb-10">
    <div class="container-page flex flex-col items-center gap-8">
      <div class="relative h-[133px] w-[215px]">
        <div class="absolute top-14 left-0 h-[59px] w-[215px] rounded-[42px] border border-ink">
          <button
            type="button"
            :aria-pressed="periodo === 'mensal'"
            class="absolute top-[9px] left-[11px] flex h-[39px] w-[90px] cursor-pointer items-center justify-center rounded-[42px] text-base font-medium"
            :class="periodo === 'mensal' ? 'bg-[#686af1] text-white' : 'text-ink'"
            @click="periodo = 'mensal'"
          >
            Mensal
          </button>
          <button
            type="button"
            :aria-pressed="periodo === 'anual'"
            class="absolute top-[9px] left-[114px] flex h-[39px] w-[88px] cursor-pointer items-center justify-center rounded-[42px] text-base font-medium"
            :class="periodo === 'anual' ? 'bg-[#686af1] text-white' : 'text-ink'"
            @click="periodo = 'anual'"
          >
            Anual
          </button>
        </div>
        <img
          src="/images/pricing/plano-e-preco-selo-12-off.svg"
          alt="Selo de 12% de desconto anual" title="Selo de 12% de desconto anual"
          width="207"
          height="133"
          class="pointer-events-none absolute top-0 left-[150px] h-auto w-[100px] mobile-lg:left-[162px] mobile-lg:w-[207px]"
        />
      </div>

      <div class="flex w-full flex-col items-center gap-6 tablet-lg:flex-row tablet-lg:items-stretch tablet-lg:justify-center tablet-lg:gap-[29px]">
        <div
          v-for="plano in planos"
          :key="plano.nome"
          class="flex w-full max-w-[471px] min-w-0 flex-col rounded-2xl border-2 border-[#686af1] bg-white p-6 tablet-lg:min-h-[908px] tablet-lg:flex-1 tablet-lg:pt-[42px] tablet-lg:pr-6 tablet-lg:pb-[46px] tablet-lg:pl-10"
          :class="plano.contentGapClass"
        >
          <h2 class="text-[32px] leading-8 font-bold text-brand tablet-lg:text-[36px]">{{ plano.nome }}</h2>
          <p class="text-lg leading-[1.4] text-[#666e8a] tablet-lg:text-[20px]">{{ plano.descricao }}</p>

          <p class="text-[0px] leading-[0] font-semibold text-black tablet-lg:h-[58px]">
            <span class="text-[36px] leading-[58px] tracking-[-1.44px] text-ink tablet-lg:text-[48px]">{{ periodo === 'anual' ? plano.precoAnual : plano.preco }}</span>
            <span class="text-lg leading-8 text-[#404040] tablet-lg:text-[22px]">/</span>
            <span class="text-lg leading-[58px] font-normal tablet-lg:text-[22px]">{{ plano.complemento }}</span>
          </p>

          <CtaButton variant="primary" to="/testar-gratis/" class="min-h-[67px]! w-full!">
            Testar grátis por 30 dias
          </CtaButton>

          <ul class="flex flex-col gap-3">
            <li v-for="(feature, index) in plano.features" :key="index" class="flex items-center gap-[15px]">
              <img
                src="/icons/plano-e-preco-check-badge.svg"
                width="23"
                height="23"
                alt="Selo de item incluso" title="Selo de item incluso"
                aria-hidden="true"
                class="shrink-0"
              />
              <span class="text-base leading-[1.4] text-[#404040]">
                <template v-for="(segment, segIndex) in feature.segments" :key="segIndex">
                  <strong v-if="segment.bold" class="font-semibold">{{ segment.text }}</strong>
                  <template v-else>{{ segment.text }}</template>
                </template>
                <template v-if="feature.footnoteMarker"> {{ feature.footnoteMarker }}</template>
              </span>
            </li>
          </ul>

          <CtaButton
            variant="outline"
            :icon="false"
            to="#opcionais"
            class="min-h-[67px]! w-full! border-2! border-ink! text-[20px]! font-semibold! text-ink! hover:bg-ink/5!"
          >
            + Opcionais
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
