<template>
  <div class="white-gradient">
    <nav
      class="h-navbar max-w-container mx-auto flex justify-between items-center px-20 box-content"
    >
      <div class="font-patua text-logo">
        <span class="text-accent">toodoos</span>
        <span>.</span>
      </div>

      <div class="font-semibold flex gap-10 items-center">
        <NuxtLink to="/"> About </NuxtLink>
        <NuxtLink to="/"> Plans </NuxtLink>
        <NuxtLink to="/login" type="button" class="bg-dark-background">
          Log in
        </NuxtLink>
        <NuxtLink to="/register" type="button" class="bg-accent">
          Register
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
