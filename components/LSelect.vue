<template>
  <Listbox>
    <div class="relative">
      <Transition name="dropdown" @enter="enter" @after-leave="leave">
        <ListboxOptions
          class="absolute top-5 z-20 flex w-full flex-col gap-1.5 rounded-lg bg-foreground-alt-2 p-1.5 pt-[1.625rem] shadow-xl outline-none"
        >
          <ListboxOption
            v-for="option in options"
            :key="option"
            :value="option"
            v-slot="{ active, selected }"
          >
            <div
              class="cursor-pointer rounded-md py-1 px-3 transition-colors"
              :class="{
                'bg-foreground': active,
                'bg-accent/[15%] text-accent': selected,
                'bg-accent/25': selected && active,
              }"
            >
              <span>{{ option }}</span>
            </div>
          </ListboxOption>
        </ListboxOptions>
      </Transition>

      <ListboxButton
        v-slot="{ value, open }"
        ref="btn"
        class="focus-ring relative flex w-full justify-between rounded-xl bg-foreground-alt-1 py-2 pl-5 pr-3 font-medium"
      >
        <span>{{ value }}</span>
        <LIcon
          class="transition-transform duration-300"
          :class="open ? 'rotate-180' : ''"
        >
          keyboard_arrow_down
        </LIcon>
      </ListboxButton>
    </div>
  </Listbox>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

defineProps(["options"]);

const btn = ref(null);
const enter = () => btn.value?.el.classList.add("z-30");
const leave = () => btn.value?.el.classList.remove("z-30");
</script>

<style scoped lang="postcss">
ul:focus-visible ~ button {
  @apply ring-text;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  scale: 0.9;
  translate: 0 -20px;
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  scale: 1;
  translate: 0 0;
}
</style>
