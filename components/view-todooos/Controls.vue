<template>
  <div class="mb-4 flex flex-col gap-4">
    <div
      class="grid max-w-[863px] grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-2 gap-y-3"
    >
      <div class="flex flex-col gap-1">
        <div class="font-semibold text-text/80">FILTER</div>
        <LSelect
          :options="filterByOptions"
          v-model="filterBy"
          @update:model-value="updateSearch"
        />
      </div>

      <div class="flex flex-col gap-1">
        <div class="font-semibold text-text/80">ORDER BY</div>
        <LSelect
          :options="orderByOptions"
          v-model="orderBy"
          @update:model-value="updateSearch"
        />
      </div>

      <div>
        <LTextInput
          v-model="searchQuery"
          @input="debounce(updateSearch, 500)"
          _for="search"
          label="SEARCH"
          placeholder="search"
        />
      </div>
    </div>

    <div class="flex gap-2">
      <LButtonLink tight tertiary button @click="expandAll">
        expand all
        <LIcon>expand_more</LIcon>
      </LButtonLink>

      <LButtonLink tight tertiary button @click="collapseAll">
        collapse all
        <LIcon>expand_less</LIcon>
      </LButtonLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FilterByOption,
  OrderByOption,
  filterByOptions,
  orderByOptions,
} from "~~/types/todo";

const filterBy = ref<FilterByOption>("all");
const orderBy = ref<OrderByOption>("newest first");
const searchQuery = ref("");

const emit = defineEmits<{
  (
    event: "updateSearch",
    filterBy: FilterByOption,
    orderBy: OrderByOption,
    search: string
  ): void;
  (event: "setAllExpanded", value: boolean): void;
}>();

const updateSearch = () =>
  emit("updateSearch", filterBy.value, orderBy.value, searchQuery.value);
const expandAll = () => emit("setAllExpanded", true);
const collapseAll = () => emit("setAllExpanded", false);
</script>
