<script setup lang="ts">
interface PhoneMockup {
  src: string
  alt: string
}

const mockups: PhoneMockup[] = [
  {
    src: '/images/modulos-crm/publishing-mockup-funil.png',
    alt: 'Funil imobiliário no celular'
  },
  {
    src: '/images/modulos-crm/publishing-mockup-kanban.png',
    alt: 'Kanban de atendimentos no celular'
  },
  {
    src: '/images/modulos-crm/publishing-mockup-dados-atendimento.png',
    alt: 'Dados de atendimento no celular'
  },
  {
    src: '/images/modulos-crm/publishing-mockup-agenda.png',
    alt: 'Agenda integrada no celular'
  }
]
</script>

<template>
  <section id="crm-publishing" class="section-py">
    <div class="container-page">
      <div class="mx-auto max-w-[1001px] text-center">
        <h2>
          Conheça o módulo CRM do SUBSEE <span class="text-[#e72f4d]">on</span>
        </h2>
        <p class="mx-auto mt-4 text-base leading-[1.4] text-ink-soft tablet-lg:text-xl">
          Do primeiro contato ao fechamento, veja como o CRM organiza leads, atendimentos e
          negociações em um só lugar, tornando o processo comercial mais simples de acompanhar e
          mais fácil de fechar.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-6 tablet-lg:grid-cols-4">
        <NuxtImg
          v-for="mockup in mockups"
          :key="mockup.src"
          :src="mockup.src"
          :width="560"
          :height="1022"
          sizes="mobile-lg:45vw tablet-lg:280px"
          :alt="mockup.alt || imageLabel(mockup.src)" :title="mockup.alt || imageLabel(mockup.src)"
          class="mx-auto h-auto w-full max-w-[280px]"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
