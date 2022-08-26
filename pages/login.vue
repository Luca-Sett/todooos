<template>
  <div>
    <Heading>
      log in to your <span class="text-accent">todooos</span> account
    </Heading>

    <Info> Ready to get stuff done? </Info>

    <LForm
      @submit="login"
      buttonText="login"
      :loading="loading"
      :errorMessage="errorMessage"
    >
      <LTextInput
        v-model="loginData.email"
        :v$="v$.email"
        _for="email"
        label="EMAIL ADDRESS"
        placeholder="email address"
        autocomplete="email"
        type="email"
      />

      <LTextInput
        v-model="loginData.password"
        :v$="v$.password"
        _for="password"
        label="PASSWORD"
        placeholder="password"
        autocomplete="current-password"
        type="password"
      />
    </LForm>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

definePageMeta({
  middleware: "guest",
  layout: "marketing",
});

useHead({
  title: "Log in",
  meta: [
    {
      name: "description",
      content: "Log in to your todooos account to get stuff done.",
    },
  ],
});

const supabase = useSupabaseClient();

const loginData = ref({
  email: "",
  password: "",
});

const rules = computed(() => ({
  email: {
    required: helpers.withMessage("Please enter your email address", required),
    email: helpers.withMessage("Email address is incorrect", email),
  },
  password: {
    required: helpers.withMessage("Please enter your password", required),
  },
}));

const v$ = useVuelidate(rules, loginData);

const loading = ref(false);
const errorMessage = ref("");

const login = async () => {
  loading.value = true;

  v$.value.$touch();
  if (v$.value.$error) {
    loading.value = false;
    return;
  }

  try {
    const { error: signInError } = await supabase.auth.signIn({
      email: loginData.value.email,
      password: loginData.value.password,
    });

    if (signInError) throw signInError;
  } catch (error) {
    if (error.message === "Invalid login credentials")
      errorMessage.value = "Incorrect login details";
    else {
      errorMessage.value = "Sorry, something went wrong";
      console.log(error);
    }
    loading.value = false;
  }
};
</script>
