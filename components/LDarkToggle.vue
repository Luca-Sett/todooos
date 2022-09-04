<template>
  <LButtonLink quaternary button @click="toggleDark()">
    <Transition name="spin" mode="out-in">
      <span v-if="isDark" class="material-symbols-rounded">dark_mode</span>
      <span v-else class="material-symbols-rounded">light_mode</span>
    </Transition>
  </LButtonLink>
</template>

<script setup>
const isDark = useDark({
  valueDark: "",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.spin-enter-active {
  transition: transform 0.3s ease-out;
}
.spin-leave-active {
  transition: transform 0.3s ease-in;
}
.spin-leave-to {
  transform: rotate(180deg);
}
.spin-enter-from {
  transform: rotate(-180deg);
}
</style>
