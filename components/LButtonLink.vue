<template>
  <button
    v-if="button"
    :type="submit ? 'submit' : 'button'"
    :disabled="loading"
    class="focus-ring font-medium"
    :class="{
      'hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg':
        primary,
      'relative after:absolute after:inset-0 after:scale-0 after:opacity-0 after:transition-all after:duration-300 hover:after:scale-100 hover:after:opacity-100 focus-visible:after:scale-100 focus-visible:after:opacity-100':
        tertiary,
      // text colour
      'hover:text-accent focus-visible:text-accent': !error && quaternary,
      'hover:text-error focus-visible:text-error': error && quaternary,
      'text-accent': !error && (secondary || tertiary),
      'text-error': error && (secondary || tertiary),
      // background colour
      'bg-accent': !error && primary,
      'bg-error': error && primary,
      'bg-accent/[15%] hover:bg-accent/25 focus-visible:bg-accent/25':
        !error && secondary,
      'bg-error/[15%] hover:bg-error/25 focus-visible:bg-error/25':
        error && secondary,
      'after:bg-accent/[15%]': !error && tertiary,
      'after:bg-error/[15%]': error && tertiary,
      // shadow
      'hover:shadow-accent/25 focus-visible:shadow-accent/25':
        !error && primary,
      'hover:shadow-error/25 focus-visible:shadow-error/25': error && primary,
      //
      'rounded-xl px-5 py-2': !tight && !icon,
      'rounded-lg px-2 py-[3px]': tight && !icon,
      'rounded-lg px-[3px] py-[3px]': icon,
      'after:rounded-xl': !tight && !icon && tertiary,
      'after:rounded-lg': (tight || icon) && tertiary,
      'pointer-events-none cursor-default brightness-50': loading || disabled,
    }"
  >
    <div class="relative grid place-items-center transition-colors">
      <div
        class="flex place-items-center gap-1"
        :class="{ 'text-transparent': loading }"
      >
        <slot />
      </div>

      <Transition name="fade">
        <div
          v-if="loading"
          class="absolute inset-0 grid place-items-center transition-colors"
        >
          <LLoadingSpinner class="h-6" />
        </div>
      </Transition>
    </div>
  </button>

  <NuxtLink
    v-else
    class="focus-ring inline-flex font-medium"
    :class="{
      'hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg':
        primary,
      'relative after:absolute after:inset-0 after:scale-0 after:opacity-0 after:transition-all after:duration-300 hover:after:scale-100 hover:after:opacity-100 focus-visible:after:scale-100 focus-visible:after:opacity-100':
        tertiary,
      // text colour
      'hover:text-accent focus-visible:text-accent': !error && quaternary,
      'hover:text-error focus-visible:text-error': error && quaternary,
      'text-accent': !error && (secondary || tertiary),
      'text-error': error && (secondary || tertiary),
      // background colour
      'bg-accent': !error && primary,
      'bg-error': error && primary,
      'bg-accent/[15%] hover:bg-accent/25 focus-visible:bg-accent/25':
        !error && secondary,
      'bg-error/[15%] hover:bg-error/25 focus-visible:bg-error/25':
        error && secondary,
      'after:bg-accent/[15%]': !error && tertiary,
      'after:bg-error/[15%]': error && tertiary,
      // shadow
      'hover:shadow-accent/25 focus-visible:shadow-accent/25':
        !error && primary,
      'hover:shadow-error/25 focus-visible:shadow-error/25': error && primary,
      //
      'rounded-xl px-5 py-2': !tight && !icon,
      'rounded-lg px-2 py-[3px]': tight && !icon,
      'rounded-lg px-[3px] py-[3px]': icon,
      'after:rounded-xl': !tight && !icon && tertiary,
      'after:rounded-lg': (tight || icon) && tertiary,
      'pointer-events-none cursor-default brightness-50': loading || disabled,
    }"
  >
    <div class="flex place-items-center gap-1">
      <slot />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const {
  primary = false,
  secondary = false,
  tertiary = false,
  quaternary = false,
  button = false,
  submit = false,
  tight = false,
  icon = false,
  error = false,
  loading = false,
  disabled = false,
} = defineProps<{
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
  button?: boolean;
  submit?: boolean;
  tight?: boolean;
  icon?: boolean;
  error?: boolean;
  loading?: boolean;
  disabled?: boolean;
}>();
</script>
