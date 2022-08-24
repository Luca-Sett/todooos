<template>
  <NuxtLayout>
    <NuxtLoadingIndicator class="!bg-none !bg-accent" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const user = useSupabaseUser();

watch(user, (newUser, oldUser) => {
  if (newUser && !oldUser) return navigateTo("/dashboard/view-todooos");
  if (!newUser && oldUser) return navigateTo("/");
});
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Patua+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@40,500,0,0");

body {
  @apply bg-dark_blue;
  @apply text-off_white;
  overflow-y: scroll;
}

::selection {
  @apply bg-accent/30;
  @apply rounded;
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-blue;
  padding: 2px;
}
::-webkit-scrollbar-thumb {
  @apply bg-accent;
  border-radius: 4px;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
/*
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
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
