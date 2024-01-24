interface EventDetails {
  name: string;
  location: string;
  date: string;
  isPublic: boolean;
}

// Mapped

type ReadonlyEventDetails = {
  readonly [K in keyof EventDetails]?: EventDetails[K] | string;
};

type ReadOnlyEvents = Readonly<EventDetails>;

// Conditional types

const age = 40;
const ageDescription = age >= 40 ? "old" : "not old"; // test ? true : false;

//    test => `extends` rather than ===, ==, !=, >=

type StringLabel = {
  name: string;
};

type IsString<T> = T extends string ? T : never;
const newVar: IsString<"test"> = "test";

interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

type DeeplyReadonly<T> = {
  readonly [K in keyof T]: T[K] extends string | number | boolean
    ? T[K]
    : DeeplyReadonly<T[K]>;
};

type ReadOnlyUser = Readonly<User>;
type DeepReadOnlyUser = DeeplyReadonly<User>;
