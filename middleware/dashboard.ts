export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name === "dashboard") return navigateTo("/dashboard/test");
});
