<template>
  <div>
    <LHeading>view your <LAccent>todooos</LAccent></LHeading>

    <LInfo v-if="organisation === 'personal'">
      Here are your <LAccent>personal</LAccent> todooos. You can switch to your
      organisation's todooos in the sidebar.
    </LInfo>

    <LInfo v-else>
      Here are your todooos for <LAccent>{{ organisation }}</LAccent
      >. You can switch to your personal todooos or todooos for another
      organisation in the sidebar.
    </LInfo>

    <ViewTodooosTable />
  </div>
</template>

<script setup>
useHead({
  title: "View Todooos",
  meta: [
    {
      name: "description",
      content: "View your todooos and get stuff done.",
    },
  ],
});

const organisation = useState("organisation");

const fetchTodos = async () => {
  const supabase = useSupabaseClient();
  let { data: todooos, error } = await supabase.from("todooos").select("*");
  // const formatter = new Intl.RelativeTimeFormat("en");
  // const diff = new Date(todooos[0].created_at) - new Date();
  // console.log(
  //   formatter.format(Math.round(diff / (1000 * 60 * 60 * 24)), "days")
  // );
  // console.log(new Date(todooos[0].created_at).toLocaleDateString());
  // console.log(
  //   new Intl.DateTimeFormat().format(new Date(todooos[0].created_at))
  // );
};
fetchTodos();
</script>
