<script setup lang="ts"></script>

<template>
  <section id="site-loteadoras-sgl" class="section-py">
    <div class="container-page">
      <div
        class="relative mx-auto w-full overflow-hidden rounded-[24px] bg-[linear-gradient(100deg,rgba(234,239,254,0)_2%,#bddbfd_100%),linear-gradient(115deg,#edf0fe_22%,#f0f1fe_100%)] p-15 pb-0 tablet-lg:rounded-[50px] max-[1299px]:w-full desktop:w-[1085px]"
      >
        <div class="flex flex-col items-center gap-3 tablet-lg:flex-row tablet-lg:items-center tablet-lg:justify-between">
          <div class="flex w-full flex-col items-start gap-3 tablet-lg:w-[55%]">
            <span
              class="inline-flex h-[29px] items-center rounded-full bg-[#8c6efe]/[0.12] px-4 text-[11px] font-bold uppercase tracking-wide text-brand"
            >
              Sistema SGL
            </span>

            <h2 class="text-[22px] leading-[1.3] font-bold text-brand tablet-lg:text-[24px]">
              Simulador de vendas, mapa interativo, financeiro completo e portal do cliente
            </h2>

            <p class="text-base leading-[1.4] text-ink tablet-lg:text-[18px]">
              O ERP para <strong>loteadoras</strong> e <strong>incorporadas</strong>, o SGL é um
              sistema de gestão fácil que se integra aos seus processos
            </p>

            <CtaButton href="https://sistemasgl.com.br/" class="mb-9">Acessar o Sistema SGL</CtaButton>
          </div>

          <div class="relative w-full tablet-lg:w-[45%]">
            <NuxtImg
              src="/images/modulos-site-loteadoras/sgl-phone-mockup.png"
              :width="483"
              :height="331"
              sizes="mobile-lg:340px tablet-lg:380px desktop:440px desktop-full:483px"
              alt="Painel do SGL no celular" title="Painel do SGL no celular"
              class="mx-auto h-auto w-full max-w-[483px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
