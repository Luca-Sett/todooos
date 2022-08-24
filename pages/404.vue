<template>
  <div class="grid place-items-center">
    <Heading>uh oh, <span class="text-accent">404</span> error 😭</Heading>
    <Info>This page can't be found.</Info>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "marketing-layout",
  middleware: "guest",
});
</script>
