<template>
  <div class="grid place-items-center h-full">
    <div class="text-center">
      <Heading>uh oh, <span class="text-accent">404</span> error 😭</Heading>
      <Info>This page can't be found.</Info>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "404",
  meta: [
    {
      name: "description",
      content: "Uh oh, this page couldn't be found.",
    },
  ],
});
</script>
