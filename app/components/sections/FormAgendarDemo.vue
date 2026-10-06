<script setup lang="ts">
import { formBadgeLabel, formTrustItems } from '~/data/forms'
import type { FormBenefit, FormPageConfig } from '~/types/forms'

const config: FormPageConfig = {
  tipoMail: 'Solicite uma demonstração',
  formSite: 'SUB100 Imobiliárias',
  produto: 'SUBSEE – Demonstração',
  recaptchaAction: 'subsee_demo',
  thankYouPath: '/agendar-demonstracao/obrigado/',
  ctaLabel: 'Quero agendar uma demonstração',
  ctaClass: 'text-[16px] leading-[22px] font-normal tablet-lg:text-[20px]',
  message: {
    placeholder: 'Informe o melhor dia e horário para entrarmos em contato.'
  }
}

const benefits: FormBenefit[] = [
  {
    icon: '/icons/form-monitor.svg',
    iconSize: 24,
    title: 'Demonstração direcionada',
    description: 'Explore todos os recursos do SUBSEE.'
  },
  {
    icon: '/icons/form-settings.svg',
    title: 'Configuração simples e rápida',
    description: 'Comece em poucos minutos e veja resultados.'
  },
  {
    icon: '/icons/form-user.svg',
    title: 'Orientação com especialistas',
    description: 'Conte com especialistas sempre que precisar.'
  }
]
</script>

<template>
  <FormPageHero>
    <template #heading>
      Agende uma demonstração do <span class="font-bold text-brand">SUBSEE</span>
    </template>
    <template #lead>
      <p>Veja como o SUBSEE organiza o atendimento e</p>
      <p>as vendas da sua imobiliária, do lead à assinatura</p>
    </template>
  </FormPageHero>

  <FormSplitSection intro-class="flex w-full max-w-[530px] min-w-0 flex-col gap-[35px] desktop:flex-1">
    <template #intro>
      <h2 class="text-[28px] leading-[1.1] font-bold text-ink tablet-lg:text-[36px]">
        Uma apresentação pensada para o <span class="text-brand">seu negócio</span>
      </h2>
      <p class="text-[16px] leading-[1.6] text-[#666] tablet-lg:text-[20px]">
        Mostraremos as funcionalidades mais relevantes para o seu negócio e responderemos às suas perguntas.
      </p>
      <FormBenefitList :items="benefits">
        <template #footer>
          <FormBadge :label="formBadgeLabel" />
        </template>
      </FormBenefitList>
    </template>

    <template #card>
      <FormCard title-class="text-[20px] leading-[34px] font-bold text-ink mobile-lg:text-[22px]" subtitle-class="-mt-[5px] text-[14px] leading-[1.2] text-[#6b7280]">
        <template #icon>
          <span class="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#eef2ff]">
            <img src="/icons/form-message-circle-header.svg" alt="Ícone de mensagem" title="Ícone de mensagem" width="24.375" height="24.375" class="block" />
          </span>
        </template>
        <template #title>Vamos conversar?</template>
        <template #subtitle>Preencha seus dados e indique o melhor dia e horário para receber nosso contato.</template>
        <FormLeadFields :config="config" />
      </FormCard>
    </template>
  </FormSplitSection>

  <FormTrustBar :items="formTrustItems" />
</template>
