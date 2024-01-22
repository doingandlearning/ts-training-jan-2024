const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // spread ...

arr2.push(4);

console.log(arr1);
console.log(arr2);

// the same!

const arr3 = [{ name: "Ally" }, { name: "Jessica" }];
const arr4 = structuredClone(arr3);
// const arr4 = JSON.parse(JSON.stringify(arr3));

arr4[0].name = "Alastair";

console.log(JSON.stringify(arr3));
console.log(JSON.stringify(arr4));

arr2.filter(() => {});
arr2.map(() => {});
arr2.reduce((a, c) => {
  return a;
}, 0);
