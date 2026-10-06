<script setup lang="ts"></script>

<template>
  <section id="apis-conecte" class="section-py">
    <div class="container-page">
      <div class="relative flex flex-col tablet-lg:h-[596px] tablet-lg:flex-row tablet-lg:items-stretch tablet-lg:overflow-clip">
        <div class="absolute inset-0 -z-10 rounded-[50px] bg-[#f5f5f5]" aria-hidden="true"></div>

        <div
          class="flex w-full flex-col items-start gap-4 px-10 py-10 tablet-lg:w-[40.71%] tablet-lg:justify-center tablet-lg:gap-5 tablet-lg:px-16 tablet-lg:py-0"
        >
          <p class="text-base font-medium tracking-[1.28px] text-[#2e57eb]">INTEGRAÇÕES</p>
          <h2 class="text-3xl leading-[1.2] font-bold text-ink tablet-lg:text-[46px]">
            Conecte <span class="text-brand">seu CRM</span> às ferramentas que você já utiliza
          </h2>
          <p class="text-lg leading-[1.4] text-ink tablet-lg:text-xl">
            Conecte o WhatsApp, redes sociais e o RD Station diretamente ao seu funil de
            atendimento, sem precisar alternar entre sistemas
          </p>
          <CtaButton variant="primary" to="/testar-gratis/" class="mt-2 whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>

        <div class="flex w-full items-center justify-center px-6 pb-10 tablet-lg:w-[59.29%] tablet-lg:px-10 tablet-lg:py-0">
          <NuxtImg
            src="/images/modulos-apis-hub-integrador/conecte.png"
            :width="1694"
            :height="1088"
            sizes="mobile-lg:100vw tablet-lg:600px desktop:732px"
            format="avif"
            alt="Painel do CRM conectado a integrações" title="Painel do CRM conectado a integrações"
            class="h-auto w-full max-w-[600px] tablet-lg:max-w-[732px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
