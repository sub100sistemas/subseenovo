<script setup lang="ts">
const isPastHero = ref(false)
const isFixedMode = ref(false)
const isVisible = ref(false)
const skipTransition = ref(false)
const headerEl = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

function setupObserver() {
  observer?.disconnect()
  const heroEl = document.getElementById('hero-main')
  if (!heroEl) return
  const headerHeight = headerEl.value?.offsetHeight ?? 85
  observer = new IntersectionObserver(
    ([entry]) => {
      isPastHero.value = !entry.isIntersecting
    },
    { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
  )
  observer.observe(heroEl)
}

onMounted(() => {
  setupObserver()
})

onBeforeUnmount(() => {
  observer?.disconnect()
})

const route = useRoute()
watch(() => route.fullPath, async () => {
  observer?.disconnect()
  observer = null
  isPastHero.value = false
  await nextTick()
  setupObserver()
})

watch(isPastHero, (pastHero) => {
  if (pastHero) {
    skipTransition.value = true
    isFixedMode.value = true
    isVisible.value = false
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        skipTransition.value = false
        isVisible.value = true
      })
    })
  } else {
    skipTransition.value = true
    isVisible.value = false
    isFixedMode.value = false
  }
})

const trackingClasses = computed(() => [
  skipTransition.value ? 'transition-none' : 'transition-all duration-300',
  isFixedMode.value
    ? ['fixed inset-x-0 top-0', isVisible.value ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0']
    : 'relative translate-y-0 opacity-100'
])
</script>

<template>
  <div
    class="pointer-events-none z-[60] ease-out"
    :class="trackingClasses"
    aria-hidden="true"
  >
    <div class="absolute inset-x-0 top-[64px] h-[34px] overflow-x-hidden mobile-lg:top-[85px]">
      <img
        src="/icons/header-sombra-divisoria.svg"
        width="1717"
        height="34"
        alt=""
        class="absolute top-[-15px] left-1/2 h-[34px] w-[1717px] max-w-none -translate-x-1/2"
      />
    </div>
  </div>

  <header ref="headerEl" class="z-50 bg-white ease-out" :class="trackingClasses" @dragstart.prevent>
    <HeaderBar :is-past-hero="isPastHero" />
  </header>

  <div class="transition-none" :class="isFixedMode ? 'h-[64px] mobile-lg:h-[85px]' : 'h-0'" aria-hidden="true" />
</template>
