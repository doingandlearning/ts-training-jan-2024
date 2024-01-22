"use strict";
// 2009 (CJS)
// const fs = require("node:fs");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 2015 (ESM)
const node_fs_1 = __importDefault(require("node:fs"));
// fs
node_fs_1.default.readFile("src/index.ts", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
function firstElement(a) {
    return a[0];
}
const a_s = ["one", "two", "three", "four"];
const a_n = [1, 2, 3, 4];
const a_m = ["one", 2, "three", 4];
console.log(firstElement(a_n));
