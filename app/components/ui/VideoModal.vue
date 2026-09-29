<script setup lang="ts">
interface Props {
  modelValue: boolean
  videoId: string
  title: string
  eyebrow?: string
  closeLabel?: string
  aspect?: string
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: '',
  closeLabel: 'Fechar vídeo',
  aspect: '16/9'
})

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

const dialogEl = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const embedSrc = computed(
  () => `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
)
const titleId = useId()

let previousFocus: HTMLElement | null = null
let scrollLocked = false

const close = () => emit('update:modelValue', false)

const closeOnEmptyArea = (event: MouseEvent) => {
  if (event.target !== event.currentTarget) return
  if (window.matchMedia('(min-width: 62rem)').matches) return
  close()
}

const focusableItems = () =>
  Array.from(dialogEl.value?.querySelectorAll<HTMLElement>('button, iframe, a[href]') ?? [])

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }
  if (event.key !== 'Tab') return
  const items = focusableItems()
  if (!items.length) return
  const first = items[0]!
  const last = items[items.length - 1]!
  const active = document.activeElement
  if (event.shiftKey && (active === first || !dialogEl.value?.contains(active))) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && (active === last || !dialogEl.value?.contains(active))) {
    event.preventDefault()
    first.focus()
  }
}

const lockScroll = () => {
  const scrollbar = window.innerWidth - document.documentElement.clientWidth
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = scrollbar > 0 ? `${scrollbar}px` : ''
  scrollLocked = true
}

const unlockScroll = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  scrollLocked = false
}

watch(
  () => props.modelValue,
  async (isOpen) => {
    if (!import.meta.client) return
    if (isOpen) {
      previousFocus = document.activeElement as HTMLElement | null
      lockScroll()
      document.addEventListener('keydown', onKeydown)
      await nextTick()
      closeButton.value?.focus()
      return
    }
    document.removeEventListener('keydown', onKeydown)
    unlockScroll()
    previousFocus?.focus()
    previousFocus = null
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (!import.meta.client) return
  document.removeEventListener('keydown', onKeydown)
  if (scrollLocked) unlockScroll()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="video-modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#0b0d1f]/75 backdrop-blur-[6px] tablet-lg:p-8"
        @click.self="close"
      >
        <div
          ref="dialogEl"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          :style="{ '--video-ratio': aspect }"
          class="video-modal-panel relative flex w-full flex-col bg-[linear-gradient(112.44deg,#5d5fef_0%,#2e386b_100%)] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0px_32px_80px_rgba(11,13,31,0.55)] max-tablet-lg:h-dvh tablet-lg:block tablet-lg:max-w-[960px] tablet-lg:rounded-[28px] tablet-lg:p-5 tablet-lg:pb-5"
          @click.self="closeOnEmptyArea"
        >
          <div
            class="flex items-start justify-between gap-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[30px] tablet-lg:px-2 tablet-lg:pt-1 tablet-lg:pb-4"
          >
            <div class="min-w-0">
              <p
                v-if="eyebrow"
                class="text-[12px] leading-[18px] font-semibold tracking-[0.6px] text-white/70 uppercase"
              >
                {{ eyebrow }}
              </p>
              <h2
                :id="titleId"
                class="text-[16px] leading-[1.35] font-semibold text-white tablet:text-[20px]"
              >
                {{ title }}
              </h2>
            </div>
            <button
              ref="closeButton"
              type="button"
              :aria-label="closeLabel"
              class="flex size-11 shrink-0 cursor-pointer tablet-lg:size-10 items-center justify-center rounded-full bg-white text-brand shadow-[0px_8px_20px_rgba(11,13,31,0.3)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              @click="close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>

          <div
            class="flex min-h-0 flex-1 justify-center max-tablet-lg:[container-type:size] tablet-lg:block tablet-lg:flex-none"
            @click.self="closeOnEmptyArea"
          >
            <div
              class="overflow-hidden bg-black max-tablet-lg:aspect-(--video-ratio) max-tablet-lg:h-[min(100cqh,calc(100cqw/(var(--video-ratio))))] tablet-lg:aspect-video tablet-lg:w-full tablet-lg:rounded-[18px]"
            >
              <iframe
                :src="embedSrc"
                :title="title"
                class="size-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowfullscreen
                referrerpolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.video-modal-enter-active,
.video-modal-leave-active {
  transition: opacity 0.25s ease;
}

.video-modal-enter-active .video-modal-panel,
.video-modal-leave-active .video-modal-panel {
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease;
}

.video-modal-enter-from,
.video-modal-leave-to {
  opacity: 0;
}

.video-modal-enter-from .video-modal-panel,
.video-modal-leave-to .video-modal-panel {
  opacity: 0;
  transform: translateY(16px) scale(0.96);
}

@media (prefers-reduced-motion: reduce) {
  .video-modal-enter-active,
  .video-modal-leave-active,
  .video-modal-enter-active .video-modal-panel,
  .video-modal-leave-active .video-modal-panel {
    transition-duration: 0.01ms;
  }
}
</style>
