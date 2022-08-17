<template>
  <div>
    <div
      class="bg-light-background min-h-screen text-off-white flex gap-10 p-10"
    >
      <DashboardSidebar />
      <div class="py-6">
        <slot />
      </div>
    </div>
  </div>
</template>
