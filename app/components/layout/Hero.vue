<script setup lang="ts">
type StyleValue = string | Record<string, string | number>

export interface HeroModuleIcon {
  src: string
  iconStyle?: string
  shadowClass?: string
}

interface Props {
  sectionId?: string
  sectionClass?: string
  sectionStyle?: StyleValue
  containerClass?: string
  frameClass?: string
  rowClass?: string
  aspectClass?: string
  gapClass?: string
  topClass?: string
  heightClass?: string
  dividerSrc?: string
  dividerClass?: string
  dividerStyle?: StyleValue
  mobileDividerSrc?: string
  mobileDividerClass?: string
  badgeSrc?: string
  badgeIconStyle?: string
  badgeIconClass?: string
  moduleIcons?: HeroModuleIcon[]
  contentGap?: string
  contentPad?: string
}

withDefaults(defineProps<Props>(), {
  sectionClass: 'relative overflow-hidden',
  sectionStyle: undefined,
  containerClass: 'container-page relative z-10',
  frameClass: 'relative w-full pt-10 pb-0 tablet-lg:pt-0',
  rowClass:
    'flex flex-col items-start tablet-lg:absolute tablet-lg:inset-x-0 tablet-lg:flex-row tablet-lg:items-center tablet-lg:gap-[5px]',
  aspectClass: 'tablet-lg:aspect-[1401/528]',
  gapClass: 'gap-10',
  topClass: 'tablet-lg:top-[1.33%]',
  heightClass: 'tablet-lg:h-[86.36%]',
  dividerClass: 'pointer-events-none absolute hidden max-w-none tablet-lg:block',
  dividerStyle: () => ({
    top: '61.93%',
    height: '38.07%',
    left: 'calc(50% - 50vw)',
    width: '100vw',
  }),
  mobileDividerClass: 'pointer-events-none mt-8 block w-full max-w-none tablet-lg:hidden',
  badgeSrc: undefined,
  badgeIconStyle: 'width: 58%; height: 46%',
  badgeIconClass: '',
  moduleIcons: undefined,
  contentGap: 'gap-[38px]',
  contentPad: '',
})
</script>

<template>
  <section :id="sectionId" :class="sectionClass" :style="sectionStyle">
    <div :class="containerClass">
      <div :class="[frameClass, aspectClass]">
        <div :class="[rowClass, gapClass, topClass, heightClass]">
          <slot name="content">
            <div :class="['relative flex w-full flex-col items-start tablet-lg:w-[48.18%]', contentGap, contentPad]">
              <div
                v-if="badgeSrc"
                class="absolute top-0 right-0 flex size-9 items-center justify-center rounded-[6px] border border-brand bg-[#e8e8fd] tablet-lg:hidden"
              >
                <img
                  :src="badgeSrc"
                  alt=""
                  aria-hidden="true"
                  :class="badgeIconClass"
                  :style="badgeIconStyle"
                />
              </div>

              <div>
                <h1 class="font-['Poppins'] text-[32px] leading-[1.2] font-bold text-ink tablet-lg:text-[30px] desktop-full:text-[42px]">
                  <slot name="heading" />
                </h1>
                <p class="mt-[13px] max-w-[520px] font-['Poppins'] text-[16px] leading-[1.4] text-ink tablet-lg:max-w-[675px] desktop-full:text-[24px]">
                  <slot name="description" />
                </p>
              </div>

              <div v-if="moduleIcons?.length" class="relative z-[1] flex items-center gap-[15px]">
                <div
                  v-for="(icon, i) in moduleIcons"
                  :key="i"
                  class="flex h-[30px] w-[27.887px] items-center justify-center rounded-[4px] bg-brand"
                  :class="icon.shadowClass ?? 'shadow-[0px_10px_20px_rgba(93,95,239,0.4)]'"
                >
                  <img :src="icon.src" alt="" aria-hidden="true" :style="icon.iconStyle" />
                </div>
              </div>
            </div>
          </slot>

          <div class="relative w-full tablet-lg:w-[51.46%]" style="aspect-ratio: 721 / 456">
            <slot name="visual" />
          </div>
        </div>

        <img
          v-if="dividerSrc"
          :src="dividerSrc"
          alt=""
          aria-hidden="true"
          :class="dividerClass"
          :style="dividerStyle"
        />
      </div>
    </div>

    <img
      v-if="mobileDividerSrc"
      :src="mobileDividerSrc"
      alt=""
      aria-hidden="true"
      :class="mobileDividerClass"
    />
  </section>
</template>
