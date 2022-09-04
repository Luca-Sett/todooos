<template>
  <div class="min-h-[200vh]">
    <LHeading>home</LHeading>
    <LInfo>
      This is a temporary home page. It will eventually advertise this amazing
      app.
    </LInfo>
    <div class="flex gap-2">
      <LButtonLink primary button>primary</LButtonLink>
      <LButtonLink secondary button>secondary</LButtonLink>
      <LButtonLink tertiary button>tertiary</LButtonLink>
      <LButtonLink quaternary button>quaternary</LButtonLink>
    </div>
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
