<template>
  <div class="h-full">
    <NuxtPage />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "dashboard",
  layout: "dashboard",
});

useHead({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content:
        "Your todooos dashboard. View your todooos, create new todooos, and more.",
    },
  ],
});
</script>
