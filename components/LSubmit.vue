<template>
  <input
    type="submit"
    :value="loading ? 'Loading...' : buttonText"
    :disabled="loading"
    class="transition-all px-5 py-2 cursor-pointer font-semibold bg-accent text-white shadow-md rounded-lg outline-none ring-transparent ring-2 ring-inset hover:shadow-lg focus-visible:shadow-lg focus-visible:ring-off_white/80"
    :class="loading ? '!cursor-default opacity-75' : ''"
  />
</template>

<script setup>
defineProps(["loading", "buttonText"]);
</script>
