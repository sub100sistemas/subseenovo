<script setup lang="ts">
interface GalleryPhoto {
  src: string
  alt: string
}

const photos: GalleryPhoto[] = [
  { src: '/images/eventos/eventos-galeria-foto-1.png', alt: 'Corretor sorrindo em um escritório com estante de livros' },
  { src: '/images/eventos/eventos-galeria-foto-2.png', alt: 'Corretora sorrindo em um ambiente com plantas' },
  { src: '/images/eventos/eventos-galeria-foto-3.png', alt: 'Corretora sorrindo com cabelo cacheado' },
  { src: '/images/eventos/eventos-galeria-foto-4.png', alt: 'Corretor sorrindo com a cidade ao fundo' },
  { src: '/images/eventos/eventos-galeria-foto-5.png', alt: 'Corretora sorrindo em um escritório com estante de livros' }
]
</script>

<template>
  <section id="eventos-galeria" class="border-y-8 border-brand bg-brand">
    <div class="flex overflow-x-auto">
      <div
        v-for="photo in photos"
        :key="photo.src"
        class="aspect-square w-[20%] min-w-[140px] shrink-0"
      >
        <NuxtImg
          :src="photo.src"
          :width="379"
          :height="360"
          sizes="mobile-lg:180px tablet:220px tablet-lg:300px desktop-full:379px"
          :alt="photo.alt"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
