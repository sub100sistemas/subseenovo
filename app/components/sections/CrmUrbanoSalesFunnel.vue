<script setup lang="ts">
interface LeadCard {
  name: string
  tag: string
  propertyType: string
  value: string
  elapsed: string
  broker: string
}

interface FunnelColumn {
  title: string
  count: string
  headerColor: string
  cards: LeadCard[]
}

const columns: FunnelColumn[] = [
  {
    title: 'Sem Contato',
    count: '20',
    headerColor: '#6c757d',
    cards: [
      {
        name: 'Paulo Henrique Silva',
        tag: 'Lançamento',
        propertyType: 'Apartamento Padrão',
        value: 'R$ 485.000,00',
        elapsed: 'há 2 meses',
        broker: 'Walcir Franzoni'
      },
      {
        name: 'Fernanda Nenes',
        tag: 'Venda',
        propertyType: 'Terrenos',
        value: 'R$ 90.000,00',
        elapsed: 'há 5 meses',
        broker: 'Walcir Franzoni'
      }
    ]
  },
  {
    title: 'Em Atendimento',
    count: '12',
    headerColor: '#ff9900',
    cards: [
      {
        name: 'Maria Silva de Romão',
        tag: 'Venda',
        propertyType: 'Apartamento Padrão',
        value: 'R$ 470.000,00',
        elapsed: 'há 2 meses',
        broker: 'Walcir Franzoni'
      },
      {
        name: 'Pedro Souza Bento',
        tag: 'Venda',
        propertyType: 'Casa',
        value: 'R$ 500.000,00',
        elapsed: 'há 6 meses',
        broker: 'Marcio Pelegrini'
      }
    ]
  },
  {
    title: 'Em Negociação',
    count: '8',
    headerColor: '#0dcaf0',
    cards: [
      {
        name: 'Mario Carmem Meira',
        tag: 'Venda',
        propertyType: 'Apartamento Padrão',
        value: 'R$ 1.500.000,00',
        elapsed: 'há 5 meses',
        broker: 'Walcir Franzoni'
      },
      {
        name: 'Pedro de Souza',
        tag: 'Venda',
        propertyType: 'Casa em Condomínios',
        value: 'R$ 3.000.000,00',
        elapsed: 'há 6 meses',
        broker: 'Marcio Pelegrini'
      }
    ]
  }
]
</script>

<template>
  <section id="crm-urbano-funil" class="section-py bg-white">
    <div class="container-page">
      <div class="mx-auto max-w-[1100px] text-center">
        <h2 class="leading-[1.4] tracking-[-1px]">
          Cada atendimento no lugar <span class="text-brand">certo</span>,
          <br class="hidden desktop-compact:block" />
          do primeiro contato à venda
        </h2>
        <p class="mx-auto mt-8 max-w-[900px] text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
          Distribua leads automaticamente, acompanhe negociações em um Kanban visual e nunca perca
          uma oportunidade por falta de retorno.
        </p>
      </div>

      <div class="mx-auto mt-8 grid max-w-[908px] grid-cols-1 justify-items-center gap-[34px] tablet:grid-cols-2 tablet-lg:grid-cols-3">
        <div
          v-for="column in columns"
          :key="column.title"
          class="w-full max-w-[320px] overflow-hidden rounded-[8px] border border-[#e3e3ea] bg-[#f4f4f7] tablet-lg:max-w-[280px]"
        >
          <div
            class="flex h-10 items-center justify-between px-4 text-[14px] text-white"
            :style="{ backgroundColor: column.headerColor }"
          >
            <span class="font-semibold">{{ column.title }}</span>
            <span class="font-bold">{{ column.count }}</span>
          </div>

          <div class="flex flex-col gap-3 p-[13px]">
            <div
              v-for="card in column.cards"
              :key="card.name"
              class="h-[104px] overflow-hidden rounded-[6px] border border-[#ccc] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <div class="flex items-start justify-between gap-2 px-[11px] pt-[7px]">
                <p class="text-[13px] leading-[1.2] font-bold text-[#6769f0]">{{ card.name }}</p>
                <span class="shrink-0 rounded-[4px] bg-[#6769f0] px-2 py-[3px] text-[9px] leading-[1.2] whitespace-nowrap text-white">
                  {{ card.tag }}
                </span>
              </div>
              <div class="px-[11px]">
                <p class="mt-[6px] text-[11px] leading-[1.2] text-[#6c757d]">{{ card.propertyType }}</p>
                <p class="mt-[3px] text-[11px] leading-[1.2] font-bold text-[#00d39b]">{{ card.value }}</p>
                <p class="mt-[4px] text-[10px] leading-[1.2] text-[#6c757d]">{{ card.elapsed }}</p>
                <p class="text-[10px] leading-[1.2] text-[#00d39b]">{{ card.broker }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
          Testar grátis por 30 dias
        </CtaButton>
      </div>
    </div>
  </section>
</template>
