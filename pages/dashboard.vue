<!-- <template>
  <div class="overflow-hidden">
    <Transition name="fade" mode="out-in">
      <div v-if="dataLoaded">
        <div class="bg-light-background min-h-screen flex gap-10 p-10">
          <DashboardSidebar />
          <div class="py-6">
            <div>{{ name }}</div>
            <NuxtPage />
          </div>
        </div>
      </div>

      <div v-else class="h-screen grid place-items-center">
        <Heading>Loading...</Heading>
      </div>
    </Transition>
  </div>
</template> -->

<!-- <script setup>
definePageMeta({
  middleware: "dashboard",
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const name = useState("name", () => null);
const dataLoaded = ref(false);

console.log("user:", user.value ? "logged in" : "not logged in");

onMounted(async () => {
  if (process.client) {
    console.log("dashboard mounted");
    try {
      const { data: users, error: selectUsersError } = await supabase
        .from("users")
        .select("name")
        .eq("id", user.value.id);

      await new Promise((resolve) => setTimeout(resolve, 4000));

      if (selectUsersError) throw selectUsersError;

      name.value = users[0].name;
    } catch (error) {
      console.log(error);
    }

    dataLoaded.value = true;
  }
});
</script> -->

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
console.log("dashboard setup");
onMounted(() => console.log("dashboard mounted"));

definePageMeta({
  layout: "dashboard-layout",
  middleware: "dashboard",
});
</script>
