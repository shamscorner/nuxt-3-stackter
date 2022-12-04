<script setup lang="ts">
interface PropsType {
  title: string
}

const props = defineProps<PropsType>()
</script>

<template>
  <Section>
    <template #title>
      {{ props.title }}
    </template>

    <ul role="list" class="space-y-16">
      <slot></slot>
    </ul>
  </Section>
</template>
