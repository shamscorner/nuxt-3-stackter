<script setup lang="ts">
interface PropsType {
  as?: string
  decorate?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  as: 'p',
  decorate: false,
})
</script>

<template>
  <component
    :is="props.as"
    :class="[
      'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
      { 'pl-3.5': props.decorate },
    ]"
  >
    <span
      v-if="props.decorate"
      class="absolute inset-y-0 left-0 flex items-center"
      aria-hidden="true"
    >
      <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
    </span>

    <slot></slot>
  </component>
</template>
