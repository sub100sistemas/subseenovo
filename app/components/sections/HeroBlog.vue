<script setup lang="ts">
interface Post {
  image: string
  width: number
  height: number
  alt: string
  title: string
  excerpt: string
  href: string
}

const posts: Post[] = [
  {
    image: '/images/blog/corretor-aperto-de-mao.png',
    width: 1536,
    height: 773,
    alt: 'Dois corretores se cumprimentando com aperto de mão',
    title: 'Como escolher um corretor',
    excerpt:
      'Encontrar o corretor certo pode fazer toda a diferença na compra ou na venda de um imóvel.',
    href: '/blog/como-escolher-um-corretor'
  },
  {
    image: '/images/blog/agrocorretor-plantacao-milho.png',
    width: 1024,
    height: 516,
    alt: 'Homem em plantação de milho segurando celular com mapa de imóvel rural',
    title: 'Inovação para Agrocorretores',
    excerpt: 'Corretores de imóveis inovam com a expansão do agronegócio no Brasil.',
    href: '/blog/inovacao-para-agrocorretores'
  },
  {
    image: '/images/blog/ilha-porto-rico-vista-aerea.png',
    width: 1536,
    height: 773,
    alt: 'Vista aérea de ilha com praias e rios em Porto Rico (Paraná)',
    title: 'Descubra Porto Rico',
    excerpt:
      'Paraíso da natureza, com praias de água doce e um dos maiores canteiros de obras do Paraná.',
    href: '/blog/descubra-porto-rico'
  }
]
</script>

<template>
  <section id="blog" class="section-py relative overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[206px]" aria-hidden="true">
      <img
        src="/icons/hero-blog-onda-decorativa-branca.svg"
        width="1920"
        height="173"
        alt=""
        class="absolute"
        style="left: -1px; top: 11px; width: 1920px; height: 173.455px; transform: rotate(180deg) scaleY(-1); max-width: none"
      />
      <img
        src="/icons/hero-website-onda-decorativa-azul.svg"
        width="1920"
        height="191"
        alt=""
        class="absolute"
        style="left: -0.95px; top: 14.79px; width: 1919.95px; height: 190.853px; transform: rotate(180deg) scaleY(-1); max-width: none"
      />
    </div>

    <div class="container-page relative">
      <div class="mx-auto max-w-[1090px] text-center">
        <SectionTag label="Especialidade · BLOG DA SUB100" />
        <h2 class="mt-4">
          Tendências, dicas e oportunidades do <span class="text-brand">mercado imobiliário</span>
        </h2>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 tablet:grid-cols-2 desktop-compact:grid-cols-3 desktop-compact:gap-[45px]">
        <article
          v-for="post in posts"
          :key="post.href"
          class="flex flex-col overflow-hidden rounded-[20px] border border-ink/[0.06] bg-white shadow-[0px_10px_10px_rgba(0,0,0,0.04),0px_4px_3px_rgba(0,0,0,0.04)]"
        >
          <NuxtImg
            :src="post.image"
            :width="post.width"
            :height="post.height"
            sizes="100vw tablet:50vw desktop-compact:33vw"
            :alt="post.alt"
            class="aspect-[2/1] w-full shrink-0 object-cover"
            loading="lazy"
          />

          <div class="flex flex-1 flex-col px-[27px] pt-5 pb-6">
            <h3 class="text-[19px] leading-[1.2] font-bold tracking-[-0.095px] text-ink">
              {{ post.title }}
            </h3>
            <p class="mt-[10px] flex-1 text-base leading-[1.4] text-ink">{{ post.excerpt }}</p>

            <div class="mt-4 h-px bg-[#f3f4f6]" />
            <NuxtLink :to="post.href" class="mt-4 flex items-center gap-2 text-teal-link">
              <span class="text-base">Saiba mais</span>
              <span class="text-[19px] font-bold" aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
  <SectionDivider />
</template>
