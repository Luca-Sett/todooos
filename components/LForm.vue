<template>
  <form
    @submit.prevent="emit('submit')"
    novalidate
    class="max-w-form mx-auto bg-blue rounded-3xl p-6 shadow-lg"
  >
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-6 gap-y-2"
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

        <LSubmit :loading="loading" :button-text="buttonText" />
      </div>
    </div>
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
defineProps(["buttonText", "loading", "errorMessage"]);
</script>
