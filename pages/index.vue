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
  layout: "marketing-layout",
  middleware: "guest",
});
</script>
