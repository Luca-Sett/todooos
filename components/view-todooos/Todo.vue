<template>
  <div
    class="rounded-lg transition"
    :class="isExpanded ? 'bg-background shadow-lg' : 'bg-transparent'"
  >
    <button
      to="/"
      type="button"
      @click="isExpanded = !isExpanded"
      class="focus-ring grid w-full grid-cols-[auto_1fr_auto] gap-4 rounded-lg px-3 py-2 text-left sm:grid-cols-[24px_2fr_minmax(150px,1fr)_24px]"
      :class="
        isExpanded
          ? 'bg-foreground'
          : 'bg-transparent hover:bg-background focus-visible:bg-background'
      "
    >
      <LIcon
        @click.stop="emit('toggleDone')"
        class="transition-colors"
        :class="
          todo.done
            ? 'text-accent hover:text-accent/60'
            : 'text-text/60 hover:text-text'
        "
      >
        {{ todo.done ? "task_alt" : "circle" }}
      </LIcon>

      <span
        class="font-medium transition-colors line-clamp-1"
        :class="{ 'text-text/80': todo.done }"
      >
        {{ todo.title }}
      </span>

      <span class="hidden text-text/80 sm:inline">{{ todo.createdAt }}</span>

      <LIcon
        class="text-right transition-transform duration-300"
        :class="{ 'rotate-180': isExpanded }"
      >
        keyboard_arrow_down
      </LIcon>
    </button>

    <LExpand>
      <div v-if="isExpanded">
        <div class="p-6">
          <div class="text-subheading font-semibold">
            {{ todo.title }}
          </div>

          <div class="pb-2 font-semibold uppercase text-text/80">
            {{ todo.createdAt }}
          </div>

          <div class="pt-4 pb-8" v-if="todo.description">
            {{ todo.description }}
          </div>

          <div class="flex items-center justify-end gap-2">
            <LButtonLink secondary tight button>
              edit <LIcon>edit_note</LIcon>
            </LButtonLink>

            <LButtonLink secondary tight error button>
              delete <LIcon>delete</LIcon>
            </LButtonLink>
          </div>
        </div>
      </div>
    </LExpand>
  </div>
</template>

<script setup lang="ts">
import { Todo } from "@/types/todo";

const { todo } = defineProps<{ todo: Todo }>();

const emit = defineEmits<{
  (event: "toggleDone"): void;
}>();

const isExpanded = ref(false);
const setExpanded = (value: boolean) => (isExpanded.value = value);
defineExpose({ setExpanded });
</script>
