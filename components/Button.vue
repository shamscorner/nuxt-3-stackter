<script setup lang="ts">
import { NuxtLink } from '#components'

interface PropsType {
  variant?: 'primary' | 'secondary'
  href?: string | null
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: 'primary',
  href: null,
})

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}
</script>

<template>
  <component
    :is="props.href ? NuxtLink : 'button'"
    :href="props.href"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
      variantStyles[variant],
    ]"
  >
    <slot></slot>
  </component>
</template>
