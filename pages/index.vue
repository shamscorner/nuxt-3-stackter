<script setup lang="ts">
import {
  IconTwitter,
  IconInstagram,
  IconGithub,
  IconLinkedin,
} from '#components'
</script>

<template>
  <div>
    <Head>
      <Title>
        Spencer Sharp - Software designer, founder, and amateur astronaut
      </Title>
      <Meta
        name="description"
        content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
      />
    </Head>

    <Container class="mt-9">
      <div class="max-w-2xl">
        <h1
          class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        >
          Software designer, founder, and amateur astronaut.
        </h1>

        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        <div class="mt-6 flex gap-6">
          <SocialLink
            href="https://twitter.com"
            aria-label="Follow on Twitter"
            :icon="IconTwitter"
          />
          <SocialLink
            href="https://instagram.com"
            aria-label="Follow on Instagram"
            :icon="IconInstagram"
          />
          <SocialLink
            href="https://github.com"
            aria-label="Follow on GitHub"
            :icon="IconGithub"
          />
          <SocialLink
            href="https://linkedin.com"
            aria-label="Follow on LinkedIn"
            :icon="IconLinkedin"
          />
        </div>
      </div>
    </Container>

    <Photos />

    <Container class="mt-24 md:mt-28">
      <div
        class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
      >
        <div class="flex flex-col gap-16">Cool Articles list</div>
        <div class="space-y-10 lg:pl-16 xl:pl-24">
          <Newsletter />
          <Resume />
        </div>
      </div>
    </Container>
  </div>
</template>
