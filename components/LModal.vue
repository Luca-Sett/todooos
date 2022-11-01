<template>
  <TransitionRoot :show="open" as="template">
    <Dialog @close="emit('close')" class="relative z-50">
      <TransitionChild
        as="template"
        enter="ease duration-200"
        leave="ease duration-200"
        enter-from="opacity-0"
        leave-to="opacity-0"
        enter-to="opacity-100"
        leave-from="opacity-100"
      >
        <div class="fixed inset-0 bg-background/60" aria-hidden="true"></div>
      </TransitionChild>

      <div class="fixed inset-0 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="ease-in duration-200"
          leave="ease duration-200"
          enter-from="opacity-0 scale-50"
          leave-to="opacity-0  scale-50"
          enter-to="opacity-100 scale-110"
          class="transition-all"
        >
          <DialogPanel
            class="w-full max-w-sm rounded-2xl bg-foreground p-6 shadow-xl"
          >
            <DialogTitle class="text-center text-heading font-medium">
              <slot name="title" />
            </DialogTitle>

            <slot />
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

defineProps(["open"]);
const emit = defineEmits(["close"]);
</script>
