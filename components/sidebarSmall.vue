<template>
  <div>
    <div
      class="fixed w-full border-b-2 border-foreground bg-background/80 backdrop-blur"
    >
      <nav
        class="mx-auto box-content flex h-navbar max-w-container items-center justify-between px-container"
      >
        <LButtonLink
          to="/dashboard/view-todooos"
          tight
          class="font-patua text-logo"
        >
          <LAccent>todooos</LAccent>
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
          class="overflow-y-overlay fixed top-0 z-[9999] h-screen lg:hidden"
        >
          <LSidebar @action="close" class="min-h-screen rounded-r-3xl" />
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
  transition: transform 0.2s ease-out;
}
.slide-in-leave-active {
  transition: transform 0.2s ease-in;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(-100%);
}
</style>
