<script setup lang="ts">
const mockupImgAttrs = {
  alt: 'Mockup do site de imobiliária urbana mostrando a interface de busca com lançamentos em destaque',
  class: 'w-full rounded-[16px] tablet-lg:rounded-[24px]',
  loading: 'lazy' as const,
}
</script>

<template>
  <Technology
    section-id="site-urbano-showcase"
    mockup-src="/images/modulos-site-urbano/showcase-mockup-site-ideal.png"
    :mockup-width="1400"
    :mockup-height="800"
    mockup-sizes="mobile-lg:540px tablet:720px tablet-lg:960px desktop:1200px desktop-full:1400px"
    :mockup-img-attrs="mockupImgAttrs"
    curve-arrow-src="/icons/crm-hero-seta-curva-azul.svg"
    curve-arrow-class="pointer-events-none absolute hidden right-[18px] top-[12px] w-[130px] desktop-full:block"
  >
    <template #title>
      Sites desenvolvidos para impulsionar a captação e o fechamento de negócios da
      <span class="text-brand">sua imobiliária urbana</span>
    </template>

    <template #description>
      Anuncie imóveis residenciais e comerciais, casas, apartamentos, terrenos e lançamentos,
      com ferramentas para venda e locação em um único sistema.
    </template>

    <template #cta>
      <CtaButton href="/contato" variant="primary">
        Testar grátis por 30 dias
      </CtaButton>
    </template>
  </Technology>
</template>
