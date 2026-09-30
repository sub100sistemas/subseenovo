<script setup lang="ts">
const address = 'Rua Machado de Assis, 621, Zona 06, Maringá - PR, 87015-580'
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

const socialLinks = [
  { label: 'Facebook da SUB100', href: 'https://www.facebook.com/sub100brasil', icon: '/icons/social-facebook.svg', width: 30, height: 34 },
  { label: 'Instagram da SUB100', href: 'https://www.instagram.com/sub100brasil/', icon: '/icons/social-instagram.svg', width: 30, height: 34 },
  { label: 'LinkedIn da SUB100', href: 'https://www.linkedin.com/company/sub100/', icon: '/icons/social-linkedin.svg', width: 34, height: 34 },
  { label: 'Blog da SUB100', href: 'https://blog.sub100sistemas.com.br/', icon: '/icons/social-blog.svg', width: 34, height: 34 }
]
</script>

<template>
  <footer class="pt-10 pb-10 tablet:pt-14 tablet:pb-14 desktop-compact:pt-[70px] desktop-compact:pb-[33px] bg-[#F8F8F8]">
    <div class="container-page">
      <div
        class="grid grid-cols-1 items-start gap-10 text-left desktop-compact:grid-cols-[1fr_auto_1fr] desktop-compact:gap-x-10"
      >
        <div class="flex flex-col items-start desktop-compact:justify-self-start">
          <NuxtLink to="/" class="inline-block">
            <img
              src="/icons/logo-sub100-imobiliarias-footer.svg"
              width="160"
              height="44"
              alt="SUB100 Imobiliárias"
            />
          </NuxtLink>

          <h3 class="mt-[19px] text-lg font-bold text-ink">Localização</h3>
          <p class="mt-[2px] text-base leading-[1.4] font-medium text-ink">
            Rua Machado de Assis, 621<br />
            Zona 06 - CEP 87015-580<br />
            Maringá - PR
          </p>
          <a
            :href="mapsHref"
            target="_blank"
            rel="noopener"
            class="mt-5 inline-flex h-[52px] w-[196px] items-center justify-center rounded-[5px] border border-brand text-sm font-bold text-brand hover:bg-brand/5"
          >
            Como chegar
          </a>
        </div>

        <div class="flex flex-col items-start desktop-compact:items-center desktop-compact:justify-self-center">
          <h3 class="text-lg font-bold text-ink">Siga nas redes sociais</h3>
          <div class="mt-[28px] flex items-center gap-[29px]">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center hover:opacity-80"
            >
              <img :src="social.icon" :width="social.width" :height="social.height" alt="" aria-hidden="true" />
              <span class="sr-only">{{ social.label }}</span>
            </a>
          </div>
                <p class="mt-13 text-left text-sm leading-[1.74] text-ink desktop-compact:mx-auto desktop-compact:max-w-[505px] desktop-compact:text-center">
        Há 26 anos, a SUB100 Sistemas ajuda a realizar os sonhos de milhões de pessoas,
        conectando através do seu CRM e Site imobiliário a corretores, imobiliárias,
        loteadoras, incorporadoras e construtoras às pessoas que procuram um novo lugar
        para morar ou investir
      </p>
        </div>

        <div class="flex flex-col items-start desktop-compact:items-end desktop-compact:justify-self-end">
          <h3 class="text-lg font-bold text-ink">Comercial</h3>
          <p class="mt-[18px] text-base text-ink">
            <a href="tel:+554430325200" class="hover:text-brand">44 3032-5200</a>
          </p>
          <div class="mt-14 flex flex-col items-start gap-[13px] text-sm font-medium text-ink desktop-compact:items-end">
            <NuxtLink to="/lgpd/termos-de-uso/" class="hover:text-brand">Termos de uso</NuxtLink>
            <NuxtLink to="/lgpd/politica-de-privacidade/" class="hover:text-brand">
              Política de privacidade
            </NuxtLink>
          </div>

          <button
            type="button"
            aria-label="Alternar tema claro/escuro"
            class="mt-[52px] inline-flex size-6 items-center justify-center hover:opacity-70"
          >
            <img src="/icons/icone-modo-escuro.svg" width="24" height="24" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>



      <div class="mt-16 flex flex-col items-start text-left text-sm text-[#595959] desktop-compact:items-center desktop-compact:text-center">
        <p class="inline-flex flex-wrap items-center justify-start gap-1 desktop-compact:justify-center">
          <span>© 2026 <strong class="font-bold">SUB100</strong> Imobiliárias</span>
          <img src="/icons/icone-coracao-footer.svg" width="14" height="14" alt="" aria-hidden="true" />
          by
          <a href="https://sub100sistemas.com.br/" target="_blank" rel="noopener" class="hover:text-brand">
            <strong class="font-bold">SUB100</strong> Sistemas
          </a>
        </p>
        <p class="mt-1 text-xs italic">CNPJ: 11.528.518/0001-19</p>
      </div>
    </div>
  </footer>
</template>
