<template>
  <NuxtLink
    class="transition-all px-5 py-2 rounded-lg outline-none ring-transparent ring-2 ring-inset"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="postcss">
.primary {
  @apply bg-accent;
  @apply shadow-md;
  @apply hover:shadow-lg;
  @apply focus-visible:shadow-lg;
  @apply focus-visible:ring-off_white/80;
}

.secondary {
  @apply bg-dark_blue;
  @apply shadow-md;
  @apply hover:shadow-lg;
  @apply focus-visible:shadow-lg;
  @apply focus-visible:ring-off_white/40;
}

.tertiary {
  @apply hover:text-accent;
  @apply focus-visible:text-accent;
  @apply focus-visible:ring-off_white/40;
}

.primary.router-link-active {
  @apply bg-accent;
}

.secondary.router-link-active {
  @apply bg-dark_blue;
}

.tertiary.router-link-active {
  @apply text-accent;
}
</style>
