import { defineStore } from "pinia";
import { Todo } from "~~/types/todo";

export const useTodosStore = defineStore("todos", {
  state: (): { todos: Todo[] } => ({
    todos: [
      {
        id: 1,
        title: "design a new logo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed quaerat? Ad quas dolorem nesciunt hic possimus dolores accusamus fugit tenetur. Cumque quisquam aperiam labore sunt, ipsum temporibus officia eaque?",
        createdAt: "1st September 22",
        done: false,
      },
      {
        id: 2,
        title: "fix padding on mobile and edit margin on tablet",
        description: "this is a really long description",
        createdAt: "3rd September 22",
        done: true,
      },
      {
        id: 3,
        title: "ask SOC to test API",
        description: "",
        createdAt: "2nd September 22",
        done: false,
      },
      {
        id: 4,
        title: "design a new logo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed quaerat? Ad quas dolorem nesciunt hic possimus dolores accusamus fugit tenetur. Cumque quisquam aperiam labore sunt, ipsum temporibus officia eaque?",
        createdAt: "5th September 22",
        done: false,
      },
      {
        id: 5,
        title: "design a new logo",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed quaerat? Ad quas dolorem nesciunt hic possimus dolores accusamus fugit tenetur. Cumque quisquam aperiam labore sunt, ipsum temporibus officia eaque?",
        createdAt: "4th September 22",
        done: false,
      },
    ],
  }),
});
