<template>
  <div>
    <div class="fixed w-full bg-foreground shadow-lg">
      <nav
        class="mx-auto box-content flex h-navbar max-w-container items-center justify-between px-container"
      >
        <LButtonLink
          to="/dashboard/view-todooos"
          tight
          class="font-patua text-logo"
        >
          <span class="text-accent">todooos</span>
          <span>.</span>
        </LButtonLink>

        <LButtonLink
          quaternary
          tight
          button
          @click="isSidebarOpen = true"
          class="grid place-items-center lg:hidden"
        >
          <span class="material-symbols-rounded !text-logo">menu</span>
        </LButtonLink>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isSidebarOpen"
          class="fixed top-0 z-[9998] h-full w-full bg-background/50 lg:hidden"
          @click="close"
        ></div>
      </Transition>

      <Transition name="slide-in">
        <div
          v-if="isSidebarOpen"
          class="fixed top-0 z-[9999] flex h-full max-h-full w-72 flex-col justify-between overflow-y-scroll rounded-r-3xl bg-foreground p-5 lg:hidden"
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

          <LButtonLink secondary button class="mt-10" @click="signOut">
            {{ name }} | Sign out
          </LButtonLink>
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
