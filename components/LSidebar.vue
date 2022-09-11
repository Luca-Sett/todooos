<template>
  <div class="flex w-72 flex-col justify-between bg-foreground p-5">
    <div class="flex flex-col gap-6">
      <LButtonLink
        to="/dashboard/view-todooos"
        @click="emit('action')"
        tight
        class="mx-auto w-max font-patua text-logo leading-none"
      >
        <span class="text-accent">todooos</span>
        <span>.</span>
      </LButtonLink>

      <div>
        <div class="mb-2 font-semibold text-text/80">ORGANISATION</div>
        <LSelect :options="organisations" v-model="selectedOrganisation" />
      </div>

      <div class="flex flex-col gap-10">
        <div>
          <div class="mb-2 font-semibold text-text/80">TODOOOS</div>
          <div class="flex flex-col gap-2">
            <SidebarLink @click="emit('action')" to="/dashboard/view-todooos">
              view todooos
            </SidebarLink>
            <SidebarLink @click="emit('action')" to="/dashboard/test1">
              add todooo
            </SidebarLink>
          </div>
        </div>

        <div>
          <div class="mb-2 font-semibold text-text/80">PROFILE</div>
          <div class="flex flex-col gap-2">
            <SidebarLink @click="emit('action')" to="/dashboard/test3">
              my profile
            </SidebarLink>
            <SidebarLink @click="emit('action')" to="/dashboard/test4">
              my organisation
            </SidebarLink>
            <SidebarLink @click="emit('action')" to="/dashboard/test5">
              my preferences
            </SidebarLink>
          </div>
        </div>
      </div>
    </div>

    <LButtonLink
      secondary
      button
      @click="signOut"
      :loading="signOutLoading"
      class="mt-10"
    >
      {{ name }} | Sign out
    </LButtonLink>
  </div>
</template>

<script setup>
const emit = defineEmits(["action"]);

const organisations = ["personal", "WILD", "time contractor"];
const selectedOrganisation = useState("organisation", () => organisations[0]);

const name = useState("userName");

const signOutLoading = ref(false);
const supabase = useSupabaseClient();

const signOut = async () => {
  signOutLoading.value = true;
  try {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) throw signOutError;
  } catch (error) {
    console.log(error);
    signOutLoading.value = false;
  }
};
</script>
