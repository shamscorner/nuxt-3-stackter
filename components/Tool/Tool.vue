<script setup lang="ts">
interface PropsType {
  href?: string
  title: string
}

const props = defineProps<PropsType>()
</script>

<template>
  <Card as="li">
    <CardTitle as="h3" :href="props.href">
      <slot name="title">
        {{ props.title }}
      </slot>
    </CardTitle>
    <CardDescription>
      <slot></slot>
    </CardDescription>
  </Card>
</template>
