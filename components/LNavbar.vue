<template>
  <div>
    <div
      class="fixed z-30 w-screen border-b-2 border-foreground bg-background/70 backdrop-blur"
    >
      <nav
        class="mx-auto box-content flex h-navbar max-w-container items-center justify-between px-container"
      >
        <LButtonLink to="/" tight class="py-0 font-patua text-logo">
          <LAccent>todooos</LAccent>
          <span>.</span>
        </LButtonLink>

        <div class="hidden items-center gap-6 lg:flex">
          <LButtonLink quaternary to="/" class="links">home</LButtonLink>
          <LButtonLink quaternary to="/plans" class="links">plans</LButtonLink>
          <LButtonLink secondary to="/login">login</LButtonLink>
          <LButtonLink primary to="/register">register</LButtonLink>
        </div>

        <LButtonLink
          quaternary
          tight
          button
          @click="isNavDrawerOpen = true"
          class="grid place-items-center lg:hidden"
        >
          <LIcon class="!text-logo">menu</LIcon>
        </LButtonLink>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="drop">
        <div
          v-if="isNavDrawerOpen"
          @click="close"
          class="fixed top-0 z-[9999] grid h-full w-full place-items-center bg-foreground/60 lg:hidden"
        >
          <div class="flex flex-col place-items-center text-heading">
            <LButtonLink quaternary button class="mb-8">
              <LIcon class="!text-logo">close</LIcon>
            </LButtonLink>

            <LButtonLink quaternary to="/" class="links">home</LButtonLink>
            <LButtonLink quaternary to="/plans" class="links">
              plans
            </LButtonLink>
            <LButtonLink quaternary to="/login" class="links">
              login
            </LButtonLink>
            <LButtonLink quaternary to="/register" class="links">
              register
            </LButtonLink>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const isNavDrawerOpen = ref(false);
const close = () => (isNavDrawerOpen.value = false);
</script>

<style scoped lang="postcss">
.drop-enter-active {
  transition: transform 0.3s ease-out;
}
.drop-leave-active {
  transition: transform 0.3s ease-in;
}

.drop-enter-from,
.drop-leave-to {
  transform: translateY(-100%);
}

.links.router-link-active {
  @apply text-accent;
}
</style>
