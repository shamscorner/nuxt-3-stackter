<script setup lang="ts">
import { IconTwitter, IconGithub, IconLinkedin } from '#components'
</script>

<template>
  <div>
    <Head>
      <Title> Nuxt 3 starter template with TailwindCSS </Title>
      <Meta
        name="description"
        content="A starter template built using Nuxt 3, TailwindCSS, VueUse, Nuxt-image, HeadlessUI, Eslint, Prettier, etc."
      />
    </Head>

    <Container class="mt-9">
      <div class="max-w-2xl">
        <h1
          class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          Nuxt 3 starter template with TailwindCSS
        </h1>

        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A starter template built using Nuxt 3, TailwindCSS, VueUse,
          Nuxt-image, HeadlessUI, Eslint, Prettier, etc.
        </p>

        <Button class="mt-6 mb-8">Hello, 👋</Button>

        <div class="mt-6 flex gap-6">
          <SocialLink
            href="https://twitter.com/shamscorner"
            aria-label="Follow on Twitter"
            :icon="IconTwitter"
          />
          <SocialLink
            href="https://github.com/shamscorner"
            aria-label="Follow on GitHub"
            :icon="IconGithub"
          />
          <SocialLink
            href="https://linkedin.com/in/shamscorner/"
            aria-label="Follow on LinkedIn"
            :icon="IconLinkedin"
          />
        </div>
      </div>
    </Container>
  </div>
</template>
