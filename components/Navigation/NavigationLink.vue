<script setup lang="ts">
interface PropsType {
  href: string
}

const props = defineProps<PropsType>()
</script>

<template>
  <NuxtLink
    :href="props.href"
    class="transition hover:text-teal-500 dark:hover:text-teal-400"
  >
    <slot></slot>
  </NuxtLink>
</template>
