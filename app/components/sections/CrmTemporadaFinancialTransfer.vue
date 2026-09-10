<script setup lang="ts">
interface FeatureItem {
  icon: string
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: '/icons/icone-crm-overview-leads.svg',
    title: 'Rastreio completo do pagamento',
    description: 'Veja o progresso de cada cobrança em tempo real, com status atualizado a cada parcela confirmada.'
  },
  {
    icon: '/icons/crm-temporada-calendar-icone-gestao.svg',
    title: 'Repasse calculado automaticamente',
    description: 'O valor devido a cada proprietário é calculado sozinho a partir do pagamento confirmado, sem erro manual.'
  },
  {
    icon: '/icons/crm-temporada-calendar-icone-status.svg',
    title: 'Histórico sempre à mão',
    description: 'Toda transação (parcela, forma de pagamento, data) fica registrada e visível num histórico único por reserva.'
  }
]
</script>

<template>
  <section id="crm-temporada-financial" class="section-py bg-white">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[80px]">
        <div class="flex w-full flex-col items-start gap-6 tablet-lg:max-w-[580px]">
          <h2 class="font-semibold leading-[1.2]">
            <span class="text-brand">Cada reserva</span>, um repasse<br />
            simples de calcular
          </h2>
          <p class="text-base leading-[1.5] text-ink tablet-lg:text-[18px]">
            Acompanhe cada pagamento em tempo real e veja quanto cada proprietário tem a receber, sem depender de planilhas paralelas.
          </p>

          <div class="flex flex-col gap-5">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex items-start gap-4"
            >
              <div class="flex size-[38px] shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-white">
                <img :src="feature.icon" alt="" aria-hidden="true" class="size-5" />
              </div>
              <div>
                <p class="text-[15px] font-bold leading-[1.3] text-ink">{{ feature.title }}</p>
                <p class="mt-1 text-sm leading-[1.5] text-ink-soft">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/testar-gratis"
            class="inline-flex h-[56px] w-[297px] items-center justify-center gap-3 rounded-[12px] bg-brand text-[16px] font-semibold text-white"
          >
            Testar grátis por 30 dias
            <img src="/icons/crm-temporada-cta-arrow.svg" alt="" aria-hidden="true" class="size-5" />
          </NuxtLink>
        </div>

        <div class="flex w-full items-center justify-center tablet-lg:max-w-[480px] tablet-lg:shrink-0">
          <NuxtImg
            src="/images/modulos-crm-temporada/financial-transfer-card.png"
            :width="430"
            :height="298"
            sizes="mobile-lg:430px tablet-lg:430px"
            alt="Card de pagamento da reserva mostrando progresso de pagamento, hóspede, imóvel e histórico de transações"
            class="block h-auto w-full rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
