<template>
  <div>
    <Heading
      >Login to your <span class="text-accent">toodoos</span> account</Heading
    >

    <p class="mb-16">
      Login in to your existing
      <span class="text-accent font-bold">toodoos</span> account to view your
      organisation's tasks.
    </p>

    <form
      @submit.prevent="login"
      class="max-w-form mx-auto blue-gradient rounded-3xl p-6"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex flex-col gap-1">
          <label for="email" class="font-bold text-pale-white">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            id="email"
            class="bg-dark-background rounded-lg px-5 py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
            placeholder="Email address"
            autocomplete="email"
            v-model="email"
          />
          <div class="px-5 text-error h-6"></div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="password" class="font-bold text-pale-white">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            class="bg-dark-background rounded-lg px-5 py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
            placeholder="Password"
            autocomplete="current-password"
            v-model="password"
          />
          <div class="px-5 text-error h-6"></div>
        </div>

        <div class="flex flex-col gap-1">
          <div class="h-6"></div>
          <input
            type="submit"
            value="Login"
            :disabled="loading"
            class="shadow-lg hover:shadow-xl hover:text-white cursor-pointer bg-accent rounded-lg py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "marketing",
  middleware: "guest",
});

const email = ref();
const password = ref();

const errors = ref({
  email: "",
  password: "",
});

const loading = ref(false);
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(() => {
  if (user.value) return navigateTo("/dashboard/test");
});

const login = async () => {
  loading.value = true;

  try {
    // login the user using supabase
    const { error: signInError } = await supabase.auth.signIn({
      email: email.value,
      password: password.value,
    });

    if (signInError) throw signInError;
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
};
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.4s ease-out;
}

.slide-leave-active {
  transition: all 0.4s ease-in;
}

.slide-enter-from {
  transform: translateX(50%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
