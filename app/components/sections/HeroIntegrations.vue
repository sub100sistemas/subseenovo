<script setup lang="ts">
import diagramaIntegracoes from '~/assets/images/hero-integrations/diagrama-integracoes.svg?raw'

const segments = [
  { icon: '/images/hero-integrations/icone-imobiliarias-corretores.png', label: 'Imobiliárias e Corretores' },
  { icon: '/images/hero-integrations/icone-agrocorretores.png', label: 'Agrocorretores' },
  { icon: '/images/hero-integrations/icone-loteadoras.png', label: 'Loteadoras' },
  { icon: '/images/hero-integrations/icone-incorporadoras.png', label: 'Incorporadoras' }
]

const diagramViewBox = { width: 1017, height: 305 }

const percent = (value: number, total: number) => `${Number(((value / total) * 100).toFixed(4))}%`

const diagramIcons = [
  { src: segments[0].icon, x: 33.992, y: 34.685, size: 31.356 },
  { src: segments[1].icon, x: 33.992, y: 103.661, size: 31.36 },
  { src: segments[2].icon, x: 33.992, y: 172.641, size: 31.356 },
  { src: segments[3].icon, x: 36.992, y: 244.297, size: 26 }
].map((icon) => ({
  src: icon.src,
  style: {
    left: percent(icon.x, diagramViewBox.width),
    top: percent(icon.y, diagramViewBox.height),
    width: percent(icon.size, diagramViewBox.width),
    height: percent(icon.size, diagramViewBox.height)
  }
}))

const integrationLines = [
  { label: 'Integrações com dezenas de Portais', color: '#5D5FEF' },
  { label: 'Integrações com Redes de Parcerias', color: '#1CD9A4' },
  { label: 'Integrações MCP e APIs', color: '#FF9900' }
]

const badges = [
  { src: '/icons/logo-zap.svg', alt: 'Logo Zap Imóveis', x: 90.98, y: 5.3 },
  { src: '/icons/logo-meta.svg', alt: 'Logo Meta', x: 87.97, y: 28.62 },
  { src: '/icons/logo-imovelweb.svg', alt: 'Ícone do portal Imovelweb', x: 90.7, y: 64.4 },
  { src: '/icons/logo-123i.svg', alt: 'Logo do portal 123i', x: 4.28, y: 72.49, hideOnMobile: true },
  { src: '/icons/logo-sub100.svg', alt: 'Logo Portal SUB100', x: 4.89, y: 21.86 },
  { src: '/icons/logo-whatsapp.svg', alt: 'Logo WhatsApp', x: 6.64, y: 45.46 },
  { src: '/icons/icone-chave-api.svg', alt: 'Ícone de chave/API', x: 35.55, y: 40.82 },
  { src: '/icons/icone-ai.svg', alt: 'Ícone de inteligência artificial', x: 44.11, y: 66.94 },
  { src: '/icons/icone-sincronizacao.svg', alt: 'Ícone de sincronização automática', x: 79.62, y: 84.27 }
]
</script>

<template>
  <section id="integracoes" class="section-py">
    <div class="container-page">
      <div
        class="hero-integrations-canvas relative overflow-hidden rounded-[40px] bg-[#F2F1F8] px-6 py-14 tablet-lg:aspect-[1401/844] tablet-lg:px-0 tablet-lg:py-0"
      >
        <div
          class="pointer-events-none absolute -left-[12.32%] -top-[4.4%] w-[36.97%] aspect-square rounded-full border border-teal opacity-40"
          aria-hidden="true"
        />

        <div class="relative mx-auto max-w-[700px] text-center tablet-lg:absolute tablet-lg:left-1/2 tablet-lg:top-[13.78%] tablet-lg:w-[68.24%] tablet-lg:max-w-none tablet-lg:-translate-x-1/2">
          <h2>
            O CRM SUBSEE <span class="text-[#e72f4d]">on</span> integra-se às principais ferramentas e
            tecnologias do mercado
          </h2>

          <p class="mx-auto mt-4 max-w-2xl text-[20px] leading-[1.6] text-ink">
            Integre o <strong class="font-bold">CRM</strong> aos principais sistemas, plataformas e
            soluções de inteligência artificial que <strong class="font-bold">sua empresa</strong> já
            utiliza. Centralize informações, automatize processos e aumente a produtividade da
            <strong class="font-bold">sua operação</strong>.
          </p>
        </div>

        <div
          class="hero-integrations-diagram relative mx-auto mt-10 hidden max-w-[640px] tablet-lg:absolute tablet-lg:left-[15.4%] tablet-lg:top-[41.09%] tablet-lg:mt-0 tablet-lg:block tablet-lg:w-[72.59%] tablet-lg:max-w-none"
          role="img"
          aria-label="Diagrama mostrando o CRM SUBSEE on conectado a Imobiliárias e Corretores, Agrocorretores, Loteadoras e Incorporadoras, com integrações para dezenas de portais, redes de parcerias e MCP/APIs"
        >
          <div v-html="diagramaIntegracoes" />
          <img
            v-for="icon in diagramIcons"
            :key="icon.src"
            loading="lazy"
            decoding="async"
            :src="icon.src"
            width="82"
            height="82"
            :alt="imageLabel(icon.src)" :title="imageLabel(icon.src)"
            class="absolute"
            :style="icon.style"
          />
        </div>

        <div class="relative mx-auto mt-10 max-w-[420px] tablet-lg:hidden">
          <div class="overflow-hidden rounded-2xl border border-[#D9DEE8] bg-white">
            <div class="grid grid-cols-2">
              <div
                v-for="(segment, i) in segments"
                :key="segment.label"
                class="flex flex-col items-center justify-center gap-2 px-3 py-5 text-center"
                :class="[i % 2 === 0 ? 'border-r border-[#D9DEE8]' : '', i < 2 ? 'border-b border-[#D9DEE8]' : '']"
              >
                <img loading="lazy" decoding="async" :src="segment.icon" width="82" height="82" :alt="imageLabel(segment.icon)" :title="imageLabel(segment.icon)" class="size-10 shrink-0" />
                <span class="text-sm text-ink">{{ segment.label }}</span>
              </div>
            </div>
          </div>

          <div class="relative mx-auto h-6 w-px bg-[#D9DEE8]" aria-hidden="true">
            <span class="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-teal" />
            <span class="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-teal" />
          </div>

          <div class="mx-auto flex w-fit items-center justify-center rounded-2xl border border-[#D9DEE8] bg-white px-8 py-4">
            <img loading="lazy" decoding="async" src="/icons/logo-subsee-on.svg" width="184" height="40" alt="SUBSEE on" title="SUBSEE on" class="h-8 w-auto" />
          </div>

          <div class="relative mx-auto h-6 w-px bg-[#D9DEE8]" aria-hidden="true">
            <span class="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-teal" />
            <span class="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-teal" />
          </div>

          <div class="overflow-hidden rounded-2xl border border-[#D9DEE8] bg-white">
            <div
              v-for="(line, i) in integrationLines"
              :key="line.label"
              class="flex items-center justify-between gap-3 px-4 py-4"
              :class="i > 0 ? 'border-t border-[#D9DEE8]' : ''"
            >
              <span class="text-sm text-ink">{{ line.label }}</span>
              <span class="size-3 shrink-0 rounded-full border-2" :style="{ borderColor: line.color }" />
            </div>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4 tablet-lg:contents">
          <div
            v-for="badge in badges"
            :key="badge.src"
            class="hero-integrations-badge size-14 shrink-0"
            :class="badge.hideOnMobile ? 'hidden tablet-lg:block' : ''"
            :style="{ '--badge-x': badge.x + '%', '--badge-y': badge.y + '%' }"
          >
            <img loading="lazy" decoding="async" :src="badge.src" width="98" height="98" :alt="badge.alt || imageLabel(badge.src)" :title="badge.alt || imageLabel(badge.src)" class="block size-full" />
          </div>
        </div>

        <div
          class="relative mt-10 flex flex-col items-center justify-center gap-3 tablet:flex-row tablet-lg:absolute tablet-lg:left-[15.9%] tablet-lg:top-[83.98%] tablet-lg:mt-0 tablet-lg:items-start tablet-lg:justify-start"
        >
          <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">Testar grátis por 30 dias</CtaButton>
          <CtaButton variant="outline" :icon="false" to="/modulos/apis-hub-integrador/" class="whitespace-nowrap">
            Conheça APIs & HUB Integrador
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>

<style scoped>
.hero-integrations-diagram :deep(svg) {
  display: block;
  width: 100%;
  height: auto;
}

@media (min-width: 62rem) {
  .hero-integrations-badge {
    position: absolute;
    left: var(--badge-x);
    top: var(--badge-y);
    width: 6.93%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
}
</style>
