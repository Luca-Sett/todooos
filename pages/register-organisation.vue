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

      <form
        v-else-if="stage === 'inviting'"
        @submit.prevent="invite"
        class="max-w-form mx-auto blue-gradient rounded-3xl p-6"
      >
        <div class="flex flex-col gap-y-2">
          <Subheading>Invite users</Subheading>

          <div class="mb-4">
            You can send invitations to your team members to join your
            organisation.
            <span class="font-bold">
              Note that invitations are the only way team members can join your
              <span class="text-accent">toodoos</span> organisation.
            </span>
            Don't worry, you can invite users at any time from your admin
            account.
          </div>

          <div v-for="i in invitationEmails.length" :key="i">
            <div class="flex">
              <input
                v-model="invitationEmails[i - 1]"
                type="email"
                :id="`email-${i}`"
                class="w-full bg-dark-background rounded-l-lg px-5 py-2"
                placeholder="Email address"
                required
                autocomplete="off"
              />
              <button
                type="button"
                @click="removeInvitation(i - 1)"
                class="rounded-r-lg bg-dark-background aspect-square w-10 grid items-center transition-colors text-pale-white hover:text-off-white"
              >
                <span class="material-symbols-rounded"> close </span>
              </button>
            </div>
            <div class="px-5 text-error h-6"></div>
          </div>

          <button
            type="button"
            @click="addInvitation"
            :disabled="invitationEmails[invitationEmails.length - 1] === ''"
            class="bg-dark-background rounded-lg px-5 py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
            :class="
              invitationEmails[invitationEmails.length - 1] === ''
                ? 'cursor-not-allowed opacity-50'
                : ''
            "
          >
            Add invitation
          </button>

          <div class="grid grid-cols-2 gap-5">
            <div class="flex flex-col gap-1">
              <div class="h-6"></div>
              <button
                type="button"
                @click="stage = 'done'"
                class="shadow-lg hover:shadow-xl hover:text-white cursor-pointer white-gradient rounded-lg py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
              >
                Invite later
              </button>
            </div>
            <div class="flex flex-col gap-1">
              <div class="h-6"></div>
              <input
                type="submit"
                value="Invite"
                :disabled="invitationEmails.length === 0"
                class="shadow-lg hover:shadow-xl hover:text-white cursor-pointer bg-accent rounded-lg py-2 transition-all outline-none focus:ring-2 focus:ring-pale-white focus:ring-inset"
                :class="
                  invitationEmails.length === 0
                    ? 'cursor-not-allowed opacity-50'
                    : ''
                "
              />
            </div>
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
const organisationId = ref();

const errors = ref({
  name: "Please enter your full name",
  email: "",
  password: "",
  confirmPassword: "",
  organisation: "",
});

// const stage = ref("registering");
const stage = ref("inviting");
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
    organisationId.value = organisationsData[0].id;

    const { error: storeUserError } = await supabase.from("users").insert(
      [
        {
          id: user.id,
          name: name.value,
          organisationId: organisationId.value,
        },
      ],
      { returning: "minimal" }
    );

    if (storeUserError) throw storeUserError;

    stage.value = "inviting";
  } catch (error) {
    console.log(error);
  }

  loading.value = false;
};

const invitationEmails = ref([]);

const addInvitation = () => {
  invitationEmails.value.push("");

  nextTick(() => {
    document.getElementById(`email-${invitationEmails.value.length}`).focus();
  });
};

const removeInvitation = (i) => {
  invitationEmails.value.splice(i, 1);
};

const invite = async () => {
  organisationId.value = 7;

  try {
    const { data: invitations, error: storeInvitationsError } = await supabase
      .from("invitations")
      .insert(
        invitationEmails.value.map((email) => ({
          email,
          organisationId: organisationId.value,
        }))
      );

    if (storeInvitationsError) throw storeInvitationsError;

    const isInvited = await $fetch("/api/inviteUser", {
      method: "post",
      body: { invitations },
    });
    console.log(isInvited);
  } catch (error) {
    console.log(error);
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

.fade-enter-active,
.fade-leave-active,
.fade-move {
  transition: all 0.4s;
}

.fade-leave-active {
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
