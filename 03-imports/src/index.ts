// 2009 (CJS)
// const fs = require("node:fs");

// 2015 (ESM)
import fs from "node:fs";
import { add, CONSTANTS } from "./mathFunctions";

// fs

console.log(add(4, 5));
// fs.readFile("src/index.ts", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

function firstElement(a: any[]) {
  return a[0];
}

const a_s: string[] = ["one", "two", "three", "four"];
const a_n: Array<number> = [1, 2, 3, 4];
const a_m: (string | number)[] = ["one", 2, "three", 4];

console.log(firstElement(a_n));
console.log(CONSTANTS.PI);
