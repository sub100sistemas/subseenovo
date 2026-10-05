<script setup lang="ts">
interface Product {
  logo: string
  logoWidth: number
  logoHeight: number
  logoAlt: string
  badge: string
  title: string
  description: string
  cta: string
  href: string
  external?: boolean
}

const products: Product[] = [
  {
    logo: '/icons/logo-sub100-imoveis-produto.svg',
    logoWidth: 120,
    logoHeight: 138,
    logoAlt: 'SUB100 Imóveis',
    badge: 'SUB100 Imóveis',
    title: 'Anuncie seus imóveis e empreendimentos em um dos maiores portais do Brasil',
    description:
      'Anuncie seus Lançamentos, Imóveis de Venda, Locação, Imóveis Rurais e Temporada em um portal com mais de 26 anos de experiência',
    cta: 'Conhecer o SUB100 Imóveis',
    href: 'https://sub100.com.br/',
    external: true
  },
  {
    logo: '/icons/logo-sgl-produto.svg',
    logoWidth: 158,
    logoHeight: 160,
    logoAlt: 'Sistema SGL',
    badge: 'SUB100 Loteadoras e Incorporadas',
    title: 'Simulador de vendas, mapa interativo, financeiro completo e portal do cliente',
    description:
      'O ERP para loteadoras e incorporadas, o SGL é um sistema de gestão fácil que se integra aos seus processos',
    cta: 'Conhecer o SGL',
    href: 'https://sistemasgl.com.br/',
    external: true
  }
]
</script>

<template>
  <section id="outros-produtos" class="section-py relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[206px]" aria-hidden="true">
      <img loading="lazy" decoding="async"
        src="/icons/hero-outros-produtos-onda-decorativa-branca.svg"
        width="1920"
        height="175"
        alt="Onda decorativa branca" title="Onda decorativa branca"
        class="absolute -left-px top-[21.19px] w-[1920.36px] h-[175.453px] rotate-180 max-w-none"
      />
      <img loading="lazy" decoding="async"
        src="/icons/hero-website-onda-decorativa-azul.svg"
        width="1920"
        height="191"
        alt="Onda decorativa azul" title="Onda decorativa azul"
        class="absolute -left-[0.95px] top-0 w-[1919.95px] h-[190.853px] rotate-180 max-w-none"
      />
    </div>

    <div class="container-page relative">
      <div class="mx-auto max-w-[1144px] text-center">
        <SectionTag label="Especialidade · outros produtos" />
        <h2 class="mt-4">
          Anuncie em um dos maiores portais de <span class="text-brand">imóveis</span> do Brasil e
          conheça o melhor sistema para gestão de <span class="text-brand">loteamentos</span>
        </h2>
      </div>

      <div
        class="mt-10 grid grid-cols-1 gap-8 tablet:grid-cols-2 tablet:gap-x-8 desktop-full:grid-cols-[610px_610px] desktop-full:justify-center desktop-full:gap-x-[63px]"
      >
        <div
          v-for="product in products"
          :key="product.badge"
          class="flex flex-col items-center gap-8 border border-[#dee2e6] p-9 text-center desktop-full:h-[330px] desktop-full:w-[610px] desktop-full:flex-row desktop-full:items-center desktop-full:p-9 desktop-full:text-left"
        >
          <img loading="lazy" decoding="async"
            :src="product.logo"
            :width="product.logoWidth"
            :height="product.logoHeight"
            :alt="product.logoAlt || imageLabel(product.logo)" :title="product.logoAlt || imageLabel(product.logo)"
            class="order-first h-auto w-20 shrink-0 tablet:w-24 desktop-full:order-last desktop-full:w-[var(--logo-w)]"
            :style="{ '--logo-w': product.logoWidth + 'px' }"
          />

          <div class="flex-1">
            <p class="text-sm text-[#999999]">{{ product.badge }}</p>
            <h3 class="mt-2 text-xl leading-[1.25] font-bold text-brand">{{ product.title }}</h3>
            <p class="mt-4 text-base leading-[1.5] text-ink">{{ product.description }}</p>

            <component
              :is="product.external ? 'a' : 'NuxtLink'"
              :href="product.external ? product.href : undefined"
              :to="product.external ? undefined : product.href"
              :title="titleForLink(product.href)" :aria-label="titleForLink(product.href)"
              v-bind="product.external ? { target: '_blank', rel: 'noopener' } : {}"
              class="mx-auto mt-6 inline-flex h-14 w-[180px] items-center justify-center gap-1.5 rounded-xl border border-teal-link text-teal-link transition-colors hover:bg-teal-link/5 desktop-full:mx-0"
            >
              <span class="text-base">{{ product.cta }}</span>
              <span class="text-[19px] font-bold" aria-hidden="true">→</span>
            </component>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
