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

        <!-- <LSubmit :loading="loading" :button-text="buttonText" /> -->

        <!--  -->
        <input
          type="submit"
          :value="loading ? 'Loading...' : buttonText"
          :disabled="loading"
          class="text-blue text-off_white transition-all cursor-pointer font-semibold bg-accent shadow-md outline-none ring-transparent ring-2 ring-inset rounded-lg px-5 py-2 hover:shadow-lg focus-visible:shadow-lg focus-visible:ring-off_white/80"
          :class="loading ? '!cursor-default opacity-75' : ''"
        />
        <!-- 
          
         -->
      </div>
    </div>
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
defineProps(["buttonText", "loading", "errorMessage"]);
</script>
