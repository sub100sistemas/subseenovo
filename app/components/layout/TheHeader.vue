<script setup lang="ts">
const SCROLL_THRESHOLD = 560
const isPastHero = ref(false)
const isFixedMode = ref(false)
const isVisible = ref(false)
const skipTransition = ref(false)
const headerEl = ref<HTMLElement | null>(null)
const route = useRoute()

function updateFromScroll() {
  isPastHero.value = window.scrollY >= SCROLL_THRESHOLD
}

onMounted(() => {
  window.addEventListener('scroll', updateFromScroll, { passive: true })
  updateFromScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateFromScroll)
})

watch(() => route.fullPath, async () => {
  isPastHero.value = false
  await nextTick()
  updateFromScroll()
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
        alt="Divisor decorativo do cabeçalho" title="Divisor decorativo do cabeçalho"
        class="absolute top-[-15px] left-1/2 h-[34px] w-[1717px] max-w-none -translate-x-1/2"
      />
    </div>
  </div>

  <header ref="headerEl" class="z-50 bg-white ease-out" :class="trackingClasses" @dragstart.prevent>
    <HeaderBar :is-past-hero="isPastHero" />
  </header>

  <div class="transition-none" :class="isFixedMode ? 'h-[64px] mobile-lg:h-[85px]' : 'h-0'" aria-hidden="true" />
</template>
