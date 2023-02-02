<template>
  <div class="grid place-items-center text-center">
    <LHeading>uh oh, you've found the <LAccent>404</LAccent> page 😭</LHeading>
    <LInfo class="mt-2">
      Try checking the URL or go
      <NuxtLink
        to="/"
        class="underline decoration-dashed decoration-2 underline-offset-2 transition-colors hover:decoration-accent"
        >home</NuxtLink
      >.
    </LInfo>
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
