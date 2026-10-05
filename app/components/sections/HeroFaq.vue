<script setup lang="ts">
const faqs = [
  {
    question: 'Por que você deve experimentar o CRM Imobiliário SUBSEE gratuitamente?',
    answer:
      'Cada CRM possui características diferentes, com funcionalidades que podem fazer mais ou menos sentido para a realidade de cada imobiliária. Com o teste gratuito do SUBSEE, você pode conhecer o sistema sem custo, avaliar seus recursos, entender como ele se adapta à sua operação e contar com nosso suporte para esclarecer dúvidas, seja sua atuação focada em imóveis urbanos, rurais ou outros segmentos.'
  },
  {
    question: 'Como vou aprender a usar o SUBSEE?',
    answer:
      'Você conta com uma central de ajuda completa, com artigos e vídeos explicativos sobre cada funcionalidade do sistema. Também disponibilizamos treinamentos guiados durante a implantação, além de suporte próximo da nossa equipe para tirar dúvidas no dia a dia. Assim, você aprende no seu ritmo e sem complicação.'
  },
  {
    question: 'Se eu estiver com dificuldade, posso solicitar um treinamento online?',
    answer:
      'Sim. Além do material de apoio disponível na plataforma, você pode solicitar treinamentos online individuais ou em grupo diretamente com nossa equipe de suporte. As sessões são agendadas conforme sua disponibilidade e focadas nas dificuldades específicas da sua imobiliária.'
  },
  {
    question: 'É possível importar meus dados do meu sistema para o SUBSEE?',
    answer:
      'Sim. Nossa equipe auxilia na migração dos seus dados, como imóveis, clientes e contatos, de outros sistemas para o SUBSEE. O processo é acompanhado de perto para garantir que nenhuma informação importante se perca durante a transição.'
  },
  {
    question: 'Por usar o SUBSEE, tenho direito a anunciar no Portal SUB100?',
    answer:
      'Sim. Assinantes do SUBSEE têm acesso para anunciar seus imóveis no Portal SUB100, ampliando a visibilidade dos anúncios sem custo adicional. Essa integração é automática, então os imóveis cadastrados no CRM já ficam disponíveis para publicação no portal.'
  },
  {
    question: 'O SUBSEE integra-se com quais portais imobiliários?',
    answer:
      'O SUBSEE se integra aos principais portais do mercado, como Portal SUB100, OLX, Viva Real e ZAP Imóveis, entre outros. Assim você cadastra o imóvel uma única vez no sistema e ele é publicado automaticamente nos portais integrados, economizando tempo da sua equipe.'
  },
  {
    question: 'Os anúncios podem ser integrados ao Pixel da Meta?',
    answer:
      'Sim. O SUBSEE permite integrar o Pixel da Meta aos seus anúncios, possibilitando o rastreamento de conversões e a criação de públicos personalizados para campanhas no Facebook e Instagram. Isso ajuda a otimizar seus investimentos em anúncios pagos.'
  },
  {
    question: 'O SUBSEE já vem com um site imobiliário?',
    answer:
      'Sim. O SUBSEE inclui um site imobiliário integrado ao sistema, onde os imóveis cadastrados são publicados automaticamente. O site é responsivo, otimizado para buscadores e conta com formulários de contato conectados diretamente ao CRM.'
  },
  {
    question: 'Se eu contratar um Plano Urbano, posso anunciar imóveis rurais?',
    answer:
      'Não. O Plano Urbano é voltado para a gestão e divulgação de imóveis urbanos. Para anunciar imóveis rurais, é necessário contratar o Plano Rural ou um plano que contemple os dois segmentos, garantindo as funcionalidades específicas de cada operação.'
  }
]

useSchemaNode((context) => buildFaqPage(context, faqs))
</script>

<template>
  <section id="duvidas-frequentes" class="section-py relative overflow-hidden">
    <img loading="lazy" decoding="async"
      src="/icons/hero-faq-interrogacao-topo-esquerda.svg"
      alt="Ponto de interrogação decorativo" title="Ponto de interrogação decorativo"
      aria-hidden="true"
      class="pointer-events-none absolute -left-1 top-0 hidden w-[60px] tablet-lg:block"
    />

    <div class="container-page relative">
      <div class="mx-auto max-w-[800px] text-center">
        <SectionTag label="Especialidade · Dúvidas Frequentes" />
        <h2 class="mt-4">Tudo sobre o SUBSEE <span class="text-[#e7304d]">on</span> antes de começar</h2>
      </div>

      <div class="relative mt-10">
        <img loading="lazy" decoding="async"
          src="/icons/hero-faq-interrogacao-inferior-esquerda-1.svg"
          alt="Ponto de interrogação decorativo" title="Ponto de interrogação decorativo"
          aria-hidden="true"
          class="pointer-events-none absolute hidden -left-[22.33%] top-[15.45%] w-[21.45%] tablet-lg:block"
        />
        <img loading="lazy" decoding="async"
          src="/icons/hero-faq-interrogacao-inferior-esquerda-2.svg"
          alt="Ponto de interrogação decorativo" title="Ponto de interrogação decorativo"
          aria-hidden="true"
          class="pointer-events-none absolute hidden -left-[24.75%] top-[13.65%] w-[18.45%] tablet-lg:block"
        />
        <img loading="lazy" decoding="async"
          src="/icons/hero-faq-interrogacao-superior-direita-1.svg"
          alt="Ponto de interrogação decorativo" title="Ponto de interrogação decorativo"
          aria-hidden="true"
          class="pointer-events-none absolute hidden left-[102.4%] -top-[2.96%] w-[21.44%] tablet-lg:block"
        />
        <img loading="lazy" decoding="async"
          src="/icons/hero-faq-interrogacao-superior-direita-2.svg"
          alt="Ponto de interrogação decorativo" title="Ponto de interrogação decorativo"
          aria-hidden="true"
          class="pointer-events-none absolute hidden left-[99.96%] -top-[4.76%] w-[18.44%] tablet-lg:block"
        />

        <div
          class="relative overflow-hidden rounded-[28px] bg-[#F2F1F8] px-6 py-10 tablet-lg:rounded-[54px] tablet-lg:px-16 tablet-lg:py-16"
        >
          <img loading="lazy" decoding="async"
            src="/icons/hero-faq-interrogacao-caixa-esquerda.svg"
            alt="Caixa de interrogação decorativa" title="Caixa de interrogação decorativa"
            aria-hidden="true"
            class="pointer-events-none absolute hidden -left-[12.77%] top-[84.26%] w-[31.7%] tablet-lg:block"
          />
          <img loading="lazy" decoding="async"
            src="/icons/hero-faq-interrogacao-caixa-direita.svg"
            alt="Caixa de interrogação decorativa" title="Caixa de interrogação decorativa"
            aria-hidden="true"
            class="pointer-events-none absolute hidden left-[23.76%] top-[84.26%] w-[31.3%] tablet-lg:block"
          />

          <div class="relative grid grid-cols-1 gap-10 tablet-lg:grid-cols-[1fr_2fr] tablet-lg:gap-16">
            <div class="flex flex-col items-center text-center">
              <h3 class="max-w-[300px] text-[22px] leading-[1.2] font-medium text-ink tablet-lg:text-[30px]">
                Tire suas dúvidas sobre o <span class="font-bold">SUBSEE</span> <span class="font-bold text-[#e7304d]">on</span> de forma rápida e simples
              </h3>

              <NuxtImg decoding="async"
                format="avif"
                src="/images/hero-faq/foto-pessoa-duvidas.png"
                :width="251"
                :height="373"
                alt="Mulher sorrindo apontando para cima" title="Mulher sorrindo apontando para cima"
                class="mt-6 h-auto w-[190px] rounded-2xl object-cover tablet-lg:w-[251px]"
                loading="lazy"
              />
            </div>

            <div class="faq-accordion">
              <details
                v-for="(faq, i) in faqs"
                :key="faq.question"
                class="faq-item"
                :class="i < faqs.length - 1 ? 'border-b border-[#C1BCD7]' : ''"
              >
                <summary class="flex cursor-pointer list-none items-start gap-[15px] pt-[30px] pb-[30px]">
                  <span class="mt-1.5 size-3 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  <span class="flex flex-1 items-start gap-[13px]">
                    <span class="flex-1 text-[18px] leading-[1.2] font-medium text-ink tablet-lg:text-[20px]">
                      {{ faq.question }}
                    </span>
                    <img loading="lazy" decoding="async" src="/icons/icone-seta-faq.svg" alt="Seta para expandir a pergunta" title="Seta para expandir a pergunta" class="chevron mt-1 h-[10px] w-4 shrink-0" />
                  </span>
                </summary>
                <div class="pb-[30px] pl-[27px]">
                  <p class="text-base leading-[26px] text-ink">{{ faq.answer }}</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>

<style scoped>
.faq-accordion :deep(summary::-webkit-details-marker) {
  display: none;
}

.faq-accordion :deep(.chevron) {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}

.faq-accordion :deep(details[open] summary) {
  padding-bottom: 18px;
}

.faq-accordion :deep(details[open] .chevron) {
  transform: rotate(0deg);
}
</style>
