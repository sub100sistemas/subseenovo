<template>
  <ThankYouHero>
    <template #image>
      <slot name="image">
        <img
          src="/images/obrigado.svg"
          alt="Astronauta em um foguete" title="Astronauta em um foguete"
          width="352"
          height="363"
          class="block h-auto w-[220px] max-w-full tablet-lg:w-[352px]"
        />
      </slot>
    </template>
    <template #heading>
      <slot name="heading">Obrigado!</slot>
    </template>
    <template #subtitle>
      <slot name="subtitle">Seu cadastro foi realizado com sucesso.</slot>
    </template>
    <template #cta>
      <slot name="cta">
        <CtaButton variant="success" to="/">Voltar para a página principal</CtaButton>
      </slot>
    </template>
  </ThankYouHero>
</template>
