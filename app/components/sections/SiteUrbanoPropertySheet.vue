<script setup lang="ts">
const attributes = [
  'Dormitórios',
  'Banheiros',
  'Garagem de vaga',
  'Área privativa',
  'Área Total',
  'Face do imóvel',
  'Posição na quadra',
  'Visto',
  'Torres',
  'Andares',
  'Unidades',
  'Pavimentos',
  'Ano de construção',
  'Área do terreno',
  'Ambientes'
]
</script>

<template>
  <section id="site-urbano-ficha-tecnica" class="section-py">
    <div class="container-page">
      <div
        class="overflow-hidden rounded-[30px] bg-[linear-gradient(76.19deg,_#e6faf1_5.56%,_#ecf8f9_30.92%,_#eff2fa_76.37%,_#c5dcf0_98.37%)] px-6 py-10 tablet:px-10 tablet:py-14 tablet-lg:rounded-[50px] desktop-full:px-[65px] desktop-full:py-[85px]"
      >
        <div
          class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[3.15%]"
        >
          <div class="w-full tablet-lg:w-[52.26%]">
            <NuxtImg
              src="/images/modulos-site-urbano/property-sheet-mockup-phone.png"
              :width="660"
              :height="900"
              sizes="mobile-lg:100vw tablet-lg:440px desktop:580px desktop-full:660px"
              alt="Mockup de celular mostrando a ficha técnica detalhada de um imóvel urbano com atributos e localização"
              class="mx-auto h-auto w-full max-w-[440px]"
              loading="lazy"
            />
          </div>

          <div class="flex w-full flex-col gap-6 tablet-lg:w-[43.39%]">
            <div>
              <h2 class="leading-[1.2]">
                Ficha técnica completa para cada tipo de imóvel
              </h2>
              <p class="mt-4 text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
                Apresente cada imóvel com fichas completas e padronizadas,
                do primeiro contato à assinatura do contrato de venda ou locação.
              </p>
            </div>

            <div>
              <p class="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                Legenda dos detalhes do imóvel
              </p>
              <div class="mt-3 grid grid-cols-3 gap-x-3 gap-y-2">
                <span
                  v-for="attr in attributes"
                  :key="attr"
                  class="rounded-[6px] bg-white px-2 py-1.5 text-center text-[12px] font-medium leading-tight text-ink shadow-[0px_1px_4px_rgba(0,0,0,0.08)]"
                >
                  {{ attr }}
                </span>
              </div>
            </div>

            <div class="flex">
              <CtaButton href="/contato" variant="primary">
                Agendar Demonstração
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
