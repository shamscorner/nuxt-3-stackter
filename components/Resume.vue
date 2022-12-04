<script setup lang="ts">
import PlanetariaLogo from '~/assets/images/logos/planetaria.svg'
import AirbnbLogo from '~/assets/images/logos/airbnb.svg'
import FacebookLogo from '~/assets/images/logos/facebook.svg'
import StarbucksLogo from '~/assets/images/logos/starbucks.svg'

interface DateTimeFormatType {
  label: string
  dateTime: string | number
}

interface ResumeRoleType {
  company: string
  title: string
  logo: string
  start: DateTimeFormatType | string
  end: DateTimeFormatType | string
}

const resume: ResumeRoleType[] = [
  {
    company: 'Planetaria',
    title: 'CEO',
    logo: PlanetariaLogo,
    start: '2019',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Airbnb',
    title: 'Product Designer',
    logo: AirbnbLogo,
    start: '2014',
    end: '2019',
  },
  {
    company: 'Facebook',
    title: 'iOS Software Engineer',
    logo: FacebookLogo,
    start: '2011',
    end: '2014',
  },
  {
    company: 'Starbucks',
    title: 'Shift Supervisor',
    logo: StarbucksLogo,
    start: '2008',
    end: '2011',
  },
]
</script>

<template>
  <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <IconBriefcase class="h-6 w-6 flex-none" />
      <span class="ml-3">Work</span>
    </h2>
    <ol class="mt-6 space-y-4">
      <li
        v-for="(role, roleIndex) in resume"
        :key="roleIndex"
        class="flex gap-4"
      >
        <div
          class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
        >
          <img :src="role.logo" alt="" class="h-7 w-7" />
        </div>
        <dl class="flex flex-auto flex-wrap gap-x-2">
          <dt class="sr-only">Company</dt>
          <dd
            class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            {{ role.company }}
          </dd>
          <dt class="sr-only">Role</dt>
          <dd class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ role.title }}
          </dd>
          <dt class="sr-only">Date</dt>
          <dd
            class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            :aria-label="`${
              typeof role.start === 'string' ? role.start : role.start.label
            } until ${
              typeof role.end === 'string' ? role.end : role.end.label
            }`"
          >
            <time
              :dateTime="
                typeof role.start === 'string'
                  ? role.start
                  : role.start.dateTime
              "
            >
              {{
                typeof role.start === 'string' ? role.start : role.start.label
              }}
            </time>
            {{ ' ' }} <span aria-hidden="true"> — </span> {{ ' ' }}
            <time
              :dateTime="
                typeof role.end === 'string' ? role.end : role.end.dateTime
              "
            >
              {{ typeof role.end === 'string' ? role.end : role.end.label }}
            </time>
          </dd>
        </dl>
      </li>
    </ol>
    <Button href="#" variant="secondary" class="group mt-6 w-full">
      Download CV
      <IconArrowDown
        class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
      />
    </Button>
  </div>
</template>
