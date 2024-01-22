export function add(a: number, b: number) {
  return a + b;
}

export type Person = {
  name: string;
  location: string;
};

export namespace CONSTANTS {
  export const PI = 3.14;
  export let name = "Kevin";
}

// { add, PI, Person }

// export default {
//   add,
//   PI,
// };

// index.ts
