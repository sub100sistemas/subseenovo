<script setup lang="ts"></script>

<template>
  <section id="base-conhecimento-informacao-centralizada" class="section-py">
    <div class="container-page">
      <div class="relative flex flex-col tablet-lg:min-h-[425px] tablet-lg:flex-row tablet-lg:items-stretch tablet-lg:overflow-clip">
        <div class="absolute inset-0 -z-10 rounded-[50px] bg-[#f5f5f5]" aria-hidden="true"></div>

        <div
          class="flex w-full flex-col items-start gap-4 px-10 py-10 tablet-lg:w-[43.75%] tablet-lg:justify-center tablet-lg:gap-5 tablet-lg:px-16 tablet-lg:py-0"
        >
          <span class="inline-flex items-center gap-2 rounded-full bg-[#e0e1ff] px-3 py-1.5">
            <img src="/icons/base-conhecimento-icone-award.svg" width="14" height="14" alt="" aria-hidden="true" />
            <span class="text-xs font-bold tracking-wide text-brand uppercase">base de conhecimento</span>
          </span>
          <h2 class="text-3xl leading-[1.15] font-extrabold tracking-tight text-ink tablet-lg:text-[36px]">
            Toda a informação que sua equipe precisa, em um só lugar.
          </h2>
          <p class="text-lg leading-[1.5] text-[#374151] tablet-lg:text-xl">
            Acesse treinamentos, manuais e documentação de forma rápida e centralizada, direto na
            plataforma. Gerencie permissões e controle de acesso com facilidade e segurança.
          </p>
          <CtaButton variant="primary" to="/testar-gratis/" class="mt-2 whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
          <p class="mt-[18px] flex items-center gap-2 text-xs text-[#6b7280]">
            <img src="/icons/base-conhecimento-icone-shield-check.svg" width="14" height="14" alt="" aria-hidden="true" />
            Sem compromisso. Teste gratuito por 30 dias para toda a equipe.
          </p>
        </div>

        <div class="flex w-full items-center justify-center px-6 pb-10 tablet-lg:w-[50.5%] tablet-lg:px-10 tablet-lg:py-0">
          <NuxtImg
            format="avif"
            src="/images/modulos-base-de-conhecimento/devices-composition.png"
            :width="1552"
            :height="960"
            sizes="mobile-lg:100vw tablet-lg:600px desktop:732px"
            alt="Painel de treinamentos e celular"
            class="h-auto w-full max-w-[550px] tablet-lg:max-w-[703px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
