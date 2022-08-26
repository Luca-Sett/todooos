<template>
  <NuxtLoadingIndicator class="!bg-none !bg-accent" />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- logged in -->
  <!-- <div v-if="user" class="min-h-screen flex">
    <Sidebar class="shrink-0" />
    <div class="w-full p-10">
      <NuxtPage />
    </div>
  </div> -->

  <!-- logged out -->
  <!-- <div v-else class="min-h-screen">
    <Navbar />
    <div
      class="max-w-container px-container mx-auto box-content pb-16 pt-[calc(4rem_+_var(--navbar-height))]"
    >
      <NuxtPage />
    </div>
  </div> -->
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
  overflow-y: overlay;
  overflow-x: hidden;
}

::selection {
  @apply bg-accent/30;
  @apply rounded;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-blue;
  @apply bg-dark_blue;
  padding: 2px;
}
::-webkit-scrollbar-thumb {
  @apply bg-accent;
  border-radius: 4px;
}

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms;
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
