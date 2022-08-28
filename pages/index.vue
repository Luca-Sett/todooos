<template>
  <div class="min-h-[200vh]">
    <LHeading>home</LHeading>
    <LInfo>
      This is a temporary home page. It will eventually advertise this amazing
      app.
    </LInfo>
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
