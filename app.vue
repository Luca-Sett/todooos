<template>
  <NuxtLayout>
    <NuxtLoadingIndicator class="!bg-none !bg-accent" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup></script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,500,0,0");

input,
button,
a {
  @apply transition-all;
  @apply outline-none;
  @apply ring-transparent;
  @apply ring-2;
  @apply ring-inset;
  @apply focus:ring-pale-white;
}

body {
  @apply bg-light-background;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.layout-enter-from {
  transform: translateY(-20%);
  opacity: 0;
}

.layout-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}
</style>
