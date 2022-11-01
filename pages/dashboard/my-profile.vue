<template>
  <div>
    <LHeading>my profile</LHeading>

    <LInfo>View and edit your account information.</LInfo>

    <div class="flex flex-col gap-8">
      <div>
        <LTextInput
          v-model="userData.name"
          :v$="v$.name"
          _for="name"
          label="NAME"
          placeholder="name"
        />

        <LExpand>
          <div v-if="userData.name !== name">
            <div
              class="flex flex-col items-center justify-between gap-y-2 pt-4"
            >
              <div class="w-full">
                <LExpand>
                  <div v-if="errors.name" class="mb-1 font-medium text-error">
                    {{ errors.name }}
                  </div>
                </LExpand>
              </div>
              <div class="flex w-full justify-end gap-2">
                <LButtonLink
                  tertiary
                  tight
                  error
                  button
                  @click="revertNameField"
                >
                  revert
                  <LIcon>undo</LIcon>
                </LButtonLink>
                <LButtonLink
                  secondary
                  tight
                  button
                  :loading="loading.name"
                  @click="updateName"
                >
                  update
                  <LIcon>check</LIcon>
                </LButtonLink>
              </div>
            </div>
          </div>
        </LExpand>
      </div>

      <div>
        <LTextInput
          v-model="userData.email"
          :v$="v$.email"
          _for="email"
          label="EMAIL"
          placeholder="email"
        />

        <LExpand>
          <div v-if="userData.email !== user.email">
            <div
              class="flex flex-col items-center justify-between gap-y-2 pt-4"
            >
              <div class="w-full">
                <LExpand>
                  <div v-if="errors.email" class="mb-1 font-medium text-error">
                    {{ errors.email }}
                  </div>
                </LExpand>
              </div>
              <div class="flex w-full justify-end gap-2">
                <LButtonLink
                  tertiary
                  tight
                  error
                  button
                  @click="revertEmailField"
                >
                  revert
                  <LIcon>undo</LIcon>
                </LButtonLink>
                <LButtonLink
                  secondary
                  tight
                  button
                  :loading="loading.email"
                  @click="updateEmail"
                >
                  update
                  <LIcon>check</LIcon>
                </LButtonLink>
              </div>
            </div>
          </div>
        </LExpand>
      </div>
    </div>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const name = useState("userName");

const userData = ref({
  name: name.value,
  email: user.value.email,
});

const loading = ref({
  name: false,
  email: false,
});

const errors = ref({
  name: "",
  email: "",
});

const rules = {
  name: {
    required: helpers.withMessage("Please enter your name", required),
  },
  email: {
    required: helpers.withMessage("Please enter your email address", required),
    email: helpers.withMessage("Email address is incorrect", email),
  },
};

const v$ = useVuelidate(rules, userData);

const revertNameField = () => {
  userData.value.name = name.value;
  errors.value.name = "";
};

const revertEmailField = () => {
  userData.value.email = user.value.email;
  errors.value.email = "";
};

const updateName = async () => {
  loading.value.name = true;
  errors.value.name = "";

  v$.value.name.$touch();
  if (v$.value.name.$error) {
    loading.value.name = false;
    return;
  }

  try {
    const { error } = await supabase
      .from("users")
      .update({ name: userData.value.name })
      .eq("id", user.value.id);

    if (error) throw error;

    name.value = userData.value.name;
  } catch (error) {
    if (error.message) errors.value.name = error.message;
    else errors.value.name = "Sorry, something went wrong";
    console.error(error);
  }
  loading.value.name = false;
};

const updateEmail = async () => {
  loading.value.email = true;
  errors.value.email = "";

  v$.value.email.$touch();
  if (v$.value.email.$error) {
    loading.value.email = false;
    return;
  }

  try {
    const { error } = await supabase.auth.updateUser({
      email: userData.value.email,
    });

    if (error) throw error;
  } catch (error) {
    if (error.message) errors.value.email = error.message;
    else errors.value.email = "Sorry, something went wrong";
    console.error(error);
  }
  loading.value.email = false;
};
</script>
