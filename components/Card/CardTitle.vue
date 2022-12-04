<script setup lang="ts">
interface PropsType {
  as: string
  href?: string
}

const props = defineProps<PropsType>()
</script>

<template>
  <component
    :is="props.as"
    class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
  >
    <CardLink v-if="props.href" :href="props.href">
      <slot></slot>
    </CardLink>
    <slot v-else></slot>
  </component>
</template>
