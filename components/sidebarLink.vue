<template>
  <NuxtLink
    class="focus-ring flex items-center justify-between rounded-lg py-2 pl-5 pr-3"
  >
    <slot />
    <LIcon class="opacity-0 transition-opacity">keyboard_arrow_right</LIcon>
  </NuxtLink>
</template>

<style scoped lang="postcss">
.router-link-active {
  @apply font-medium;
  @apply bg-accent;
}

a:not(.router-link-active) {
  @apply hover:text-accent;
  @apply focus-visible:text-accent;
}

.router-link-active span {
  opacity: 1;
}
</style>
