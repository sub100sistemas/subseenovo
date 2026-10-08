<script setup lang="ts">
interface Props {
  raysSrc?: string
  underlineSrc?: string
  wrapperClass?: string
  textClass?: string
  raysClass?: string
  underlineClass?: string
}

withDefaults(defineProps<Props>(), {
  raysSrc: undefined,
  underlineSrc: undefined,
  wrapperClass:
    'relative inline-block w-[4.2647em] align-baseline text-[1.2143em] leading-[1.12] font-extrabold tracking-[-0.025em] whitespace-nowrap',
  textClass: 'block bg-[linear-gradient(90deg,#5944ff,#00c5f0)] bg-clip-text text-transparent',
  raysClass: 'top-[0.1563em] left-[3.757em] h-[0.7165em] w-[0.5em]',
  underlineClass: 'top-[0.9853em] left-[1.4559em] h-[0.2353em] w-[3.0882em]'
})

useHead({
  link: [{ rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/poppins-800-latin.woff2', crossorigin: 'anonymous' }]
})
</script>

<template>
  <span :class="wrapperClass">
    <span :class="textClass"><slot /></span>
    <img
      v-if="underlineSrc"
      :src="underlineSrc"
      :alt="imageLabel(underlineSrc)"
      :title="imageLabel(underlineSrc)"
      aria-hidden="true"
      :class="['pointer-events-none absolute block max-w-none', underlineClass]"
    />
    <img
      v-if="raysSrc"
      :src="raysSrc"
      :alt="imageLabel(raysSrc)"
      :title="imageLabel(raysSrc)"
      aria-hidden="true"
      :class="['pointer-events-none absolute block max-w-none', raysClass]"
    />
  </span>
</template>
