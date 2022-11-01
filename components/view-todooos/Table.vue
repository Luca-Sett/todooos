<template>
  <ViewTodooosControls
    @updateSearch="updateSearch"
    @set-all-expanded="setAllExpanded"
  />

  <div
    class="relative overflow-hidden rounded-xl bg-foreground-alt-1 shadow-lg"
  >
    <div
      class="grid w-full grid-cols-[24px_1fr_24px] gap-4 rounded-xl bg-foreground px-5 py-2 font-semibold uppercase text-text/80 sm:grid-cols-[24px_2fr_minmax(150px,1fr)_24px]"
    >
      <LIcon>check</LIcon>
      <span>todooo</span>
      <span class="hidden sm:block">created</span>
      <span></span>
    </div>

    <Transition name="fade" mode="out-in">
      <div v-if="todosStore.todos.length === 0" class="p-8 text-center">
        <div class="mb-4 text-subheading font-medium">
          hurrah, you're all done! 🥳
        </div>
        <LButtonLink to="/dashboard/add-todooo" secondary>
          add todooo
          <LIcon>add</LIcon>
        </LButtonLink>
      </div>

      <div v-else-if="filteredTodos.length === 0" class="p-8 text-center">
        <div class="mb-4 text-subheading font-medium">
          can't find any matches! 🔎
        </div>
        <div>Try changing your search and filter options.</div>
      </div>

      <TransitionGroup
        v-else
        tag="ul"
        name="list"
        class="relative flex flex-col gap-1.5 p-1.5"
      >
        <ViewTodooosTodo
          v-for="todo in todosStore.todos"
          ref="todoRefs"
          :todo="todo"
          :key="todo.id"
          @toggle-done="todo.done = !todo.done"
        />
      </TransitionGroup>
    </Transition>
  </div>

  <!-- <LModal @close="closeEdit" :open="isEditOpen">
    <template #title> edit <LAccent>todooo</LAccent> </template>

    <form class="flex flex-col gap-6" @submit.prevent="editTodo">
      <LTextInput
        v-model="editData.title"
        :v$="v$.title"
        _for="title"
        label="TITLE"
        placeholder="title"
      />

      <div class="flex flex-col gap-1">
        <label for="description" class="w-max font-semibold text-text/80">
          DESCRIPTION
        </label>
        <textarea
          id="description"
          v-model="editData.description"
          rows="4"
          class="resize-none appearance-none rounded-xl border-2 border-transparent bg-foreground-alt-1 px-[18px] py-1.5 outline-none transition-all focus:border-b-accent"
        ></textarea>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <LButtonLink secondary error button @click="closeEdit">
          cancel
          <LIcon>close</LIcon>
        </LButtonLink>
        <LButtonLink
          secondary
          submit
          button
          :disabled="!editHasChanged"
          :loading="editLoading"
        >
          update
          <LIcon>check</LIcon>
        </LButtonLink>
      </div>
    </form>
  </LModal> -->
</template>

<script setup lang="ts">
import { FilterByOption, OrderByOption } from "~~/types/todo";

const todosStore = useTodosStore();
const filteredTodos = ref([...todosStore.todos]); // REMOVE: maybe but in pinia store?

const updateSearch = (
  filterBy: FilterByOption,
  orderBy: OrderByOption,
  search: string
) => {
  console.log(filterBy, orderBy, search);
};

const todoRefs = ref([]);

const setAllExpanded = (value: boolean) =>
  todoRefs.value.forEach((todoRef) => todoRef.setExpanded(value));

// const calculateFilteredTodos = () => {
//   let filterPredicate;
//   if (selectedFilter.value === "all") filterPredicate = () => true;
//   else if (selectedFilter.value === "todo")
//     filterPredicate = (todo) => !todo.done;
//   else if (selectedFilter.value === "complete")
//     filterPredicate = (todo) => todo.done;

//   let searchPredicate;
//   if (search.value)
//     searchPredicate = (todo) => {
//       const title = todo.title.toLowerCase();
//       const description = todo.description.toLowerCase();
//       const searchValue = search.value.toLowerCase();
//       return title.includes(searchValue) || description.includes(searchValue);
//     };
//   else searchPredicate = () => true;

//   return fakeTodos.value.filter(
//     (todo) => filterPredicate(todo) && searchPredicate(todo)
//   );
// };

// const sortTodos = () => {
//   if (selectedOrder.value === "newest first")
//     filteredTodos.value = filteredTodos.value.sort((a, b) =>
//       b.createdAt.localeCompare(a.createdAt)
//     );
//   else if (selectedOrder.value === "oldest first")
//     filteredTodos.value = filteredTodos.value.sort((a, b) =>
//       a.createdAt.localeCompare(b.createdAt)
//     );
//   else if (selectedOrder.value === "todo")
//     filteredTodos.value = filteredTodos.value.sort((a, b) => a.done - b.done);
//   else if (selectedOrder.value === "complete")
//     filteredTodos.value = filteredTodos.value.sort((a, b) => b.done - a.done);
// };

// const updateSearch = () => (filteredTodos.value = calculateFilteredTodos());
</script>
