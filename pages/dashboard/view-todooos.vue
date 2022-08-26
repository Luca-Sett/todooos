<template>
  <div>
    <Heading> View todooos </Heading>
    <Info>Here you can view stuff, {{ name }}.</Info>
  </div>
</template>

<script setup>
useHead({
  title: "View Todooos",
  meta: [
    {
      name: "description",
      content: "View your todooos and get stuff done.",
    },
  ],
});

const name = useState("userName");
</script>
