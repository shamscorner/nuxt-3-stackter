<script setup lang="ts">
import { NuxtLink } from '#components'

interface PropsType {
  href: string
}

const props = defineProps<PropsType>()
</script>

<template>
  <li>
    <HeadlessPopoverButton :as="NuxtLink" :href="props.href" class="block py-2">
      <slot></slot>
    </HeadlessPopoverButton>
  </li>
</template>
