"use strict";
// 2009 (CJS)
// const fs = require("node:fs");
Object.defineProperty(exports, "__esModule", { value: true });
const mathFunctions_1 = require("./mathFunctions");
// fs
console.log((0, mathFunctions_1.add)(4, 5));
// fs.readFile("src/index.ts", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
function firstElement(a) {
    return a[0];
}
const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];
console.log(firstElement(a_n));
console.log(mathFunctions_1.CONSTANTS.PI);
