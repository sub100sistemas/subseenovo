<script setup lang="ts">
const featureItems = [
  'CRM com funil Kanban integrado ao plugin do WhatsApp;',
  'Gestão de metas e acompanhamento do funil de vendas;',
  'Distribuição automatizada de leads por roleta de atendimento;',
  'Controle de empréstimo de chaves com registro de feedback;',
  'Integração com portais imobiliários e redes sociais.',
  'Cadastro e divulgação internacional de imóveis;',
  'Gestão de propostas e análise de locação;',
  'Agenda integrada ao Google Calendar;',
  'Integração nativa com o WhatsApp;',
  'CRM com automação com AI.'
]

</script>

<template>
  <section
    id="imoveis-urbanos"
    class="section-py relative mt-[-250px] tablet:mt-[-250px]"
  >
    <div class="container-page relative">
      <div class="mx-auto max-w-[1017px] text-center">
        <div class="inline-flex items-center gap-2 text-[12px] font-bold tracking-[1.44px] text-brand uppercase">
          <span class="size-2 shrink-0 rounded-full bg-teal shadow-[0_0_0_4px_rgba(28,217,164,0.36)]" aria-hidden="true" />
          Especialidade · Imóveis Urbanos
        </div>

        <h2 class="mt-4">
          CRM para imobiliárias e corretores de <span class="text-brand">imóveis urbanos</span>
        </h2>

        <p class="mx-auto mt-4 max-w-[934px] text-[20px] leading-[1.4] font-bold text-ink">
          A alta concorrência do mercado urbano exige um CRM que acompanhe o ritmo da cidade.
        </p>
      </div>

      <div
        class="mt-10 grid grid-cols-1 items-start gap-10 tablet-lg:grid-cols-2 tablet-lg:gap-8 desktop:grid-cols-[650px_1fr] desktop:gap-[38px]"
      >
        <div>
          <p class="max-w-2xl text-[16px] leading-[1.6] text-ink-soft">
            <strong class="font-bold text-ink">Lançamentos, vendas</strong> e
            <strong class="font-bold text-ink">locações</strong> em um CRM imobiliário moderno,
            completo e fácil de usar. Gestão de leads, roleta de atendimento, funil de vendas,
            integração com portais e atendimento centralizado em uma única plataforma,
            desenvolvida para a operação diária de
            <strong class="font-bold text-ink">imobiliárias urbanas</strong> de alta performance.
          </p>

          <h3 class="mt-4 text-[20px] leading-[1.125] font-semibold text-ink">Principais funcionalidades:</h3>
          <FeatureList class="mt-3" :items="featureItems" />

          <div class="mt-8 flex flex-col gap-3 tablet:flex-row tablet:gap-4">
             <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
              Testar grátis por 30 dias
            </CtaButton>
            <CtaButton
              variant="outline"
              :icon="false"
              to="/modulos/crm-imobiliario-urbano/"
              class="whitespace-nowrap"
            >
              Conheça o módulo Urbanos
            </CtaButton>
          </div>
        </div>

        <div class="w-full max-w-[692px] desktop:w-[calc(100%+2rem)] desktop:max-w-none desktop:-mr-8 desktop-lg:w-[calc(100%+1.25rem)] desktop-lg:-mr-5">
          <NuxtPicture
            src="/images/hero-urbano/imoveis-urbanos-composicao.png"
            :img-attrs="{ class: 'block w-full h-auto' }"
            sizes="100vw tablet-lg:400px desktop-compact:460px desktop:700px"
            :quality="65"
            :width="708"
            :height="631"
            alt="Imóveis urbanos no aplicativo SUBSEE"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
