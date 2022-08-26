<template>
  <div v-if="loading" class="h-screen grid place-items-center px-4">
    <div class="text-center">
      <div class="mb-2 grid place-items-center">
        <LoadingSpinner class="text-accent w-8 h-8" />
      </div>
      Fetching your todooos...
    </div>
  </div>

  <div v-else class="min-h-screen flex">
    <Sidebar class="shrink-0" />
    <div class="w-full p-10">
      <slot />
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
