<template>
  <div class="grid place-items-center">
    <LHeading>uh oh, <span class="text-accent">404</span> error 😭</LHeading>
    <LInfo>This page can't be found.</LInfo>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
  layout: "marketing",
});

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
