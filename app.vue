<template>
  <NuxtLayout>
    <NuxtLoadingIndicator class="!bg-accent !bg-none" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} - Todooos.` : "Todooos."),
  htmlAttrs: {
    lang: "en",
  },
});

const user = useSupabaseUser();
watch(user, (newUser, oldUser) => {
  if (newUser && !oldUser) return navigateTo("/dashboard/view-todooos");
  if (!newUser && oldUser) return navigateTo("/");
});
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,500,0,0");

html {
  --navbar-height: 80px;
}

body {
  @apply bg-background text-text transition-colors dark:bg-lm-background dark:text-lm-text;
  overflow-y: overlay;
  overflow-x: hidden;
}

::selection {
  @apply bg-accent/20;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-track {
  @apply bg-transparent;
}
::-webkit-scrollbar-thumb {
  @apply bg-text;
  border-radius: 4px;
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to,
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
