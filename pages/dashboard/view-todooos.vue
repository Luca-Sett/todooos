<template>
  <div>
    <Heading> View todooos </Heading>
    <LButton @click="logout" class="primary">logout</LButton>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const logout = () => {
  supabase.auth.signOut();
};
</script>
