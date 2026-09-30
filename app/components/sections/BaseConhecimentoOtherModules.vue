<script setup lang="ts"></script>

<template>
  <section id="base-conhecimento-outros-modulos" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1210px] text-center">
        <h2>Conheça os outros módulos do Integrações e Habilidades</h2>
        <p class="mx-auto mt-4 text-base leading-[1.4] text-ink-soft tablet-lg:text-xl">
          Explore os recursos de integração e automação que complementam e potencializam sua
          operação.
        </p>
      </div>

      <div class="mx-auto mt-10 max-w-[1120px]">
        <NuxtLink
          to="/modulos/apis-hub-integrador"
          class="flex flex-col items-center gap-4 rounded-[20px] bg-white p-6 text-center shadow-[0px_2px_35px_rgba(31,56,115,0.08)] tablet:flex-row tablet:items-center tablet:gap-6 tablet:text-left"
        >
          <span class="flex size-[78px] shrink-0 items-center justify-center rounded-2xl bg-[#F7F7FF]">
            <img
              src="/icons/menu-icone-apis-hub.svg"
              width="22"
              height="24"
              alt=""
              aria-hidden="true"
              class="size-6"
            />
          </span>
          <div class="min-w-0 flex-1">
            <p class="text-xl font-semibold text-brand">APIs e HUB Integradores</p>
            <p class="mt-1 text-base text-ink-soft">
              Integre sistemas e automatize fluxos de trabalho via API.
            </p>
          </div>
          <span
            class="inline-flex h-[52px] w-full shrink-0 items-center justify-center rounded-xl bg-brand px-5 text-base font-semibold text-white shadow-[0px_7px_18px_-7px_rgba(20,64,217,0.22)] tablet:w-[215px]"
          >
            Clique aqui →
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
