<script setup lang="ts">
interface Attribute {
  label: string
  icon: string
}

const attributes: Attribute[] = [
  { label: 'Dormitórios', icon: '/icons/site-urbano-ps-dormitorios.svg' },
  { label: 'Banheiros', icon: '/icons/site-urbano-ps-banheiros.svg' },
  { label: 'Garagem de vaga', icon: '/icons/site-urbano-ps-garagem.svg' },
  { label: 'Área privativa', icon: '/icons/site-urbano-ps-area-privativa.svg' },
  { label: 'Área Total', icon: '/icons/site-urbano-ps-area-total.svg' },
  { label: 'Face do imóvel', icon: '/icons/site-urbano-ps-face-imovel.svg' },
  { label: 'Posição na quadra', icon: '/icons/site-urbano-ps-posicao-quadra.svg' },
  { label: 'Visto', icon: '/icons/site-urbano-ps-visto.svg' },
  { label: 'Torres', icon: '/icons/site-urbano-ps-torres.svg' },
  { label: 'Andares', icon: '/icons/site-urbano-ps-andares.svg' },
  { label: 'Unidades', icon: '/icons/site-urbano-ps-unidades.svg' },
  { label: 'Pavimentos', icon: '/icons/site-urbano-ps-pavimentos.svg' },
  { label: 'Ano de construção', icon: '/icons/site-urbano-ps-ano-construcao.svg' },
  { label: 'Área do terreno', icon: '/icons/site-urbano-ps-area-terreno.svg' },
  { label: 'Ambientes', icon: '/icons/site-urbano-ps-ambientes.svg' },
]
</script>

<template>
  <section id="site-urbano-ficha-tecnica" class="section-py">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:justify-between">
        <div class="w-full tablet-lg:w-[28%]">
          <NuxtImg
            src="/images/modulos-site-urbano/property-sheet-mockup-phone.png"
            :width="378"
            :height="641"
            sizes="mobile-lg:320px tablet-lg:260px desktop:340px desktop-full:370px desktop-lg:420px"
            alt="Mockup de celular mostrando a ficha técnica detalhada de um imóvel urbano"
            class="mx-auto h-auto w-full max-w-[360px]"
            loading="lazy"
          />
        </div>

        <div class="flex w-full flex-col gap-6 tablet-lg:w-[64%]">
          <div>
            <h2 class="leading-[1.2]">
              A tecnologia que entende o ritmo da cidade.
            </h2>
            <p class="mt-4 text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
              Apresente cada imóvel com fichas completas e padronizadas,
              do primeiro contato à assinatura do contrato de venda ou locação.
            </p>
          </div>

          <div>
            <p class="text-[16px] font-normal text-ink desktop-full:text-[20px]">
              Legenda dos detalhes do imóvel
            </p>
            <div class="mt-3 grid grid-cols-2 gap-[10px] tablet-lg:grid-cols-3 tablet-lg:gap-x-[14px] tablet-lg:gap-y-[23px]">
              <div
                v-for="attr in attributes"
                :key="attr.label"
                class="flex h-[49px] items-center gap-3 rounded-[10px] border border-[#ddd] bg-white px-3"
              >
                <img
                  :src="attr.icon"
                  :alt="attr.label"
                  aria-hidden="true"
                  class="size-6 shrink-0 object-contain"
                />
                <span class="text-[12px] font-normal leading-tight text-ink tablet-lg:text-[14px] desktop-full:text-[16px]">{{ attr.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
