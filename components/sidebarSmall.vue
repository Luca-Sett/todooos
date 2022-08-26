<template>
  <div>
    <div class="bg-blue shadow-lg fixed w-full">
      <nav
        class="h-navbar max-w-container px-container mx-auto flex justify-between items-center box-content"
      >
        <NuxtLink to="/dashboard/view-todooos" class="font-patua text-logo">
          <span class="text-accent">todooos</span>
          <span>.</span>
        </NuxtLink>

        <LButton @click="isSidebarOpen = true">
          <span class="material-symbols-rounded !text-logo">menu</span>
        </LButton>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isSidebarOpen"
          class="lg:hidden z-[9998] fixed top-0 h-full w-full bg-dark_blue/80"
          @click="close"
        ></div>
      </Transition>

      <Transition name="slide-in">
        <div
          v-if="isSidebarOpen"
          class="lg:hidden z-[9999] fixed top-0 h-full bg-blue shadow-lg w-72 rounded-r-3xl flex flex-col justify-between p-5 overflow-y-scroll max-h-full"
        >
          <div class="flex flex-col gap-10">
            <div class="text-center font-patua text-logo">
              <NuxtLink
                @click="close"
                to="/dashboard/view-todooos"
                class="text-accent"
              >
                todooos</NuxtLink
              >.
            </div>

            <div>
              <div class="font-bold text-off_white mb-2">TODOOOS</div>
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
              <div class="font-bold text-off_white mb-2">PROFILE</div>
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

          <LButton class="w-full mt-10" @click="signOut">
            {{ name }} | Sign out
          </LButton>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false);
const close = () => (isSidebarOpen.value = false);

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

<style scoped>
.slide-in-enter-active {
  transition: transform 0.3s ease-out;
}
.slide-in-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(-100%);
}
</style>
