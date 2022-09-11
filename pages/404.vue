<template>
  <div class="grid place-items-center text-center">
    <LHeading>uh oh, you've found the <LAccent>404</LAccent> page 😭</LHeading>
    <LInfo class="mt-2">
      Try checking the URL or
      <LButtonLink icon tertiary to="/">go home.</LButtonLink>
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
