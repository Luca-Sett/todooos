<template>
  <div>
    <Heading> View todooos </Heading>
    <Info>Here you can view stuff, {{ name }}.</Info>
  </div>
</template>

<script setup>
const name = useState("userName");
</script>
