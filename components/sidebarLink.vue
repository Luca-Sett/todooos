<template>
  <NuxtLink
    class="flex items-center justify-between rounded-lg py-2 pl-5 pr-3 outline-none ring-2 ring-inset ring-transparent transition-all focus-visible:ring-text"
  >
    <slot />
    <span class="material-symbols-rounded opacity-0 transition-opacity">
      keyboard_arrow_right
    </span>
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
