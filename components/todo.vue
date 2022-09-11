<template>
  <div
    class="rounded-lg bg-background transition-shadow"
    :class="{ 'shadow-lg': expanded }"
  >
    <button
      to="/"
      type="button"
      @click="expanded = !expanded"
      class="focus-ring grid w-full grid-cols-[auto_1fr_auto] gap-4 rounded-lg px-3 py-2 text-left sm:grid-cols-[24px_2fr_minmax(150px,1fr)_24px]"
      :class="
        expanded ? 'bg-foreground ' : 'bg-foreground-alt hover:bg-background'
      "
    >
      <LIcon
        @click.stop="done = !done"
        class="transition-colors"
        :class="
          done
            ? 'text-accent hover:text-accent/60'
            : 'text-text/60 hover:text-text'
        "
      >
        {{ done ? "task_alt" : "circle" }}
      </LIcon>

      <span
        class="font-medium transition-colors line-clamp-1"
        :class="{ 'text-text/80 line-through': done }"
      >
        {{ title }}
      </span>

      <span class="hidden text-text/80 sm:inline">{{ createdAt }}</span>

      <LIcon
        class="text-right transition-transform duration-300"
        :class="{ 'rotate-180': expanded }"
      >
        keyboard_arrow_down
      </LIcon>
    </button>

    <LExpand>
      <div v-if="expanded">
        <div class="p-6">
          <div class="text-subheading font-semibold">
            {{ title }}
          </div>

          <div class="py-8" v-if="description">{{ description }}</div>

          <div class="flex items-center justify-end gap-2">
            <LButtonLink secondary tight button @click="setEdit(true)">
              edit
              <LIcon>edit_note</LIcon>
            </LButtonLink>

            <LButtonLink secondary tight error button>
              delete
              <LIcon>delete</LIcon>
            </LButtonLink>
          </div>
        </div>
      </div>
    </LExpand>
  </div>

  <!-- edit modal -->
  <!-- just have one modal and conrol the data -->
  <LModal @close="setEdit(false)" :open="isEditOpen">
    <template #title> edit <LAccent>todooo</LAccent> </template>
  </LModal>
</template>

<script setup lang="ts">
const { done, title, createdAt, description } = defineProps<{
  done: boolean;
  title: string;
  createdAt: string;
  description: string;
}>();

const expanded = ref(false);

const isEditOpen = ref(false);
const setEdit = (edit: boolean) => (isEditOpen.value = edit);
</script>
