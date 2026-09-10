<script setup lang="ts">
const features = [
  'Experiência mais profissional em cada etapa da jornada do hóspede',
  'Equipe com menos tarefas repetitivas e mais tempo para o essencial',
  'Comunicação padronizada e consistente em todos os canais'
]
</script>

<template>
  <section id="crm-temporada-messaging" class="section-py">
    <div class="mx-auto w-full max-w-[1400px] px-4 mobile-lg:px-6 tablet:px-8 desktop-full:px-0">
      <div class="overflow-hidden rounded-[28px] bg-[#F5F5F5] tablet-lg:rounded-[40px]">
        <div class="flex flex-col items-center gap-8 px-6 py-10 tablet-lg:flex-row tablet-lg:items-stretch tablet-lg:gap-0 tablet-lg:px-0 tablet-lg:py-0">
          <div class="flex w-full items-center justify-center tablet-lg:w-[50%] tablet-lg:shrink-0">
            <NuxtImg
              src="/images/modulos-crm-temporada/automated-messaging-card.png"
              :width="370"
              :height="316"
              sizes="mobile-lg:370px tablet-lg:370px"
              alt="Card mostrando mensagens automáticas configuradas: confirmação de reserva, lembrete de check-in, boas-vindas na chegada e pedido de avaliação"
              class="block h-auto w-full max-w-[400px] rounded-[12px] shadow-[0px_2px_20px_rgba(0,0,0,0.08)] tablet-lg:max-w-none"
              loading="lazy"
            />
          </div>

          <div class="flex w-full flex-col items-start justify-center gap-6 tablet-lg:w-[50%] tablet-lg:px-10 tablet-lg:py-[60px] desktop-full:px-16">
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
                <img src="/icons/icone-check-verde-circulo.svg" alt="" aria-hidden="true" class="mt-0.5 size-5 shrink-0" />
                <span class="text-base leading-[1.5] text-ink">{{ feature }}</span>
              </div>
            </div>

            <NuxtLink
              to="/testar-gratis"
              class="inline-flex h-[52px] items-center justify-center gap-3 rounded-[12px] bg-brand px-6 text-[15px] font-semibold text-white"
            >
              Testar grátis por 30 dias
              <img src="/icons/crm-temporada-cta-arrow.svg" alt="" aria-hidden="true" class="size-[18px]" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
