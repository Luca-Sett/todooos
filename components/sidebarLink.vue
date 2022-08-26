<template>
  <NuxtLink
    class="transition-all flex items-center justify-between pl-5 pr-2 py-2 rounded-lg outline-none ring-transparent ring-2 ring-inset focus-visible:ring-off_white/40 focus-visible:bg-dark_blue focus-visible:shadow-md hover:bg-dark_blue hover:shadow-md"
  >
    <slot />
    <span class="material-symbols-rounded transition-opacity opacity-0">
      keyboard_arrow_right
    </span>
  </NuxtLink>
</template>

<style scoped lang="postcss">
.router-link-active {
  @apply font-semibold;
  @apply bg-accent;
  @apply text-white;
  @apply shadow-md;
  @apply focus-visible:ring-off_white/80;
}

.router-link-active span {
  opacity: 1;
}
</style>
