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
        <MarketingNavbarLink to="/"> About </MarketingNavbarLink>
        <MarketingNavbarLink to="/"> Plans </MarketingNavbarLink>
        <MarketingNavbarLink to="/login" class="bg-dark-background">
          Login
        </MarketingNavbarLink>
        <MarketingNavbarLink to="/register-organisation" class="bg-accent">
          Register
        </MarketingNavbarLink>
      </div>
    </nav>
  </div>
</template>
