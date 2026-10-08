<script setup lang="ts">
import { formBadgeLabel, formTrustItems } from '~/data/forms'
import type { FormBenefit, FormPageConfig } from '~/types/forms'

const config: FormPageConfig = {
  tipoMail: 'Solicite um teste grátis por 30 dias',
  formSite: 'SUB100 Imobiliárias',
  produto: 'Quero um CRM Imobiliário',
  ctaLabel: 'Começar teste grátis',
  recaptchaAction: 'subsee_teste',
  thankYouPath: '/testar-gratis/obrigado/',
  message: {
    placeholder: 'Informe o melhor dia e horário para entrarmos em contato.'
  }
}

const accentUnderline = '/icons/form-accent-underline.svg'
const accentRaysDays = '/icons/form-accent-rays-days.svg'

const benefits: FormBenefit[] = [
  {
    icon: '/icons/form-calendar.svg',
    title: 'Acesso completo por 30 dias',
    description: 'Explore todos os recursos do SUBSEE.'
  },
  {
    icon: '/icons/form-settings.svg',
    title: 'Configuração simples e rápida',
    description: 'Comece em poucos minutos e veja resultados.'
  },
  {
    icon: '/icons/form-headphones.svg',
    title: 'Suporte da equipe SUBSEE',
    description: 'Conte com especialistas sempre que precisar.'
  }
]
</script>

<template>
  <FormPageHero>
    <FormSplitSection intro-class="flex w-full max-w-[576px] min-w-0 flex-col gap-5 desktop:flex-1">
      <template #intro>
        <FormIntroHeading>
          <template #heading>
            Teste o SUBSEE grátis<br />
            por
            <FormHeroAccent
              class="ml-[0.2em]"
              :underline-src="accentUnderline"
              :rays-src="accentRaysDays"
              rays-class="top-[0.1838em] left-[3.61em] h-[0.7941em] w-[0.5em]"
            >
              30 dias
            </FormHeroAccent>
          </template>
          <template #lead>
            <p class="mt-4">Conheça na prática as funcionalidades do SUBSEE e descubra como simplificar a gestão da sua imobiliária.</p>
          </template>
        </FormIntroHeading>
        <h2 class="mt-3 text-[28px] leading-[1.1] font-bold text-ink tablet-lg:text-[36px]">
          Experimente o <span class="text-brand">SUBSEE</span><br />no seu dia a dia
        </h2>
        <p class="text-[16px] leading-[1.6] text-[#666] tablet-lg:text-[20px]">
          Preencha o formulário e comece a explorar os recursos que vão tornar sua operação mais organizada, integrada e
          eficiente
        </p>
        <FormBenefitList :items="benefits" />
        <FormBadge :label="formBadgeLabel" />
      </template>

      <template #card>
        <FormCard>
          <template #icon>
            <img src="/icons/form-rocket-icon-bg.svg" alt="Ícone de foguete" title="Ícone de foguete" width="56" height="56" class="block shrink-0" />
          </template>
          <template #title>Comece seu acesso</template>
          <template #subtitle>Preencha seus dados para ativar seu acesso por 30 dias</template>
          <FormLeadFields :config="config" />
        </FormCard>
      </template>
    </FormSplitSection>
  </FormPageHero>

  <FormTrustBar :items="formTrustItems" />
</template>
