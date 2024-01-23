"use strict";
// // functional
// // Haskell ?? Purely functional
// // Multi-paradigm Languages
// // - Imperative
// // - OOP (class)
// // - Declarative
// // - Functional
// // Functions
// // - easier to test
// // - concurrently
// // - caching
// // 1. Immutability and Pure Functions (class -> functional)
// //    input -> output
// //    no side effects
// interface Person {
//   name: string;
//   age?: number;
// }
// function getGreeting(person: Person) {
//   return `Hello, ${person.name}, you are ${person.age} years old.`;
// }
// const person: Person = { name: "Ethan", age: 11 };
// const greeting = getGreeting(person);
// const isValidEmail = (email: string): boolean => {
//   // This function doesn't rely on external state and will always produce the same output for the same input.
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// };
// // 2. Higher-Order Functions
// //    - One or more arguments is a function
// //    - Return type is a function
// //    Aims to be more modular and reusable.
// const userArray: Person[] = [
//   { name: "Janelle" },
//   { name: "Rebecca" },
//   { name: "Phil" },
// ];
// console.log(userArray.map((user) => user.name.toUpperCase()));
// // 3. Composability
// //   - Functional composition - combine more than one function
// userArray.map((item) => item.name).map((item) => item.toUpperCase());
// // 4. Immutability
// userArray.map(() => {});
// userArray.filter(() => {});
// userArray.reduce(() => {});
// userArray.sort(); // .toSorted()
// userArray.reverse(); // .toReversed()
// userArray.splice(); // mutable
// userArray.slice(); // immutable
// // Data flow
