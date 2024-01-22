function* generatorFunction() {
  yield "🍑"; // pauses here
  yield "🍉";
  yield "🍋";
  yield "🥭";
}

const fruitGenerator = generatorFunction();
// lazy, memory efficient

function* fibon() {
  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ....
  let first = 1;
  let second = 1;
  while (true) {
    let sum = first + second;
    if (sum > 1000) {
      return;
    }
    yield sum; // pauses
    first = second;
    second = sum;
  }
}

const sequence = fibon();
console.log(...sequence);
