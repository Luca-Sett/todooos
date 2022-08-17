<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["auth", "dashboard"],
});
</script>
