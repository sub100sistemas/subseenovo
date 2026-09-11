<script setup lang="ts">
import testimonialsData from '~/data/testimonials.json'

interface TestimonialLogo {
  src: string
  width: number
  height: number
  alt: string
}

interface TestimonialItem {
  id: string
  rating: number
  text: string
  logo: TestimonialLogo[]
  name: string
  role: string
  company: string
  order: number
}

const testimonialIds = ['crm-temporada-joao-calcada', 'crm-geral-cleveson-costa']

const allTestimonials = testimonialsData.testimonials as TestimonialItem[]
const testimonialMap = new Map(allTestimonials.map((item) => [item.id, item]))

const testimonials = computed(() =>
  testimonialIds
    .map((id) => testimonialMap.get(id))
    .filter((item): item is TestimonialItem => Boolean(item))
)
</script>

<template>
  <Testimonials section-id="apis-depoimentos" :testimonials="testimonials" />
</template>
