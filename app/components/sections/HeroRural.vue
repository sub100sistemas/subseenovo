<script setup lang="ts">
const featureItems = [
  'Cadastro de atributos e delimitações por meio de arquivos KML;',
  'Publicação internacional de imóveis rurais;',
  'Informações detalhadas sobre venda e arrendamento;',
  'Cadastro da área em hectares, com valor unitário e valor total;',
  'Anexação de matrícula, CAR e laudos de avaliação;',
  'Filtros específicos para pesquisa de imóveis rurais.'
]
</script>

<template>
  <section id="imoveis-rurais" class="section-py relative">
    <div class="container-page relative">
      <div
        class="grid grid-cols-1 items-start gap-10 tablet-lg:grid-cols-2 tablet-lg:gap-8 desktop:grid-cols-[1fr_656px] desktop:gap-[88px]"
      >
        <div class="tablet-lg:order-2">
          <div class="inline-flex items-center gap-2 text-[12px] font-bold tracking-[1.44px] text-brand uppercase">
            <span class="size-2 shrink-0 rounded-full bg-teal shadow-[0_0_0_4px_rgba(28,217,164,0.36)]" aria-hidden="true" />
            Especialidade · Imóveis RURAIS & agro
          </div>

          <h2 class="mt-4">
            CRM Imobiliário para corretores e <span class="text-brand">imobiliárias rurais</span>
          </h2>

          <p class="mt-4 max-w-2xl text-[20px] leading-[1.4] font-bold text-ink">
            Inteligência comercial para anunciar e vender fazendas e propriedades rurais.
          </p>

          <p class="mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink">
            <strong class="font-bold">Venda</strong> ou <strong class="font-bold">arrendamento</strong>,
            georreferenciamento, cultivo predominante, bioma, altitude média, características do solo,
            teor de argila, pluviometria, período de chuvas, disponibilidade hídrica e logística: todas
            as informações essenciais para destacar seu anúncio de
            <strong class="font-bold">imóvel rural</strong>.
          </p>

          <div class="mt-4 flex items-center gap-2">
            <h3 class="text-[20px] leading-[1.125] font-semibold text-ink">Principais funcionalidades:</h3>
            <img loading="lazy" decoding="async"
              src="/icons/icone-h3-funcionalidades-rurais.svg"
              width="28"
              height="30"
              alt=""
              class="shrink-0 drop-shadow-[9px_0px_20px_rgba(93,95,239,0.6)]"
            />
          </div>
          <FeatureList class="mt-3" :items="featureItems" />

          <div class="mt-8 flex flex-col gap-3 desktop-compact:flex-row desktop-compact:gap-4">
            <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
              Testar grátis por 30 dias
            </CtaButton>
            <CtaButton
              variant="outline"
              :icon="false"
              to="/modulos/crm-imobiliario-rural/"
              class="whitespace-nowrap"
            >
              Conheça o módulo Rurais
            </CtaButton>
          </div>
        </div>

        <div class="w-full max-w-[652px] desktop:w-[calc(100%+2rem)] desktop:max-w-none desktop:-ml-8 desktop-lg:w-[calc(100%+1.25rem)] desktop-lg:-ml-5 mt-10">
          <NuxtPicture
            src="/images/hero-rural/mockup-telas-imoveis-rurais.png"
            :img-attrs="{ class: 'block w-full h-auto' }"
            sizes="100vw tablet-lg:400px desktop-compact:460px desktop:652px"
            :quality="60"
            :width="665"
            :height="663"
            alt="Fazenda e mapa no aplicativo SUBSEE"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
