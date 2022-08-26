<template>
  <button
    type="submit"
    :disabled="loading"
    class="grid place-items-center transition-all py-2 font-semibold bg-accent text-white shadow-md rounded-lg outline-none ring-transparent ring-2 ring-inset hover:shadow-lg focus-visible:shadow-lg focus-visible:ring-off_white/80"
    :class="loading ? '!cursor-default' : ''"
  >
    <Transition name="fade" mode="out-in">
      <LoadingSpinner v-if="loading" class="text-white h-6" />
      <span v-else>{{ buttonText }}</span>
    </Transition>
  </button>
</template>

<script setup>
defineProps(["loading", "buttonText"]);
</script>
