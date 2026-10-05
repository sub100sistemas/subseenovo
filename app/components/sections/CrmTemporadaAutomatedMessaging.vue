<script setup lang="ts">
const messages = [
  {
    bg: '#fbfbff',
    accent: '#5d5fef',
    iconBg: 'rgba(93,95,239,0.15)',
    color: '#5d5fef',
    title: 'Confirmação de reserva',
    subtitle: 'Imediato',
    body: 'Sua reserva foi confirmada! ✓',
    time: 'Agora',
    status: 'Enviado',
    statusBg: 'rgba(93,95,239,0.11)',
  },
  {
    bg: '#f9feff',
    accent: '#0dcaf0',
    iconBg: 'rgba(13,202,240,0.15)',
    color: '#0dcaf0',
    title: 'Lembrete de check-in',
    subtitle: '1 dia antes',
    body: 'Amanhã é o seu check-in 🎉',
    time: 'Amanhã • 14h',
    status: 'Agendado',
    statusBg: 'rgba(13,202,240,0.11)',
  },
  {
    bg: '#f9fffd',
    accent: '#00d39b',
    iconBg: 'rgba(0,211,155,0.15)',
    color: '#00d39b',
    title: 'Boas-vindas na chegada',
    subtitle: 'No check-in',
    body: 'Bem-vindo! Wi-fi: casa2027',
    time: 'Automático',
    status: 'Ativo',
    statusBg: 'rgba(0,211,155,0.11)',
  },
  {
    bg: '#fffdf8',
    accent: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.15)',
    color: '#f59e0b',
    title: 'Pedido de avaliação',
    subtitle: 'Pós-estadia',
    body: 'Como foi sua estadia?',
    time: '2h após saída',
    status: 'Agendado',
    statusBg: 'rgba(245,158,11,0.11)',
  },
]

const features = [
  'Experiência mais profissional em cada etapa da jornada do hóspede',
  'Equipe com menos tarefas repetitivas e mais tempo para o essencial',
  'Comunicação padronizada e consistente em todos os canais',
]
</script>

<template>
  <section id="crm-temporada-messaging" class="section-py">
    <div class="mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0">
      <div class="overflow-hidden rounded-[28px] bg-[#F5F5F5] tablet-lg:rounded-[40px] desktop-full:rounded-[50px]">
        <div class="flex flex-col items-center gap-8 px-6 py-10 tablet-lg:flex-row tablet-lg:items-end tablet-lg:gap-[60px] tablet-lg:px-[40px] tablet-lg:py-[60px] desktop-full:gap-[100px] desktop-full:px-[60px] desktop-full:py-[80px]">

          <div class="flex w-full flex-col gap-[18px] tablet-lg:w-[45%] tablet-lg:shrink-0">
            <div
              v-for="msg in messages"
              :key="msg.title"
              class="relative flex h-[100px] items-center overflow-hidden rounded-[12px] shadow-[0px_5px_14px_0px_rgba(26,31,51,0.07)]"
              :style="{ backgroundColor: msg.bg }"
            >
              <div
                class="absolute left-0 top-0 h-full w-1 rounded-r-[2px]"
                :style="{ backgroundColor: msg.accent }"
              />

              <div
                class="ml-5 flex size-12 shrink-0 items-center justify-center rounded-full"
                :style="{ backgroundColor: msg.iconBg }"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" :stroke="msg.color" stroke-width="1.6" />
                  <path d="M12 7V12L15 14" :stroke="msg.color" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div class="ml-3 flex min-w-0 flex-1 flex-col justify-center">
                <p class="text-[16px] font-semibold leading-tight text-[#1b1f2d]">{{ msg.title }}</p>
                <p class="mt-0.5 text-[12px] font-medium leading-tight" :style="{ color: msg.color }">{{ msg.subtitle }}</p>
                <p class="mt-0.5 text-[13px] leading-tight text-[#696984]">{{ msg.body }}</p>
              </div>

              <div class="ml-2 flex shrink-0 flex-col items-end justify-center gap-1.5 pr-4">
                <p class="text-[13px] whitespace-nowrap text-[#2e3347]">{{ msg.time }}</p>
                <div class="rounded-[14px] px-3 py-[5px]" :style="{ backgroundColor: msg.statusBg }">
                  <p class="text-[11px] font-medium whitespace-nowrap" :style="{ color: msg.color }">{{ msg.status }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-col items-start justify-center gap-6 tablet-lg:w-[55%] tablet-lg:py-[20px] desktop-full:py-0">
            <h2 class="font-semibold leading-[1.3]">
              Fale com o hóspede no<br />
              momento certo, <span class="text-brand">sem esforço</span>
            </h2>
            <p class="text-base leading-[1.5] text-ink-soft tablet-lg:text-[17px]">
              Configure lembretes de check-in, confirmações de reserva e pedidos de avaliação automaticamente, mantendo o hóspede informado sem depender de resposta manual da equipe.
            </p>

            <div class="flex flex-col gap-3">
              <div
                v-for="feature in features"
                :key="feature"
                class="flex items-start gap-3"
              >
                <img src="/icons/icone-check-verde-circulo.svg" alt="Ícone de confirmado" title="Ícone de confirmado" aria-hidden="true" class="mt-0.5 size-5 shrink-0" />
                <span class="text-base leading-[1.5] text-ink">{{ feature }}</span>
              </div>
            </div>

            <NuxtLink
              to="/testar-gratis/" :title="titleForLink('/testar-gratis/')" :aria-label="titleForLink('/testar-gratis/')"
              class="inline-flex h-[52px] items-center justify-center gap-3 rounded-[12px] bg-brand px-6 text-[15px] font-semibold text-white"
            >
              Testar grátis por 30 dias
              <img src="/icons/crm-temporada-cta-arrow.svg" alt="Seta do botão" title="Seta do botão" aria-hidden="true" class="size-[18px]" />
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
