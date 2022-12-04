<script setup lang="ts">
const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

const images = [
  '/images/photos/image-1.jpg',
  '/images/photos/image-2.jpg',
  '/images/photos/image-3.jpg',
  '/images/photos/image-4.jpg',
  '/images/photos/image-5.jpg',
]
</script>

<template>
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        v-for="(image, imageIndex) in images"
        :key="image"
        :class="[
          'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
          rotations[imageIndex % rotations.length],
        ]"
      >
        <nuxt-img
          :src="image"
          alt=""
          sizes="sm:288px md:500px"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
