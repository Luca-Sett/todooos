<template>
  <div
    class="overflow-y-overlay my-5 ml-5 flex max-h-[calc(100vh-40px)] w-72 flex-col justify-between rounded-3xl bg-foreground p-5 shadow-lg"
  >
    <div class="flex flex-col gap-10">
      <LButtonLink
        to="/dashboard/view-todooos"
        @click="close"
        tight
        class="mx-auto w-max font-patua text-logo"
      >
        <span class="text-accent">todooos</span>
        <span>.</span>
      </LButtonLink>

      <div>
        <div class="mb-2 font-medium">TODOOOS</div>
        <div class="flex flex-col gap-2">
          <SidebarLink @click="close" to="/dashboard/view-todooos">
            view todooos
          </SidebarLink>
          <SidebarLink @click="close" to="/dashboard/test1">
            add todooo
          </SidebarLink>
          <SidebarLink @click="close" to="/dashboard/test2">
            view archived todooos
          </SidebarLink>
        </div>
      </div>

      <div>
        <div class="mb-2 font-medium">PROFILE</div>
        <div class="flex flex-col gap-2">
          <SidebarLink @click="close" to="/dashboard/test3">
            my profile
          </SidebarLink>
          <SidebarLink @click="close" to="/dashboard/test4">
            my organisation
          </SidebarLink>
          <SidebarLink @click="close" to="/dashboard/test5">
            my preferences
          </SidebarLink>
        </div>
      </div>
    </div>

    <LButtonLink
      secondary
      button
      class="mt-10"
      @click="signOut"
      :loading="signOutLoading"
    >
      {{ name }} | Sign out
    </LButtonLink>
  </div>
</template>

<script setup>
const name = useState("userName");

const signOutLoading = ref(false);
const supabase = useSupabaseClient();
const signOut = async () => {
  signOutLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) throw signOutError;
  } catch (error) {
    console.log(error);
    signOutLoading.value = false;
  }
};
</script>
