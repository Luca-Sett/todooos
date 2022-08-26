<template>
  <div class="min-h-[200vh]">
    <Heading>home</Heading>
    <Info>
      This will eventually be a bejazzled marketing page with all the fancy
      features to sell this amazing product.
    </Info>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "guest",
  layout: "marketing",
});

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Turbocharge your productivity with todooos and get stuff done.",
    },
  ],
});
</script>
