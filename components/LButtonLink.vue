<template>
  <button
    v-if="button"
    :type="submit ? 'submit' : 'button'"
    :disabled="loading"
    class="font-medium outline-none ring-2 ring-inset ring-transparent focus-visible:ring-text dark:focus-visible:ring-lm-text"
    :class="{
      'bg-accent text-text transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:shadow-accent/25 dark:bg-lm-accent dark:hover:shadow-lm-accent/25 dark:focus-visible:shadow-lm-accent/25':
        primary,
      'bg-accent/[15%] text-accent transition-all hover:bg-accent/25 focus-visible:bg-accent/25 dark:bg-lm-accent/[15%] dark:text-lm-accent dark:hover:bg-lm-accent/25 dark:focus-visible:bg-lm-accent/25':
        secondary,
      'relative overflow-hidden text-accent transition-all after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:scale-0 after:bg-accent/[15%] after:opacity-0 after:transition-all after:duration-300 hover:after:scale-100 hover:after:opacity-100 focus-visible:after:scale-100 focus-visible:after:opacity-100 dark:text-lm-accent dark:after:bg-lm-accent/[15%]':
        tertiary,
      'transition-all hover:text-accent focus-visible:text-accent dark:hover:text-lm-accent dark:focus-visible:text-lm-accent':
        quaternary,
      'rounded-lg px-2 py-[3px]': tight,
      'rounded-xl px-5 py-2': !tight,
      'after:rounded-lg': tight && tertiary,
      'after:rounded-xl': !tight && tertiary,
      'pointer-events-none cursor-default': loading,
    }"
  >
    <Transition name="fade" mode="out-in">
      <div v-if="loading" class="grid place-items-center">
        <LLoadingSpinner v-if="primary" class="h-6 text-text" />
        <LAccent v-else>
          <LLoadingSpinner class="h-6" />
        </LAccent>
      </div>
      <div v-else class="grid place-items-center">
        <slot />
      </div>
    </Transition>
  </button>

  <NuxtLink
    v-else
    class="inline-flex font-medium outline-none ring-2 ring-inset ring-transparent focus-visible:ring-text dark:focus-visible:ring-lm-text"
    :class="{
      'bg-accent text-text transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:shadow-accent/25 dark:bg-lm-accent dark:hover:shadow-lm-accent/25 dark:focus-visible:shadow-lm-accent/25':
        primary,
      'bg-accent/[15%] text-accent transition-all hover:bg-accent/25 focus-visible:bg-accent/25 dark:bg-lm-accent/[15%] dark:text-lm-accent dark:hover:bg-lm-accent/25 dark:focus-visible:bg-lm-accent/25':
        secondary,
      'relative overflow-hidden text-accent transition-all after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:scale-0 after:bg-accent/[15%] after:opacity-0 after:transition-all after:duration-300 hover:after:scale-100 hover:after:opacity-100 focus-visible:after:scale-100 focus-visible:after:opacity-100 dark:text-lm-accent dark:after:bg-lm-accent/[15%]':
        tertiary,
      'transition-all hover:text-accent focus-visible:text-accent dark:hover:text-lm-accent dark:focus-visible:text-lm-accent':
        quaternary,
      'rounded-lg px-2 py-[3px]': tight,
      'rounded-xl px-5 py-2': !tight,
      'after:rounded-lg': tight && tertiary,
      'after:rounded-xl': !tight && tertiary,
    }"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
  button?: boolean;
  submit?: boolean;
  tight?: boolean;
  loading?: boolean;
}

const {
  primary = false,
  secondary = false,
  tertiary = false,
  quaternary = false,
  button = false,
  submit = false,
  tight = false,
  loading = false,
} = defineProps<Props>();
</script>
