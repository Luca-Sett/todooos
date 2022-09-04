<template>
  <div class="h-[200vh]">
    <LHeading>view your <LAccent>todooos</LAccent></LHeading>
    <LInfo>
      Placeholder content for viewing your todooos. Logged in user is
      <LAccent>{{ name }}</LAccent
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
