<template>
  <div>
    <Heading>
      Register your <span class="text-accent">toodoos</span> account for a new
      organisation
    </Heading>

    <p class="mb-16">You're in! Your email is {{ email }}.</p>
    <button @click="signOut">Sign out</button>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const email = computed(() => {
  return user.value ? user.value.email : "Loading...";
});

const signOut = async () => {
  try {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) throw signOutError;
  } catch (error) {
    console.log(error);
  }
};
</script>
