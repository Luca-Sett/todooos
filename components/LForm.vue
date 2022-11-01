<template>
  <form
    @submit.prevent="emit('submit')"
    novalidate
    class="mx-auto max-w-form rounded-2xl bg-foreground px-4 pt-5 pb-4 shadow-lg sm:px-5 md:px-6"
  >
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-6 gap-y-3"
    >
      <slot />

      <div class="col-span-full mt-6 flex flex-col gap-1">
        <LExpand>
          <div v-if="errorMessage" class="mb-1 font-medium text-error">
            {{ errorMessage }}
          </div>
        </LExpand>

        <LButtonLink primary submit button :loading="loading">
          {{ buttonText }}
        </LButtonLink>
      </div>

      <slot name="footer" />
    </div>
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
defineProps(["buttonText", "loading", "errorMessage"]);
</script>
