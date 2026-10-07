<template>
  <section id="crm-urbano-funil" class="section-py bg-white">
    <div class="container-page">
      <div class="mx-auto max-w-[1200px] text-center">
        <h2 class="leading-[1.4] tracking-[-1px]">
          Cada lead enviado para o lugar <span class="text-brand">certo</span>, e segue para 
          <br class="hidden desktop-compact:block" />
          o corretor da fila, conforme o perfil de cada oportunidade
        </h2>
        <p class="mx-auto mt-8 text-[20px] leading-[1.4] text-ink tablet-lg:text-[24px]">
          Distribua leads automaticamente com roletas inteligentes, acompanhe o follow-up das negociações em 
          um Kanban visual e potencialize o atendimento com playbooks e automações.
        </p>
      </div>

      <div class="mx-auto mt-8 flex max-w-[1072px] justify-center">
        <NuxtImg
          src="/images/crm-urbano/crm-urbano-funil-tela.webp"
          :width="1072"
          :height="594"
          sizes="mobile-lg:100vw tablet:720px tablet-lg:940px desktop-compact:1072px"
          quality="90"
          alt="Tela de configuração da distribuição automática de leads do CRM" title="Tela de configuração da distribuição automática de leads do CRM"
          class="h-auto w-full"
          loading="lazy"
        />
      </div>

      <div class="mt-8 flex justify-center">
        <CtaButton variant="primary" to="/testar-gratis/" class="whitespace-nowrap">
          Testar grátis por 30 dias
        </CtaButton>
      </div>
    </div>
  </section>
</template>
