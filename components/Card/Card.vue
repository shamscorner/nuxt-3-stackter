<script setup lang="ts">
interface PropsType {
  as: unknown
}

const props = defineProps<PropsType>()
</script>

<template>
  <component :is="props.as" class="group relative flex flex-col items-start">
    <slot></slot>
  </component>
</template>
