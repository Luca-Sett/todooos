<template>
  <div v-if="pending" class="grid h-screen place-items-center px-4 text-center">
    <div>
      <div class="mb-2 grid place-items-center">
        <LAccent>
          <LLoadingSpinner class="w-8" />
        </LAccent>
      </div>
      fetching your <LAccent>todooos</LAccent>...
    </div>
  </div>

  <div
    v-else-if="error"
    class="grid h-screen place-items-center px-4 text-center"
  >
    <div>
      <LHeading>oops, catastrophic error 😭</LHeading>
      <div>
        Try refreshing the page. If the error persists, please contact us!
      </div>
    </div>
  </div>

  <div v-else>
    <SidebarSmall class="lg:hidden" />
    <div class="overflow-y-overlay fixed hidden h-screen py-5 pl-5 lg:block">
      <LSidebar class="min-h-[calc(100vh-2.5rem)] rounded-3xl" />
    </div>

    <div
      class="box-content px-container pb-20 pt-[calc(min(8%,5rem)_+_var(--navbar-height))] lg:mx-auto lg:max-w-container lg:p-14 lg:pl-[364px]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const name = useState("userName", () => null);

const { data, error, pending } = await useLazyFetch("/api/name", {
  headers: useRequestHeaders(["cookie"]),
});

watch(
  [data, error],
  ([newData, newError]) => {
    if (newError) console.log(newError);
    if (newData) name.value = newData.name;
  },
  { immediate: true }
);
</script>
