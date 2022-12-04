<script setup lang="ts">
interface PropsType {
  href: string
  title: string
  description: string
  event: string
  cta: string
}

const props = defineProps<PropsType>()
</script>

<template>
  <Card as="article">
    <CardTitle as="h3" :href="props.href"> {{ props.title }} </CardTitle>
    <CardEyebrow decorate>{{ props.event }}</CardEyebrow>
    <CardDescription>{{ props.description }}</CardDescription>
    <CardCta>{{ props.cta }}</CardCta>
  </Card>
</template>
