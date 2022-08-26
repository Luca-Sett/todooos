<template>
  <div v-if="loading" class="h-screen grid place-items-center px-4">
    <div class="text-center">
      <div class="mb-2 grid place-items-center">
        <LoadingSpinner class="text-accent w-8 h-8" />
      </div>
      Fetching your todooos...
    </div>
  </div>

  <div v-else>
    <div class="min-h-screen hidden lg:flex">
      <Sidebar class="shrink-0" />
      <div class="w-full p-10">
        <slot />
      </div>
    </div>

    <div class="min-h-screen lg:hidden">
      <SidebarSmall />
      <div
        class="max-w-container px-container mx-auto box-content pb-16 pt-[calc(4rem_+_var(--navbar-height))]"
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
