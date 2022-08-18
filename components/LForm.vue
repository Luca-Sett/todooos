<template>
  <form
    @submit.prevent="emit('submit')"
    class="max-w-form mx-auto blue-gradient rounded-3xl p-6"
  >
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-2"
    >
      <slot />

      <div class="flex flex-col gap-1 col-span-full">
        <div class="text-error h-6">
          <Transition name="fade">
            <div v-if="errorMessage">
              {{ errorMessage }}
            </div>
          </Transition>
        </div>
        <input
          type="submit"
          :value="loading ? 'Loading...' : buttonText"
          :class="loading ? '!cursor-default opacity-75' : ''"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
defineProps(["buttonText", "loading", "errorMessage"]);
</script>
