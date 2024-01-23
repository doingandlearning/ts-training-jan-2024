// document.createElement();

// Gulp

task("default", ["styles", "styles"]);
task("scripts", ["lint"], () => {});
task("styles", () => {});

type CallbackFn = () => void;

// ☠️
task(
  "name",
  () => {},
  () => {}
);

function task(name: string, dependencies: string[]): void;
function task(name: string, callback: CallbackFn): void;
function task(name: string, dependencies: string[], callback: CallbackFn): void;
function task(
  name: string,
  param2: string[] | CallbackFn,
  param3?: CallbackFn
): void {
  // where we do our implementation!
  if (typeof param2 === "function" && typeof param3 === "function") {
    throw new Error();
  }
}

function fn(input: number): number;
function fn(input: string): string;
function fn(input: number | string): number | string {
  if (typeof input === "number") {
    return "this also works";
  } else {
    return 1337;
  }
}

const typeSaysNumberButItsAString = fn(12);
const typeSaysStringButItsANumber = fn("Hello world");

function genFun<T>(input: T): T {
  if (typeof input === "number") {
    return 1337 as T;
  } else {
    return "This is a string" as T;
  }
}

const typeSaysNumberButItsAString1 = genFun<number>(12);
const typeSaysStringButItsANumber1 = genFun<string>("Hello world");
