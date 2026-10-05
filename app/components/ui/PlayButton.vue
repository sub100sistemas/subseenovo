<script setup lang="ts">
type PlaySize = 'sm' | 'md' | 'lg'

interface PlayLayers {
  boxClass: string
  circleSize: number
  circleSrc?: string
  shadowSrc?: string
  triangleSrc: string
  triangleWidth: number
  triangleHeight: number
}

interface Props {
  size?: PlaySize
  circleSrc?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  circleSrc: undefined
})

const layersBySize: Record<PlaySize, PlayLayers> = {
  lg: {
    boxClass: 'size-[92px]',
    circleSize: 92,
    circleSrc: '/icons/videos-play-featured.svg',
    shadowSrc: '/icons/videos-play-featured-shadow.svg',
    triangleSrc: '/icons/videos-play-featured-triangle.svg',
    triangleWidth: 33.5048,
    triangleHeight: 24.7931
  },
  md: {
    boxClass: 'size-[64px]',
    circleSize: 64,
    circleSrc: '/icons/videos-play-demo.svg',
    triangleSrc: '/icons/videos-play-demo-triangle.svg',
    triangleWidth: 22.3502,
    triangleHeight: 17.2381
  },
  sm: {
    boxClass: 'size-[54px]',
    circleSize: 54,
    triangleSrc: '/icons/videos-profile-triangle.svg',
    triangleWidth: 19.6531,
    triangleHeight: 15.0407
  }
}

const layers = computed(() => layersBySize[props.size])
const circle = computed(() => props.circleSrc ?? layers.value.circleSrc)
</script>

<template>
  <span aria-hidden="true" class="relative inline-flex shrink-0 items-center justify-center" :class="layers.boxClass">
    <img
      v-if="layers.shadowSrc"
      :src="layers.shadowSrc"
      :alt="imageLabel(layers.shadowSrc)" :title="imageLabel(layers.shadowSrc)"
      width="140"
      height="140"
      class="pointer-events-none absolute -top-[14px] -left-[24px] block max-w-none"
    />
    <img
      v-if="circle"
      :src="circle"
      :alt="imageLabel(circle)" :title="imageLabel(circle)"
      :width="layers.circleSize"
      :height="layers.circleSize"
      class="absolute inset-0 block max-w-none"
    />
    <img
      :src="layers.triangleSrc"
      :alt="imageLabel(layers.triangleSrc)" :title="imageLabel(layers.triangleSrc)"
      :width="layers.triangleWidth"
      :height="layers.triangleHeight"
      class="relative block max-w-none rotate-90"
    />
  </span>
</template>
