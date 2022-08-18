<template>
  <div
    class="bg-dark-background w-72 rounded-3xl flex flex-col shrink-0 justify-between p-5"
  >
    <div class="flex flex-col gap-10">
      <div class="text-center font-patua text-logo">
        <span class="text-accent">toodoos</span>.
      </div>

      <div>
        <div class="font-bold text-pale-white mb-2">TOODOOS</div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/dashboard/test"> View toodoos </NuxtLink>
          <NuxtLink to="/dashboard/test1"> Add toodoo </NuxtLink>
          <NuxtLink to="/dashboard/test2"> View archived toodoos </NuxtLink>
        </div>
      </div>

      <div>
        <div class="font-bold text-pale-white mb-2">PROFILE</div>
        <div class="flex flex-col gap-2">
          <NuxtLink to="/dashboard/test3"> View profile </NuxtLink>
          <NuxtLink to="/dashboard/test4"> View organisation </NuxtLink>
          <NuxtLink to="/dashboard/test5"> Edit preferences </NuxtLink>
        </div>
      </div>
    </div>

    <div class="text-center">Luca Sett | Logout</div>
  </div>
</template>

<style scoped lang="postcss">
.router-link-active {
  @apply blue-gradient;
  @apply text-white;
  @apply font-semibold;
}
</style>
