<template>
  <div>
    <LHeading> create your <LAccent>todooos</LAccent> account </LHeading>

    <LInfo>
      After you're registered, you can use your
      <LAccent>todooos</LAccent> account to keep track of your personal tasks or
      join your organisation to turbocharge your productivity.
    </LInfo>

    <LForm
      @submit="register"
      buttonText="register"
      :loading="loading"
      :errorMessage="errorMessage"
    >
      <LTextInput
        v-model="registerData.name"
        :v$="v$.name"
        _for="name"
        label="FULL NAME"
        placeholder="full name"
        autocomplete="name"
      />

      <LTextInput
        v-model="registerData.email"
        :v$="v$.email"
        _for="email"
        label="EMAIL ADDRESS"
        placeholder="email address"
        autocomplete="email"
        type="email"
      />

      <LTextInput
        v-model="registerData.password"
        :v$="v$.password"
        _for="password"
        label="PASSWORD"
        placeholder="password"
        autocomplete="new-password"
        type="password"
      />

      <LTextInput
        v-model="registerData.confirmPassword"
        :v$="v$.confirmPassword"
        _for="confirm-password"
        label="CONFIRM PASSWORD"
        placeholder="confirm password"
        autocomplete="new-password"
        type="password"
      />

      <template #footer>
        <div class="col-span-full text-center">
          Already have an account?
          <LButtonLink to="/login" tight tertiary>log in</LButtonLink>
        </div>
      </template>
    </LForm>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

definePageMeta({
  middleware: "guest",
  layout: "marketing",
});

useHead({
  title: "Register",
  meta: [
    {
      name: "description",
      content:
        "Register your free todooos account to turbocharge your productivty.",
    },
  ],
});

const registerData = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const rules = computed(() => ({
  name: {
    required: helpers.withMessage("Please enter your name", required),
  },
  email: {
    required: helpers.withMessage("Please enter your email address", required),
    email: helpers.withMessage("Email address is incorrect", email),
  },
  password: {
    required: helpers.withMessage("Please enter a secure password", required),
    minLength: helpers.withMessage(
      "Must have at least 6 characters",
      minLength(6)
    ),
  },
  confirmPassword: {
    required: helpers.withMessage("Please confirm your password", required),
    sameAs: helpers.withMessage(
      "Passwords do not match",
      sameAs(registerData.value.password)
    ),
  },
}));

const v$ = useVuelidate(rules, registerData);

const supabase = useSupabaseClient();
const authClient = useSupabaseAuthClient();

const loading = ref(false);
const errorMessage = ref("");

const register = async () => {
  loading.value = true;

  v$.value.$touch();
  if (v$.value.$error) {
    loading.value = false;
    return;
  }

  try {
    const {
      data: { user },
      error: signUpError,
    } = await authClient.auth.signUp({
      email: registerData.value.email,
      password: registerData.value.password,
    });

    console.log(user);

    if (signUpError) throw signUpError;

    const { error: storeUserError } = await supabase
      .from("users")
      .insert([{ id: user.id, name: registerData.value.name }], {
        returning: "minimal",
      });

    if (storeUserError) throw storeUserError;
  } catch (error) {
    if (error.message === "User already registered")
      errorMessage.value = "There is already an account with this email";
    else {
      errorMessage.value = "Sorry, something went wrong";
      console.log(error);
    }
    loading.value = false;
  }
};
</script>
