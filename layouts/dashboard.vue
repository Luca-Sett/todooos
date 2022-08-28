<template>
  <div v-if="loading" class="grid h-screen place-items-center px-4">
    <div class="text-center">
      <div class="mb-2 grid place-items-center">
        <LLoadingSpinner class="h-8 w-8 text-accent" />
      </div>
      Fetching your todooos...
    </div>
  </div>

  <div v-else>
    <div class="hidden min-h-screen lg:flex">
      <Sidebar class="shrink-0" />
      <div class="w-full p-10">
        <slot />
      </div>
    </div>

    <div class="min-h-screen lg:hidden">
      <SidebarSmall />
      <div
        class="mx-auto box-content max-w-container px-container pb-20 pt-[calc(min(8%,5rem)_+_var(--navbar-height))]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const loading = ref(true);
const name = useState("userName", () => null);

const initialFetch = async () => {
  try {
    const { data: users, error: selectUsersError } = await supabase
      .from("users")
      .select("name")
      .eq("id", user.value.id);

    if (selectUsersError) throw selectUsersError;

    name.value = users[0].name;
  } catch (error) {
    console.log(error);
  }
  loading.value = false;
};

initialFetch();
</script>
