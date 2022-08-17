<!--
  Marketing Page that Organisations will first see.
  For now, have a button which takes the user to the register page
-->

<template>
  <div>
    <Heading>Home</Heading>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "marketing",
  middleware: "guest",
});
</script>
