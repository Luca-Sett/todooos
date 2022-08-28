<template>
  <div>
    <LHeading>view your <span class="text-accent">todooos</span></LHeading>
    <LInfo>
      Placeholder content for viewing your todooos. Logged in user is
      <span class="text-accent">{{ name }}</span
      >.
    </LInfo>
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
