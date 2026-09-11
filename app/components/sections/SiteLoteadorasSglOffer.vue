<script setup lang="ts"></script>

<template>
  <section id="site-loteadoras-sgl" class="section-py">
    <div class="container-page">
      <div
        class="relative overflow-hidden rounded-[24px] px-6 py-10 tablet-lg:rounded-[50px] tablet-lg:px-16 tablet-lg:py-[46px]"
        style="background: linear-gradient(100deg, rgba(234,239,254,0) 2%, #bddbfd 100%), linear-gradient(115deg, #edf0fe 22%, #f0f1fe 100%)"
      >
        <div class="flex flex-col items-center gap-10 tablet-lg:flex-row tablet-lg:items-center tablet-lg:justify-between">
          <div class="flex w-full flex-col items-start gap-6 tablet-lg:w-[42%]">
            <span
              class="inline-flex h-[29px] items-center rounded-full bg-[#8c6efe]/[0.12] px-4 text-[11px] font-bold uppercase tracking-wide text-brand"
            >
              Sistema SGL
            </span>

            <h2 class="text-[24px] leading-[1.3] font-bold text-brand tablet-lg:text-[28px]">
              Simulador de vendas, mapa interativo, financeiro completo e portal do cliente
            </h2>

            <p class="text-base leading-[1.4] text-ink tablet-lg:text-[18px]">
              O ERP para <strong>loteadoras</strong> e <strong>incorporadas</strong>, o SGL é um
              sistema de gestão fácil que se integra aos seus processos
            </p>

            <CtaButton to="/modulos/sgl">Acessar o Sistema SGL</CtaButton>
          </div>

          <div class="relative w-full tablet-lg:w-[55%]">
            <NuxtImg
              src="/images/modulos-site-loteadoras/sgl-phone-mockup.png"
              :width="483"
              :height="331"
              sizes="mobile-lg:340px tablet-lg:380px desktop:440px desktop-full:483px"
              alt="Mockup de celular mostrando o painel do Sistema SGL, com menu de extrato financeiro, boletos, empreendimentos e demonstrativos"
              class="mx-auto h-auto w-full max-w-[483px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
