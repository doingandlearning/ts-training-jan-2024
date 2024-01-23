// Modular
// Composable
// Reusable
// Don't Repeat Yourself // DRY

function findItemInArray<Type, TargetType>(
  arr: Type[],
  target: TargetType
): TargetType | undefined {
  return arr.find((item) => item === target) as TargetType | undefined;
}

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
