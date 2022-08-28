<template>
  <div class="grid h-full place-items-center">
    <div class="text-center">
      <LHeading>uh oh, <span class="text-accent">404</span> error 😭</LHeading>
      <LInfo>This page can't be found.</LInfo>
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
