<script setup lang="ts">
interface PropType {
  id?: string
}

const props = defineProps<PropType>()
</script>

<template>
  <section
    :aria-labelledby="id"
    class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
  >
    <div
      class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4"
    >
      <h2
        :id="props.id"
        class="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
      >
        <slot name="title"></slot>
      </h2>
      <div class="md:col-span-3">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
