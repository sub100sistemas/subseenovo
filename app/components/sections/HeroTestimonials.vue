<script setup lang="ts">
const testimonials = [
  {
    quote:
      'Há quase 20 anos nossa imobiliária trabalha com o CRM SUBSEE. Essa trajetória foi construída com confiança, proximidade e troca constante de experiências. Ao longo dos anos, o sistema e o site acompanharam a evolução dos nossos processos e continuam contribuindo diariamente para tornar nossa operação mais organizada, eficiente e preparada para crescer.',
    logo: { src: '/icons/logo-soma-imoveis.svg', width: 91.5, height: 55, alt: 'Logo Soma Imóveis' },
    name: 'João Calçada',
    role: 'Gerente de Locação',
    company: 'Imobiliária Soma'
  },
  {
    quote:
      'Minha relação com a SUB100 começou há muitos anos, ainda como corretor. Quando abri minha própria imobiliária, escolher o CRM SUBSEE foi uma consequência natural dessa confiança. Hoje, como empresário, sigo contando com uma parceria tecnológica capaz de acompanhar nosso crescimento e atender às novas necessidades que surgem com a expansão da empresa.',
    logo: { src: '/icons/logo-carmona-imoveis.svg', width: 210, height: 46.6, alt: 'Logo Carmona Imóveis' },
    name: 'Marcio Carmona',
    role: 'Diretor',
    company: 'Carmona Imóveis'
  },
  {
    quote:
      'A Benedini Fazendas buscava um CRM que realmente entendesse as particularidades do agronegócio. Com o SUBSEE, encontramos abertura para construir soluções em conjunto e adaptar processos à nossa realidade. Essa parceria tem sido importante para nossa atuação na intermediação de fazendas no Brasil e no Uruguai.',
    logo: { src: '/icons/logo-benedini-fazendas.svg', width: 151, height: 65, alt: 'Logo Benedini Fazendas' },
    name: 'Henrique Benedini',
    role: 'Diretor',
    company: 'Benedini Fazendas'
  }
]
</script>

<template>
  <section id="depoimentos" class="section-py relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(219,234,254,0.6),white_76.442%)]">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-auto w-full" aria-hidden="true">
      <img src="/icons/hero-depoimentos-onda-decorativa.svg" alt="" class="block h-auto w-full max-w-none" />
    </div>

    <div class="container-page relative">
      <div class="mx-auto max-w-[800px] text-center">
        <SectionTag label="Especialidade · DEPOIMENTOS" />
        <h2 class="mt-4">
          O que <span class="text-brand">nossos clientes</span> falam dos nossos produtos e serviços
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-8 tablet-lg:grid-cols-3 tablet-lg:gap-[60px]">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="relative flex flex-col items-center gap-[30px] overflow-hidden rounded-2xl bg-white p-10 shadow-[0px_2px_40px_-6px_rgba(103,105,240,0.1)]"
        >
          <img
            src="/icons/icone-estrelas-avaliacao.svg"
            width="161"
            height="27"
            alt="Avaliação 5 estrelas"
            class="shrink-0"
          />

          <blockquote class="flex-1 text-center text-base leading-[1.5] text-ink">
            {{ testimonial.quote }}
          </blockquote>

          <img
            src="/icons/aspas-abertura.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute -left-[14px] bottom-[146px] w-[93px]"
          />
          <img
            src="/icons/aspas-fechamento.svg"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute -left-[14px] bottom-[71px] w-[93px]"
          />

          <div class="flex w-full flex-col items-center">
            <div class="flex h-[65px] w-full items-center justify-center">
              <img
                :src="testimonial.logo.src"
                :width="testimonial.logo.width"
                :height="testimonial.logo.height"
                :alt="testimonial.logo.alt"
                class="h-auto max-h-full w-auto"
              />
            </div>

            <p class="mt-[21px] text-[17.6px] leading-none font-bold text-brand">{{ testimonial.name }}</p>
            <p class="mt-1 text-sm leading-[17.5px] text-ink">{{ testimonial.role }}</p>
            <p class="mt-1 text-sm leading-[17.5px] text-ink">{{ testimonial.company }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
