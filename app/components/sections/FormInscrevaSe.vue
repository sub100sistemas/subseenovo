<script setup lang="ts">
import { formBadgeLabel, formTrustItems } from '~/data/forms'
import type { FormBenefit, FormPageConfig } from '~/types/forms'

const config: FormPageConfig = {
  tipoMail: 'Eventos',
  formSite: 'SUB100 Imobiliárias',
  produto: 'Quero um CRM Imobiliário',
  recaptchaAction: 'subsee_eventos',
  thankYouPath: '/inscreva-se/obrigado/',
  ctaLabel: 'Quero me inscrever no evento',
  ctaClass: 'text-[16px] leading-[22px] font-normal tablet-lg:text-[20px]',
  message: {
    placeholder: 'Deixe aqui sua dúvida ou comentário (opcional).',
    required: false
  }
}

const benefits: FormBenefit[] = [
  {
    icon: '/icons/form-monitor.svg',
    iconSize: 24,
    title: 'Conteúdo ao vivo e direcionado',
    description: 'Acompanhe novidades, dicas e boas práticas do SUBSEE.'
  },
  {
    icon: '/icons/form-settings.svg',
    title: 'Inscrição simples e rápida',
    description: 'Garanta sua vaga em poucos minutos e receba o link de acesso.'
  },
  {
    icon: '/icons/form-user.svg',
    title: 'Interação com especialistas',
    description: 'Tire suas dúvidas ao vivo com o time SUBSEE.'
  }
]
</script>

<template>
  <FormPageHero>
    <template #heading>
      Inscreva-se no evento do <span class="font-bold text-brand">SUBSEE</span>
    </template>
    <template #lead>
      <p>
        Participe ao vivo, tire suas dúvidas em tempo real e garanta sua vaga no próximo evento online do SUBSEE.
      </p>
    </template>
  </FormPageHero>

  <FormSplitSection intro-class="flex w-full max-w-[530px] min-w-0 flex-col gap-[10px] desktop:flex-1">
    <template #intro>
      <h2 class="text-[28px] leading-[1.1] font-bold text-ink tablet-lg:text-[36px]">
        Um evento pensado para o <span class="text-brand">seu negócio</span>
      </h2>
      <p class="text-[16px] leading-[1.6] text-[#666] tablet-lg:text-[20px]">
        Traremos as principais novidades do SUBSEE, tiraremos suas dúvidas ao vivo e você vai trocar experiências com
        outros profissionais do mercado imobiliário.
      </p>
      <FormBenefitList :items="benefits" />
      <FormBadge :label="formBadgeLabel" />
    </template>

    <template #card>
      <FormCard title-class="text-[20px] leading-[34px] font-bold text-ink mobile-lg:text-[22px]" subtitle-class="-mt-[5px] text-[14px] leading-[1.2] text-[#6b7280]">
        <template #icon>
          <span class="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#eef2ff]">
            <img src="/icons/form-message-circle-header.svg" alt="Ícone de mensagem" title="Ícone de mensagem" width="24.375" height="24.375" class="block" />
          </span>
        </template>
        <template #title>Garanta sua vaga!</template>
        <template #subtitle>Preencha seus dados e participe do próximo evento SUBSEE ao vivo pelo Zoom.</template>
        <FormLeadFields :config="config" />
      </FormCard>
    </template>
  </FormSplitSection>

  <FormTrustBar :items="formTrustItems" />
</template>
