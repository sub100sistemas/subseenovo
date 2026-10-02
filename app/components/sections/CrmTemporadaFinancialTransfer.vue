<script setup lang="ts">
interface FeatureItem {
  icon: string
  iconClass: string
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: '/icons/crm-temporada-financial-icone-olho.svg',
    iconClass: 'h-3 w-5',
    title: 'Rastreio completo do pagamento',
    description: 'Veja o progresso de cada cobrança em tempo real, com status atualizado a cada parcela confirmada.'
  },
  {
    icon: '/icons/crm-temporada-financial-icone-sol.svg',
    iconClass: 'size-5',
    title: 'Repasse calculado automaticamente',
    description: 'O valor devido a cada proprietário é calculado sozinho a partir do pagamento confirmado, sem erro manual.'
  },
  {
    icon: '/icons/crm-temporada-financial-icone-relogio.svg',
    iconClass: 'size-5',
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
                <img :src="feature.icon" alt="" aria-hidden="true" :class="feature.iconClass" />
              </div>
              <div>
                <p class="text-[15px] font-bold leading-[1.3] text-ink">{{ feature.title }}</p>
                <p class="mt-1 text-sm leading-[1.5] text-ink-soft">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/testar-gratis/"
            class="inline-flex h-[56px] w-[297px] items-center justify-center gap-3 rounded-[12px] bg-brand text-[16px] font-semibold text-white"
          >
            Testar grátis por 30 dias
            <img src="/icons/crm-temporada-cta-arrow.svg" alt="" aria-hidden="true" class="size-5" />
          </NuxtLink>
        </div>

        <div class="w-full tablet-lg:max-w-[535px] tablet-lg:shrink-0">
          <div class="overflow-hidden rounded-[16px] bg-white pb-[10px] shadow-[0px_2px_35px_0px_rgba(0,0,0,0.08)]">

            <div class="flex h-[64px] items-center gap-2 bg-[#5d5fef] px-5">
              <span class="text-[16px] font-bold text-white">#004823</span>
              <div class="flex items-center gap-1 rounded-[20px] bg-[#d1fae5] px-2 py-[3px]">
                <div class="size-[6px] shrink-0 rounded-full bg-[#059669]"></div>
                <span class="text-[11px] font-medium text-[#065f46]">Check-in hoje</span>
              </div>
              <div class="flex items-center rounded-[20px] bg-[#ede9fe] px-2 py-[3px]">
                <span class="text-[11px] font-medium text-[#6d28d9]">Booking</span>
              </div>
              <div class="ml-auto flex size-6 items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 4L4 12M4 4l8 8" stroke="white" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </div>
            </div>

            <div class="px-5 py-[10px]">
              <p class="text-[12px] text-[#6b7280]">07/07/2025 → 10/07/2025 · 3 noites · 2 hóspedes</p>
            </div>

            <div class="flex gap-2 px-5 pb-[5px]">
              <div class="flex flex-1 flex-col gap-1 rounded-[8px] border border-[#e5e7eb] bg-[#f9fafb] px-3 py-[10px]">
                <p class="text-[10px] font-medium uppercase tracking-wide text-[#9ca3af]">Hóspede</p>
                <p class="text-[12px] font-semibold text-[#111827]">Ana Paula Ferreira</p>
                <p class="text-[11px] text-[#6b7280]">(48) 99100-5566</p>
              </div>
              <div class="flex flex-1 flex-col gap-1 rounded-[8px] border border-[#e5e7eb] bg-[#f9fafb] px-3 py-[10px]">
                <p class="text-[10px] font-medium uppercase tracking-wide text-[#9ca3af]">Imóvel</p>
                <p class="text-[12px] font-semibold text-[#111827]">Studio Lagoa da Conceição</p>
              </div>
              <div class="flex flex-1 flex-col gap-1 rounded-[8px] border border-[#e5e7eb] bg-[#f9fafb] px-3 py-[10px]">
                <p class="text-[10px] font-medium uppercase tracking-wide text-[#9ca3af]">Valor Total</p>
                <p class="text-[13px] font-bold text-[#10b981]">R$ 1.890</p>
                <p class="text-[11px] text-[#6b7280]">100% pago</p>
              </div>
            </div>

            <div class="relative mt-3">
              <div class="absolute bottom-0 left-0 right-0 h-px bg-[#e5e7eb]"></div>
              <div class="flex gap-5 overflow-x-auto px-5 pt-3">
                <div class="flex shrink-0 flex-col gap-2">
                  <span class="text-[13px] text-[#6b7280]">Detalhes</span>
                  <div class="h-[2px] rounded-[2px]"></div>
                </div>
                <div class="flex shrink-0 flex-col gap-2">
                  <span class="text-[13px] text-[#6b7280]">Hóspedes</span>
                  <div class="h-[2px] rounded-[2px]"></div>
                </div>
                <div class="flex shrink-0 flex-col gap-2">
                  <span class="text-[13px] font-semibold text-[#4f46e5]">Pagamentos</span>
                  <div class="h-[2px] rounded-[2px] bg-[#4f46e5]"></div>
                </div>
                <div class="flex shrink-0 flex-col gap-2">
                  <span class="text-[13px] text-[#6b7280]">Serviços</span>
                  <div class="h-[2px] rounded-[2px]"></div>
                </div>
                <div class="flex shrink-0 flex-col gap-2">
                  <span class="text-[13px] text-[#6b7280]">Contrato</span>
                  <div class="h-[2px] rounded-[2px]"></div>
                </div>
                <div class="flex shrink-0 flex-col gap-2">
                  <span class="text-[13px] text-[#6b7280]">Mensagens</span>
                  <div class="h-[2px] rounded-[2px]"></div>
                </div>
              </div>
            </div>

            <div class="px-5 pt-5">
              <div class="flex flex-col gap-[10px] rounded-[10px] border border-[#e5e7eb] bg-[#f9fafb] px-5 py-4">
                <div class="flex items-center justify-between">
                  <span class="text-[13px] font-medium text-[#374151]">Progresso do pagamento</span>
                  <span class="text-[13px] font-bold text-[#10b981]">100%</span>
                </div>
                <div class="h-[6px] overflow-hidden rounded-[4px] bg-[#e5e7eb]">
                  <div class="h-full w-full rounded-[4px] bg-[#10b981]"></div>
                </div>
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[11px] text-[#6b7280]">Pago</p>
                  <p class="text-[14px] font-bold text-[#111827]">R$ 1.890</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3 px-5 py-4">
              <p class="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#9ca3af]">Histórico de Transações</p>
              <div class="flex items-center gap-3 rounded-[8px] border border-[#e5e7eb] p-3">
                <div class="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#f0fdf4]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="17 6 23 6 23 12" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="flex min-w-0 flex-1 flex-col gap-[3px]">
                  <p class="text-[13px] font-medium text-[#111827]">1ª parcela - Cartão de crédito</p>
                  <p class="text-[12px] text-[#9ca3af]">07/07</p>
                </div>
                <div class="flex shrink-0 flex-col items-end gap-1">
                  <p class="text-[13px] font-bold text-[#111827]">R$ 1.890</p>
                  <div class="flex items-center gap-1 rounded-[20px] bg-[#d1fae5] px-[6px] py-[2px]">
                    <div class="size-[5px] shrink-0 rounded-full bg-[#059669]"></div>
                    <span class="text-[11px] font-medium text-[#065f46]">Confirmada</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
