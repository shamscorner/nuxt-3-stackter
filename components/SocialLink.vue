<script setup lang="ts">
interface PropsType {
  icon: unknown
}

const props = defineProps<PropsType>()
</script>

<template>
  <NuxtLink
    class="group -m-1 flex items-center gap-4 p-1 text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
  >
    <component
      :is="props.icon"
      class="inline-block h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
    />
    <slot></slot>
  </NuxtLink>
</template>
