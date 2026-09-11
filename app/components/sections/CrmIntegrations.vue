<script setup lang="ts"></script>

<template>
  <section id="crm-integracoes" class="section-py">
    <div class="container-page">
      <div class="relative flex flex-col tablet-lg:flex-row tablet-lg:items-stretch tablet-lg:h-[596px] tablet-lg:overflow-clip">
        <div class="absolute inset-0 -z-10 rounded-[50px] bg-[#f5f5f5]" aria-hidden="true"></div>
        <div class="relative flex w-full items-center justify-center px-10 py-10 tablet-lg:h-auto tablet-lg:w-[35.43%] tablet-lg:px-20 tablet-lg:py-0">
          <div class="flex items-start gap-[10px] tablet:gap-[15px] tablet-lg:gap-5">
            <div class="flex flex-col gap-1.5 tablet:gap-[9px] tablet-lg:gap-3">
              <div class="relative h-28 w-20 overflow-hidden rounded-full tablet:h-[168px] tablet:w-[120px] tablet-lg:h-56 tablet-lg:w-40">
                <img
                  src="/icons/crm-integrations-bubble-loading.svg"
                  alt="Ícone de sincronização automática"
                  class="absolute -left-[40%] -top-[12.946%] w-[180%] h-[157.143%] max-w-none"
                />
              </div>
              <div class="flex h-28 w-20 flex-col items-center justify-center gap-1 rounded-full bg-white shadow-[0px_35px_32px_rgba(0,0,0,0.08)] tablet:h-[168px] tablet:w-[120px] tablet-lg:h-56 tablet-lg:w-40 tablet-lg:gap-2">
                <img src="/icons/crm-integrations-sub100-mark.svg" alt="" aria-hidden="true" class="h-[23px] w-[34px] tablet:h-[34px] tablet:w-[51px] tablet-lg:h-[45.63px] tablet-lg:w-[68px]" />
                <p class="text-[10px] leading-[1.6] text-brand tablet:text-xs tablet-lg:text-sm">Meu Site</p>
              </div>
              <div class="relative h-28 w-20 overflow-hidden rounded-full tablet:h-[168px] tablet:w-[120px] tablet-lg:h-56 tablet-lg:w-40">
                <img
                  src="/icons/crm-integrations-bubble-ring.svg"
                  alt="Ícone do RD Station"
                  class="absolute -left-[40%] -top-[12.946%] w-[180%] h-[157.143%] max-w-none"
                />
              </div>
            </div>
            <div class="mt-8 flex flex-col gap-1.5 tablet:mt-12 tablet:gap-[9px] tablet-lg:mt-16 tablet-lg:gap-3">
              <div class="relative h-28 w-20 overflow-hidden rounded-full tablet:h-[168px] tablet:w-[120px] tablet-lg:h-56 tablet-lg:w-40">
                <img
                  src="/icons/crm-integrations-bubble-whatsapp.svg"
                  alt="Ícone do WhatsApp"
                  class="absolute -left-[40%] -top-[12.946%] w-[180%] h-[157.143%] max-w-none"
                />
              </div>
              <div class="flex h-28 w-20 flex-col items-center justify-center gap-1 rounded-full bg-white shadow-[0px_35px_32px_rgba(0,0,0,0.08)] tablet:h-[168px] tablet:w-[120px] tablet-lg:h-56 tablet-lg:w-40 tablet-lg:gap-2">
                <img src="/icons/crm-integrations-sub100-mark.svg" alt="" aria-hidden="true" class="h-[23px] w-[34px] tablet:h-[34px] tablet:w-[51px] tablet-lg:h-[45.63px] tablet-lg:w-[68px]" />
                <p class="text-[10px] leading-[1.6] text-brand tablet:text-xs tablet-lg:text-sm">Imóveis</p>
              </div>
              <div class="flex h-28 w-20 items-center justify-center rounded-full bg-white shadow-[0px_35px_32px_rgba(0,0,0,0.08)] tablet:h-[168px] tablet:w-[120px] tablet-lg:h-56 tablet-lg:w-40">
                <img src="/icons/crm-integrations-meta-icon.svg" alt="Ícone do Meta" class="h-[27px] w-10 tablet:h-10 tablet:w-[60px] tablet-lg:h-[53.14px] tablet-lg:w-20" />
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex w-full flex-col items-start gap-[50px] px-10 py-10 tablet-lg:w-[57.57%] tablet-lg:justify-center tablet-lg:px-0 tablet-lg:pr-10 tablet-lg:pl-16"
        >
          <h2 class="text-3xl leading-[1.4] font-normal text-ink tablet-lg:text-[50px]">
            Conecte <span class="font-bold text-brand">seu CRM</span> às
            <br class="hidden tablet-lg:block" />
            ferramentas que você já utiliza
          </h2>
          <p class="text-base leading-[1.4] text-black tablet-lg:text-[26px]">
            Conecte o WhatsApp, Redes Sociais e o RD Station diretamente ao seu funil de
            atendimento, sem precisar alternar entre sistemas
          </p>
          <CtaButton variant="primary" to="/testar-gratis" class="whitespace-nowrap">
            Testar grátis por 30 dias
          </CtaButton>
        </div>
      </div>
    </div>
  </section>
</template>
