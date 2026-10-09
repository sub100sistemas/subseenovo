<script setup lang="ts">
const avatars = [
  { n: 5, alt: 'Cliente do SUBSEE on', marginLeft: 0 },
  { n: 4, alt: 'Cliente do SUBSEE on', marginLeft: -13.67 },
  { n: 3, alt: 'Cliente do SUBSEE on', marginLeft: -25.06 },
  { n: 2, alt: 'Cliente do SUBSEE on', marginLeft: -21.64 },
  { n: 1, alt: 'Cliente do SUBSEE on', marginLeft: -17.09 }
]

const backgroundStyle = {
  backgroundImage:
    'radial-gradient(ellipse 900px 700px at 1327px 128px, rgba(255,255,255,0.55), rgba(255,255,255,0) 68%), ' +
    'linear-gradient(109.3deg, rgb(220,253,244) 1.99%, rgb(239,240,251) 62.6%, rgb(178,200,241) 103.35%)',

  maskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.8) 80%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, rgba(0,0,0,0.8) 80%, transparent 100%)',
}

const bgVectors = [
  { left: 'calc(75% - 58.14px)', top: '209.7px', w: 617.671, h: 642.387, iw: 333.316, ih: 566.974, src: '/icons/hero-decorativo-vetor-52.svg' },
  { left: 'calc(75% - 90.05px)', top: '99.41px', w: 580.949, h: 538.163, iw: 452.104, ih: 348.36, src: '/icons/hero-decorativo-vetor-53.svg' },
  { left: 'calc(75% - 120.28px)', top: '-13.97px', w: 687.168, h: 615.04, iw: 579.936, ih: 351.792, src: '/icons/hero-decorativo-vetor-54.svg' }
]

const propertyIcons = [
  { left: '0%', top: '59.72%', shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.4))', src: '/icons/icone-imoveis-lancamentos.svg', inset: '18.23% 20.605%' },
  { left: '46.98%', top: '0%', shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.4))', src: '/icons/icone-imoveis-temporada.svg', inset: '18.23% 20.605%' },
  { left: '88.01%', top: '51.77%', shadow: 'drop-shadow(-10px 0px 20px rgba(93,95,239,0.4))', src: '/icons/icone-imoveis-rural.svg', inset: '18.23% 20.605%' },
  { left: '41.68%', top: '21.01%', shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.6))', src: '/icons/icone-imoveis-venda.svg', inset: '18.23% 20.605%' },
  { left: '2.53%', top: '3.11%', shadow: 'drop-shadow(0px 10px 20px rgba(93,95,239,0.4))', src: '/icons/icone-imoveis-locacao.svg', inset: '18.23% 20.605%' }
]
</script>

<template>
  <section id="hero-main" class="section-py relative overflow-hidden" :style="backgroundStyle">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        v-for="(v, i) in bgVectors"
        :key="'bgvec-' + i"
        class="absolute flex items-center justify-center"
        :style="{ left: v.left, top: v.top, width: v.w + 'px', height: v.h + 'px' }"
      >
        <div class="shrink-0" :style="{ width: v.iw + 'px', height: v.ih + 'px', transform: 'rotate(144.54deg) skewX(2.17deg)' }">
          <img :src="v.src" :width="v.iw" :height="v.ih" :alt="imageLabel(v.src)" :title="imageLabel(v.src)" class="block size-full max-w-none" />
        </div>
      </div>
    </div>

    <div class="container-page relative">
      <div
        class="grid grid-cols-1 items-center gap-8 tablet-lg:grid-cols-[400px_1fr] tablet-lg:gap-6 desktop-compact:grid-cols-[460px_1fr] desktop-compact:gap-8 desktop:grid-cols-[650px_1fr] desktop:gap-[47px]"
      >
        <div>
          <h1
            class="max-w-xl text-[22px] leading-[1.1] tablet:text-[25px] desktop-compact:text-[29px] desktop:text-[40px] desktop-full:text-[48px] tablet-lg:max-w-none"
          >
            O <span class="font-bold text-[#6769f0]">CRM Imobiliário</span> Completo para
            <span class="font-bold text-brand">Imobiliárias</span> e
            <span class="font-bold text-brand">Corretores</span>
          </h1>

          <p
            class="mt-4 max-w-xl text-[16px] font-bold leading-[1.4] text-ink tablet-lg:max-w-none tablet-lg:text-[18px] desktop-compact:text-[20px] desktop:text-[21px] desktop-full:text-[24px]"
          >
            CRM SUBSEE desenvolvido para corretores e imobiliárias urbanas e rurais
          </p>
          <p
            class="mt-3 max-w-xl text-[16px] leading-[1.6] text-ink-soft tablet-lg:max-w-none tablet-lg:text-[18px] desktop-compact:text-[20px] desktop:text-[21px] desktop-full:text-[24px]"
          >
            Com <strong class="font-bold text-brand">26 anos de experiência</strong> no mercado
            imobiliário, o SUBSEE combina maturidade, conhecimento e inovação para tornar o
            atendimento comercial da sua imobiliária mais moderno, integrado e eficiente.
          </p>

          <div
            class="mt-8 flex flex-col items-start gap-3 tablet:flex-row tablet:gap-4 tablet-lg:flex-col desktop:flex-row desktop:gap-[30px]"
          >
            <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
              Testar grátis por 30 dias
            </CtaButton>
            <CtaButton
              variant="outline"
              :icon="false"
              to="/assista-os-videos-do-subsee-on/"
              class="whitespace-nowrap"
            >
              Assista os vídeos do SUBSEE on
            </CtaButton>
          </div>

          <div class="mt-[41px] flex items-center gap-2">
            <img src="/icons/icone-selo-seguranca.svg" width="27" height="26" alt="Selo de segurança/confiança" title="Selo de segurança/confiança" class="shrink-0" />
            <p class="font-accent text-[18px] font-light tracking-[0.828px] text-ink-soft leading-[1.49]">
              A confiança de
              <span class="relative inline-block px-3 py-0.5 font-semibold">
                <img
                  src="/icons/hero-destaque-confianca-contorno.svg"
                  alt="Contorno decorativo do selo de confiança" title="Contorno decorativo do selo de confiança"
                  aria-hidden="true"
                  class="pointer-events-none absolute inset-0 z-0 size-full"
                />
                <span class="relative z-10">mais de 4 mil</span>
              </span>
              corretores e imobiliárias
            </p>
          </div>

          <div class="mt-[17px] flex items-center">
            <NuxtPicture
              v-for="a in avatars"
              :key="a.n"
              :src="`/images/hero-main/avatar-cliente-${a.n}.png`"
              :width="58"
              :height="56"
              format="avif"
              sizes="58px"
              :alt="a.alt || imageLabel(`/images/hero-main/avatar-cliente-${a.n}.png`)"
              :img-attrs="{ class: 'block h-[56px] w-[58px] rounded-full object-cover', title: a.alt || imageLabel(`/images/hero-main/avatar-cliente-${a.n}.png`) }"
              :style="{ marginLeft: `${a.marginLeft}px` }"
              loading="lazy"
            />
          </div>

          <div class="mt-[41px] flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <span class="inline-flex items-center gap-2">
              <span class="relative inline-block size-[18px] shrink-0">
                <img src="/icons/icone-mais-vendas-1.svg" alt="Ícone de mais vendas" title="Ícone de mais vendas" class="absolute left-1/2 top-[8.33%] bottom-[8.33%]" />
                <img src="/icons/icone-mais-vendas-2.svg" alt="Ícone de mais vendas" title="Ícone de mais vendas" class="absolute left-1/4 right-1/4 top-[20.83%] bottom-[20.83%]" />
              </span>
              Mais eficiência · Menos custo
            </span>
            <span class="hidden tablet:inline text-[#d1d5db]">|</span>
            <span class="inline-flex items-center gap-2">
              <span class="relative inline-block size-[18px] shrink-0">
                <img src="/icons/icone-mais-eficiencia-1.svg" alt="Ícone de mais eficiência" title="Ícone de mais eficiência" class="absolute left-[8.33%] right-[8.33%] top-[29.17%] bottom-[29.17%]" />
                <img src="/icons/icone-mais-eficiencia-2.svg" alt="Ícone de mais eficiência" title="Ícone de mais eficiência" class="absolute left-[66.67%] right-[8.33%] top-[29.17%] bottom-[45.83%]" />
              </span>
              Mais vendas · Ciclo mais rápido
            </span>
          </div>
        </div>

        <div class="relative w-full mt-8 md:mt-8 lg:mt-0">
          <NuxtPicture
            src="/images/hero-main/celulares-subsee-composicao.png"
            :img-attrs="{ class: 'block w-full h-auto', title: 'Aplicativo SUBSEE on em dois celulares' }"
            sizes="100vw mobile-lg:490px tablet:650px tablet-lg:400px desktop-compact:460px desktop:660px"
            :width="711"
            :height="794"
            alt="Aplicativo SUBSEE on em dois celulares"
            loading="eager"
          />

          <div
            v-for="(ic, i) in propertyIcons"
            :key="'icon-' + i"
            class="absolute aspect-[57/61] w-[8.023%] rounded-[4px] bg-brand"
            :style="{ left: ic.left, top: ic.top, filter: ic.shadow }"
          >
            <div class="absolute" :style="{ inset: ic.inset }">
              <img :src="ic.src" :alt="imageLabel(ic.src)" :title="imageLabel(ic.src)" class="block size-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative h-[72px] w-full overflow-hidden tablet:h-[110px] desktop:h-[144px] mb-50" aria-hidden="true">
    <img
      src="/icons/divider-onda-decorativa.svg"
      width="1918"
      height="147"
      alt="Onda decorativa" title="Onda decorativa"
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>


  </section>
</template>
