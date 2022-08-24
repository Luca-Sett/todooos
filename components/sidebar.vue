<template>
  <div class="bg-blue w-72 rounded-3xl flex flex-col justify-between p-5">
    <div class="flex flex-col gap-10">
      <div class="text-center font-patua text-logo">
        <span class="text-accent">todooos</span>.
      </div>

      <div>
        <div class="font-bold text-off_white mb-2">TODOOOS</div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/dashboard/view-todooos"> View todooos </NuxtLink>
          <NuxtLink to="/dashboard/test1"> Add todooo </NuxtLink>
          <NuxtLink to="/dashboard/test2"> View archived todooos </NuxtLink>
        </div>
      </div>

      <div>
        <div class="font-bold text-off_white mb-2">PROFILE</div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/dashboard/test3"> View profile </NuxtLink>
          <NuxtLink to="/dashboard/test4"> View organisation </NuxtLink>
          <NuxtLink to="/dashboard/test5"> Edit preferences </NuxtLink>
        </div>
      </div>
    </div>

    <div>
      <!-- select -->
      <button class="w-full" @click="signOut">{{ name }} | Sign out</button>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const name = useState("name");

const signOut = async () => {
  try {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) throw signOutError;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped lang="postcss">
.router-link-active {
  @apply font-semibold;
  @apply bg-accent;
}
</style>
