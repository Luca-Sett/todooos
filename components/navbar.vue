<template>
  <div>
    <div class="bg-blue shadow-lg fixed w-full">
      <nav
        class="h-navbar max-w-container px-container mx-auto flex justify-between items-center box-content"
      >
        <NuxtLink to="/" class="font-patua text-logo">
          <span class="text-accent">todooos</span>
          <span>.</span>
        </NuxtLink>

        <div class="font-semibold gap-10 items-center hidden lg:flex">
          <LLink to="/" class="tertiary">home</LLink>
          <LLink to="/plans" class="tertiary">plans</LLink>
          <LLink to="/login" class="secondary">login</LLink>
          <LLink to="/register" class="primary">register</LLink>
        </div>

        <LButton @click="isNavDrawerOpen = true" class="lg:hidden">
          <span class="material-symbols-rounded !text-logo">menu</span>
        </LButton>
      </nav>
    </div>

    <Teleport to="body">
      <Transition name="drop">
        <div
          v-if="isNavDrawerOpen"
          class="lg:hidden z-[9999] fixed bg-light_blue/80 top-0 h-full w-full grid place-items-center"
        >
          <div class="flex flex-col place-items-center text-heading">
            <LButton @click="close" class="mb-8">
              <span class="material-symbols-rounded !text-logo">close</span>
            </LButton>

            <LLink @click="close" to="/" class="tertiary">home</LLink>
            <LLink @click="close" to="/plans" class="tertiary">plans</LLink>
            <LLink @click="close" to="/login" class="tertiary">login</LLink>
            <LLink @click="close" to="/register" class="tertiary">
              register
            </LLink>
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

<style scoped>
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
</style>
