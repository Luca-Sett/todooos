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
  <div class="h-full">
    <NuxtPage />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "dashboard",
  layout: "dashboard",
});
</script>
