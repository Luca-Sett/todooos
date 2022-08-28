<template>
  <button
    type="submit"
    :disabled="loading"
    class="grid place-items-center rounded-lg bg-accent py-2 font-medium text-text shadow-md outline-none ring-2 ring-inset ring-transparent transition-all hover:shadow-lg focus-visible:shadow-lg focus-visible:ring-text/80"
    :class="loading ? '!cursor-default' : ''"
  >
    <Transition name="fade" mode="out-in">
      <LLoadingSpinner v-if="loading" class="h-6 text-text" />
      <span v-else>{{ buttonText }}</span>
    </Transition>
  </button>
</template>

<script setup>
defineProps(["loading", "buttonText"]);
</script>
