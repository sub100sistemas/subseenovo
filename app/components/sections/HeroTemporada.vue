<script setup lang="ts">
const backgroundStyle = {
  backgroundImage:
    'radial-gradient(ellipse 900px 700px at 1327px 128px, rgba(255,255,255,0.55), rgba(255,255,255,0) 68%), ' +
    'linear-gradient(109.3deg, rgb(220,253,244) 1.99%, rgb(239,240,251) 62.6%, rgb(178,200,241) 103.35%)',
      maskImage: 'linear-gradient(to bottom, black 0%, black 0%, rgba(0,0,0,0.8) 10%, transparent 40%)',
      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 0%, rgba(0,0,0,0.8) 10%, transparent 40%)'
}

const featureItems = [
  'Cadastro personalizado de imóveis para locação por temporada;',
  'Cadastro de cômodos, mobiliário, equipamentos e utensílios;',
  'Emissão de contratos de locação por temporada e de curta duração;',
  'Controle de reservas e calendário de disponibilidade;',
  'Gestão financeira de recebimentos e repasses;',
  'Valores de diárias para períodos especiais do ano;',
  'Gestão do check-in e do check-out dos hóspedes;',
  'Controle de ordens de serviço para limpeza e diaristas.'
]
</script>

<template>
  <section id="imoveis-temporada" class="section-py relative">
    <div class="pointer-events-none absolute inset-0" :style="backgroundStyle" aria-hidden="true" />

    <div class="container-page relative">
      <div class="mx-auto max-w-[840px] text-center">
        <div class="inline-flex items-center gap-2 text-[12px] font-bold tracking-[1.44px] text-brand uppercase">
          <span class="size-2 shrink-0 rounded-full bg-teal shadow-[0_0_0_4px_rgba(28,217,164,0.36)]" aria-hidden="true" />
          Especialidade · Imóveis TEMPORADAS
        </div>

        <h2 class="mt-4">
          CRM Imobiliário para gestão de <span class="text-brand">temporada</span>
        </h2>

        <p class="mx-auto mt-4 max-w-[840px] text-[20px] leading-[1.4] font-bold text-ink">
          O CRM ideal para a gestão de locações por temporada e de curta duração.
        </p>
      </div>

      <div
        class="mt-10 grid grid-cols-1 items-start gap-10 tablet-lg:grid-cols-2 tablet-lg:gap-8 desktop:grid-cols-[657px_1fr] desktop:gap-[39px]"
      >
        <div>
          <p class="max-w-2xl text-[16px] leading-[1.6] text-ink">
            <strong class="font-bold">Da reserva ao check-out</strong>, gerencie anúncios
            personalizados, disponibilidade, atendimentos e toda a operação em uma plataforma
            desenvolvida para simplificar a gestão diária de
            <strong class="font-bold">locações por temporada</strong> e de
            <strong class="font-bold">curta duração</strong>.
          </p>

          <div class="mt-4 flex items-center gap-2">
            <h3 class="text-[20px] leading-[1.125] font-semibold text-ink">Principais funcionalidades:</h3>
            <img
              src="/icons/icone-h3-funcionalidades-temporada.svg"
              width="28"
              height="30"
              alt=""
              class="shrink-0"
              style="filter: drop-shadow(9px 0px 20px rgba(93, 95, 239, 0.6))"
            />
          </div>
          <FeatureList class="mt-3" :items="featureItems" />

          <div class="mt-8 flex flex-col gap-3 desktop-compact:flex-row desktop-compact:gap-4">
            <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
              Testar grátis por 30 dias
            </CtaButton>
            <CtaButton
              variant="outline"
              :icon="false"
              to="/modulos/temporada"
              class="whitespace-nowrap"
            >
              Conheça o módulo Temporadas
            </CtaButton>
          </div>
        </div>

        <div class="w-full max-w-[714px] desktop:w-[calc(100%+2rem)] desktop:max-w-none desktop:-mr-8 desktop-lg:w-[calc(100%+1.25rem)] desktop-lg:-mr-5">
          <NuxtPicture
            src="/images/hero-temporada/mockup-telas-imoveis-temporada.png"
            :img-attrs="{ class: 'block w-full h-auto' }"
            sizes="100vw tablet-lg:400px desktop-compact:460px desktop:714px"
            :width="714"
            :height="522"
            alt="Aplicativo SUBSEE on exibindo anúncio de apartamento para temporada em Canasvieiras com fotos, selo 'Sincronizado com 11 portais', card de leads da semana, calendário de disponibilidade e app mobile de reserva com valores de diária"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
