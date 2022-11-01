export interface Todo {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  done: boolean;
}

// Controls
export type FilterByOption = "all" | "todo" | "complete";
export const filterByOptions: FilterByOption[] = ["all", "todo", "complete"];

export type OrderByOption =
  | "newest first"
  | "oldest first"
  | "todo"
  | "complete";

export const orderByOptions: OrderByOption[] = [
  "newest first",
  "oldest first",
  "todo",
  "complete",
];
