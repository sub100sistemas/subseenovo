<script setup lang="ts">
interface Attribute {
  label: string
  icon?: string
}

const attributes: Attribute[] = [
  { label: 'Área propriedade', icon: '/icons/site-rural-pd-area-propriedade.svg' },
  { label: 'Área aberta', icon: '/icons/site-rural-pd-area-aberta.svg' },
  { label: 'Cultivo Predominante' },
  { label: 'Período das chuvas', icon: '/icons/site-rural-pd-periodo-chuvas.svg' },
  { label: 'Aptidão do Solo', icon: '/icons/site-rural-pd-aptidao-solo.svg' },
  { label: 'Bioma', icon: '/icons/site-rural-pd-bioma.svg' },
  { label: 'Utilização do Solo', icon: '/icons/site-rural-pd-utilizacao-solo.svg' },
  { label: 'Altitude média', icon: '/icons/site-rural-pd-altitude-media.svg' },
  { label: 'Teor de argila', icon: '/icons/site-rural-pd-teor-argila.svg' },
  { label: 'Juquirada', icon: '/icons/site-rural-pd-juquirada.svg' },
  { label: 'Pluviometria', icon: '/icons/site-rural-pd-pluviometria.svg' }
]
</script>

<template>
  <section id="site-rural-ficha-tecnica" class="section-py">
    <div class="container-page">
      <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:justify-between">
        <div class="w-full tablet-lg:w-[27%]">
          <NuxtImg
            format="avif"
            src="/images/modulos-site-rural/property-details-mockup-phone.png"
            :width="337"
            :height="633"
            sizes="mobile-lg:320px tablet-lg:260px desktop:320px desktop-full:378px"
            alt="Ficha técnica rural no celular" title="Ficha técnica rural no celular"
            class="mx-auto h-auto w-full max-w-[378px]"
            loading="lazy"
          />
        </div>

        <div class="flex w-full flex-col gap-6 tablet-lg:w-[62.6%]">
          <div>
            <h2 class="leading-[1.2]">
              Imóveis rurais com informações completas e bem
              <span class="text-brand">detalhadas</span>
            </h2>
            <p class="mt-4 text-base leading-[1.4] text-ink tablet-lg:text-[18px] desktop-full:text-[20px]">
              Cadastre os atributos técnicos da propriedade, do georreferenciamento à
              disponibilidade hídrica, e dê ao comprador e ao investidor os dados que precisam
              para decidir com confiança
            </p>
          </div>

          <div>
            <p class="text-[16px] font-normal text-ink desktop-full:text-[20px]">
              Legenda dos detalhes do imóvel rural
            </p>
            <div class="mt-3 grid grid-cols-2 gap-[10px] tablet-lg:grid-cols-3 tablet-lg:gap-x-[14px] tablet-lg:gap-y-[23px]">
              <div
                v-for="attr in attributes"
                :key="attr.label"
                class="flex h-[49px] items-center gap-[13px] rounded-[10px] border border-[#ddd] bg-white px-5"
                :class="attr.icon ? '' : 'justify-center'"
              >
                <img
                  v-if="attr.icon"
                  :src="attr.icon"
                  :alt="imageLabel(attr.icon)" :title="imageLabel(attr.icon)"
                  aria-hidden="true"
                  class="size-[25px] shrink-0 object-contain"
                />
                <span class="text-[13px] font-normal leading-tight text-ink tablet-lg:text-[14px] desktop-full:text-[16px]">
                  {{ attr.label }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
