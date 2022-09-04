<template>
  <div class="min-h-screen">
    <LNavbar></LNavbar>
    <div
      class="mx-auto box-content max-w-container px-container pb-20 pt-[calc(min(8%,5rem)_+_var(--navbar-height))]"
    >
      <slot />
    </div>
  </div>
</template>
