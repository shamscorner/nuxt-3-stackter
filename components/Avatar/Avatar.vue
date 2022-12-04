<script setup lang="ts">
interface PropsType {
  large?: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  large: false,
})
</script>

<template>
  <NuxtLink href="/" aria-label="Home" class="pointer-events-auto">
    <nuxt-img
      src="/images/avatar.jpg"
      alt=""
      :width="props.large ? '64px' : '36px'"
      :class="[
        'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
        props.large ? 'h-16 w-16' : 'h-9 w-9',
      ]"
    />
  </NuxtLink>
</template>
