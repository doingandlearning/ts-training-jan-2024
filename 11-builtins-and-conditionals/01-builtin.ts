// Already have a type ...

/**
 * Extract: Allows you to pick types that are present in another type.
 * Example: In a system where you handle different types of notifications (email, SMS, push),
 * you might want to filter out only boolean options from a settings type.
 */

type NotificationSettings = number | string | "email" | true;
type FilteredSettings = Extract<NotificationSettings, string>;

/**
 * Exclude: Allows you to pick types that are present in another type.
 * Example: In a system where you handle different types of notifications (email, SMS, push),
 * you might want to filter out only boolean options from a settings type.
 */
type FilteredSettings2 = Exclude<NotificationSettings, string>;

let variable: Awaited<Promise<string>>;

interface Todo {
  title: string;
  description: string;
  completed?: boolean;
  //
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
  completed: true,
});

interface Person {
  name: string;
  dob: string;
}

type ImmutablePerson = Readonly<Person>;

// Map Type !

interface Region {
  [region: string]: string[];
}

type Regions = Record<string, string[]>;

// const obj1: Region = {
//   hello: ["yes", "no", "maybe"],
//   [Symbol()]: [1, 2, 3],
// };

async function run() {
  return "Run away ... ";
}

const value: Awaited<ReturnType<typeof run>> = "string";

// () => Promise<string>
