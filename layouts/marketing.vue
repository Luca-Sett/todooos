<template>
  <div class="min-h-screen">
    <Navbar />
    <div
      class="max-w-container px-container mx-auto box-content pb-16 pt-[calc(4rem_+_var(--navbar-height))]"
    >
      <slot />
    </div>
  </div>
</template>
