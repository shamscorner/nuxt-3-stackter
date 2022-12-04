<template>
  <footer class="mt-32">
    <Container>
      <template #outer>
        <hr class="border-t border-zinc-100 dark:border-zinc-700/40" />
      </template>

      <div
        class="flex flex-col items-center justify-between gap-6 pt-10 pb-16 sm:flex-row"
      >
        <div
          class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/projects">Projects</NavigationLink>
          <NavigationLink href="/speaking">Speaking</NavigationLink>
          <NavigationLink href="/uses">Uses</NavigationLink>
        </div>

        <p class="text-sm text-zinc-400 dark:text-zinc-500">
          &copy; {{ new Date().getFullYear() }} Spencer Sharp. All rights
          reserved.
        </p>
      </div>
    </Container>
  </footer>
</template>
