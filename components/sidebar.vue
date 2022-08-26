<template>
  <div
    class="bg-blue shadow-lg w-72 rounded-3xl flex flex-col justify-between p-5 my-5 ml-5 overflow-y-scroll max-h-[calc(100vh-40px)]"
  >
    <div class="flex flex-col gap-10">
      <div class="text-center font-patua text-logo">
        <NuxtLink to="/dashboard/view-todooos" class="text-accent">
          todooos</NuxtLink
        >.
      </div>

      <div>
        <div class="font-bold text-off_white mb-2">TODOOOS</div>
        <div class="flex flex-col gap-2">
          <SidebarLink to="/dashboard/view-todooos">view todooos</SidebarLink>
          <SidebarLink to="/dashboard/test1">add todooo</SidebarLink>
          <SidebarLink to="/dashboard/test2">
            view archived todooos
          </SidebarLink>
        </div>
      </div>

      <div>
        <div class="font-bold text-off_white mb-2">PROFILE</div>
        <div class="flex flex-col gap-2">
          <SidebarLink to="/dashboard/test3">my profile</SidebarLink>
          <SidebarLink to="/dashboard/test4">my organisation</SidebarLink>
          <SidebarLink to="/dashboard/test5">my preferences</SidebarLink>
        </div>
      </div>
    </div>

    <LButton class="w-full mt-10" @click="signOut">
      {{ name }} | Sign out
    </LButton>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const name = useState("userName");

const signOut = async () => {
  try {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) throw signOutError;
  } catch (error) {
    console.log(error);
  }
};
</script>
