<template>
  <div>
    <Heading>
      Register your <span class="text-accent">toodoos</span> account for a new
      organisation
    </Heading>

    <p class="mb-16">
      <span class="font-bold">
        Only register an account here if your organisation is not yet set up
        with <span class="text-accent">toodoos</span>.
      </span>
      The account you register here will be an admin for the organisation. Don’t
      worry, you can still use this admin account to view your tasks as normal.
    </p>

    <Transition name="slide" mode="out-in">
      <form
        v-if="stage === 'registering'"
        @submit.prevent="register"
        class="max-w-form mx-auto blue-gradient rounded-3xl p-6"
      >
        <div class="grid grid-cols-2 gap-x-5 gap-y-2">
          <Subheading class="col-span-2">Register admin account</Subheading>

          <div class="flex flex-col gap-1">
            <label for="name" class="font-bold text-pale-white">
              FULL NAME
            </label>
            <input
              type="text"
              id="name"
              class="bg-dark-background rounded-lg px-5 py-2 transition-all outline-none ring-inset focus:ring-2 focus:ring-pale-white"
              :class="errors.name ? 'ring-2 ring-error' : ''"
              placeholder="Full name"
              autocomplete="name"
              v-model="name"
            />
            <div class="text-error h-6">{{ errors.name }}</div>
          </div>

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
              autocomplete="new-password"
              v-model="password"
            />
            <div class="px-5 text-error h-6"></div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="confirm-password" class="font-bold text-pale-white">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              id="confirm-password"
              class="bg-dark-background rounded-lg px-5 py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
              placeholder="Confirm password"
              autocomplete="new-password"
              v-model="confirmPassword"
            />
            <div class="px-5 text-error h-6"></div>
          </div>

          <div class="flex flex-col gap-1">
            <label for="organisation-title" class="font-bold text-pale-white">
              ORGANISATION NAME
            </label>
            <input
              type="text"
              id="organisation-title"
              class="bg-dark-background rounded-lg px-5 py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
              placeholder="Organisation name"
              autocomplete="organization"
              v-model="organisation"
            />
            <div class="px-5 text-error h-6"></div>
          </div>

          <div class="flex flex-col gap-1">
            <div class="h-6"></div>
            <input
              type="submit"
              value="Register"
              :disabled="loading"
              class="shadow-lg hover:shadow-xl hover:text-white cursor-pointer bg-accent rounded-lg py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
            />
          </div>
        </div>
      </form>

      <div v-else class="max-w-form mx-auto blue-gradient rounded-3xl p-5">
        <Subheading class="text-center">
          Done! You're ready to turbocharge your team!
        </Subheading>
        <NuxtLink
          to="/dashboard/test"
          class="block w-1/2 max-w-md mx-auto mt-8 mb-2 hover:text-white bg-accent rounded-lg py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
        >
          Get Started
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "marketing",
  middleware: "guest",
});

const name = ref();
const email = ref();
const password = ref();
const confirmPassword = ref();
const organisation = ref();

const errors = ref({
  name: "Please enter your full name",
  email: "",
  password: "",
  confirmPassword: "",
  organisation: "",
});

const stage = ref("registering");
const loading = ref(false);
const supabase = useSupabaseClient();

const register = async () => {
  loading.value = true;

  try {
    // register the new user into supabase
    const { user, error: signUpError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (signUpError) throw signUpError;

    // store the new organisation into supabase and get the organisation id
    const { data: organisationsData, error: storeOrganisationError } =
      await supabase
        .from("organisations")
        .insert([{ name: organisation.value }]);

    if (storeOrganisationError) throw storeOrganisationError;

    // store the user's name and organisation id into the user record
    const { error: storeUserError } = await supabase.from("users").insert(
      [
        {
          id: user.id,
          name: name.value,
          organisationId: organisationsData[0].id,
        },
      ],
      { returning: "minimal" }
    );

    if (storeUserError) throw storeUserError;

    stage.value = "registered";
  } catch (error) {
    console.log(error);
  }

  loading.value = false;
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
