<template>
  <div>
    <LHeading>view your <LAccent>todooos</LAccent></LHeading>

    <LInfo v-if="organisation === 'personal'">
      Here are your <LAccent>personal todooos</LAccent>. You can switch to your
      organisation's todooos in the sidebar.
    </LInfo>

    <LInfo v-else>
      Here are your todooos for <LAccent>{{ organisation }}</LAccent
      >. You can switch to your personal todooos or todooos for another
      organisation in the sidebar.
    </LInfo>

    <div class="overflow-hidden rounded-xl bg-foreground-alt shadow-lg">
      <div
        class="grid w-full grid-cols-[24px_1fr_24px] gap-4 bg-foreground px-5 py-2 font-semibold uppercase text-text/80 sm:grid-cols-[24px_2fr_minmax(150px,1fr)_24px]"
      >
        <LIcon> check </LIcon>
        <span class="">todooo</span>
        <span class="hidden sm:block">created at</span>
        <span></span>
      </div>

      <Transition name="fade" mode="out-in">
        <div v-if="fakeTodos.length > 0" class="flex flex-col gap-1.5 p-1.5">
          <Todo
            v-for="todo in fakeTodos"
            :title="todo.title"
            :created-at="todo.createdAt"
            :description="todo.description"
            :done="todo.done"
          />
        </div>

        <div v-else class="p-8 text-center">
          <div class="mb-4 text-subheading font-medium">
            hurrah, you're all done! 🥳
          </div>
          <LButtonLink to="/dashboard/add-todooo" secondary>
            add todooo
            <LIcon>add</LIcon>
          </LButtonLink>
        </div>
      </Transition>
    </div>
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

const fakeTodos = [
  {
    title: "design a new logo",
    createdAt: "31st September 22",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed quaerat? Ad quas dolorem nesciunt hic possimus dolores accusamus fugit tenetur. Cumque quisquam aperiam labore sunt, ipsum temporibus officia eaque?",
    done: false,
  },
  {
    title: "fix padding on mobile and edit margin on tablet",
    createdAt: "2nd September 22",
    description: "this is a really long description",
    done: true,
  },
  {
    title: "ask SOC to test API",
    createdAt: "28th August 22",
    description: "",
    done: false,
  },
];
</script>
