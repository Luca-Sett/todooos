export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();
  console.log("dashboard middleware");

  if (!user.value) return navigateTo("/login");
  if (to.name === "dashboard") return navigateTo("/dashboard/view-todooos");
});
