<script setup lang="ts">
const documentLines = [100, 92, 96, 81, 100, 88, 96, 73]

const checklist = [
  'Modelos padronizados de contratos, recibos e propostas',
  'Fechamento mais rápido com toda a documentação organizada',
  'Menos idas e vindas com o proprietário durante a negociação',
  'Assinatura eletrônica com validade jurídica e mais segurança'
]
</script>

<template>
  <section id="crm-rural-formal-closing" class="section-py">
    <div class="container-page">
      <div class="flex flex-col gap-10 rounded-[28px] bg-[#f4f4f7] p-6 tablet-lg:rounded-[40px] tablet-lg:p-12 desktop-full:flex-row desktop-full:items-center desktop-full:gap-20 desktop-full:rounded-[50px] desktop-full:p-[80px]">
        <div class="flex w-full flex-col items-start gap-5 desktop-full:flex-1">
          <h2>
            Do acordo verbal ao <span class="text-brand">contrato assinado</span>
          </h2>
          <p class="text-base leading-[1.4] text-ink tablet-lg:text-xl">
            Gere propostas, recibos e contratos personalizados para venda, arrendamento ou
            parceria rural diretamente pelo sistema, reduzindo erros na formalização do negócio.
          </p>

          <ul class="flex w-full flex-col gap-3">
            <li v-for="item in checklist" :key="item" class="flex items-start gap-3">
              <span class="mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full bg-teal text-white" aria-hidden="true">
                <IconCheck class="size-2.5" />
              </span>
              <span class="text-base text-ink-soft">{{ item }}</span>
            </li>
          </ul>

          <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>

        <div class="w-full max-w-[560px] shrink-0 overflow-hidden rounded-[20px] bg-white desktop-full:w-[560px]">
          <div class="flex h-16 items-center bg-[#00d39b] px-6">
            <p class="text-lg font-semibold text-white">Contrato de Arrendamento</p>
          </div>

          <div class="flex flex-col gap-4 p-6">
            <div
              v-for="(width, index) in documentLines"
              :key="index"
              class="h-[10px] rounded-[4px] bg-[#f4f4f7]"
              :style="{ width: `${width}%` }"
            />
          </div>

          <div class="px-6 pb-6">
  <div class="flex items-end justify-between">
    <div class="flex flex-col">
      <img
        src="/images/modulos-crm-rural/assinaturaeletrônica.svg"
        alt="Assinatura eletrônica" title="Assinatura eletrônica"
        class="h-[40px] w-auto mobile-lg:h-[48px] tablet-lg:h-[70px]"
      />
      <div class="mt-1 h-px w-[290px] bg-[#979797]" />
    </div>

    <div class="flex flex-col items-center mb-[-25px]">
      <img
        src="/icons/crm-rural-formal-closing-selo-assinado.svg"
        width="90"
        height="90"
        alt="Selo de contrato assinado" title="Selo de contrato assinado"
        aria-hidden="true"
        class="size-[72px] mobile-lg:size-[90px] shrink-0"
      />
      <p class="mt-2 text-center text-xs font-semibold text-[#00d39b] pb-[-25]">
        Assinado eletronicamente
      </p>
    </div>
  </div>

  <p class="mt-2 text-sm text-[#696984]">Assinatura eletrônica do proprietário</p>
</div>
        </div>
      </div>
    </div>
  </section>
</template>
