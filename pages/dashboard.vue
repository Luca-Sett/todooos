<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "dashboard",
});
</script>
