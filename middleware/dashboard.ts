export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value) return navigateTo("/login");
  if (to.name === "dashboard") return navigateTo("/dashboard/view-todooos");
});
