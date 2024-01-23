// Modular
// Composable
// Reusable
// Don't Repeat Yourself // DRY

function findItemInArray<Type, TargetType>(
  arr: Type[],
  target: TargetType extends Type
): TargetType | undefined {
  return arr.find((item) => item === target) as TargetType | undefined;
}

function findItemInArray1<Type, TargetType extends Type>(
  arr: Type[],
  isTarget: (item: Type) => item is TargetType
): TargetType | undefined {
  return arr.find(isTarget);
}

interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark: () => void;
}

const animals: Animal[] = [{ type: "cat" }, { type: "dog", bark: () => {} }];

const dog = findItemInArray1(animals, (animal): animal is Dog => animal.type === "dog");



const result1 = findItemInArray([1, 2, 3, 4, 5], 4);

result1;

const result2 = findItemInArray<string | number | boolean, string>(
  ["hello", "bonjour", "salve"],
  "salve"
);

result2;

function getFirstElement<T>(array: T[]): T {
  return array[0];
}

const arr: Array<number> = [1, 2, 3];
const numArr: number[] = [1, 2, 3];
