<script setup lang="ts">
interface PropType {
  id: string
  title: string
}

const props = defineProps<PropType>()
</script>

<template>
  <Section :id="props.id">
    <template #title>
      {{ props.title }}
    </template>

    <div class="space-y-16">
      <slot></slot>
    </div>
  </Section>
</template>
