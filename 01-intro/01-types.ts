// Microsoft

// Java -> C -> C#
// class, import, type safety

// TypeScript
// - Type safety
// - Interoperability with JS (idiomatic)
// - Better tooling ... inference

// LSP -> Language Server Protocol
{
  // 7 primitive types
  // string, number, boolean, BigInt, null, undefined, Symbol
  let name = "Kevin";

  const location = "Belfast";
  // string ...

  let age: number | string = 40; // union

  age = "40";

  // age = []

  // Everything else is an object - array, function, object, ...
}

{
  // any, void, unknown, never

  let name: any = "Kevin"; // opt out of the typing system
  name = 234;

  function log(): void {
    console.log("Hello");
  }

  let newVar: never;

  function doSomethingWithAge(age: unknown) {
    // i don't know it yet ...
    // guard statements
    if (typeof age === "string") {
      age;
    } else {
      age;
    }
  }
}

{
  type Kingdom = "Bacteria" | "Chromista" | "Protoza" | "Mammal";
  // interface!
  const k: Kingdom = "Chromista";

  function whichType(): Kingdom {
    return "Mammal";
  }
}

{
  enum STATUS_CODES {
    "OK" = "OK", // 0
    "NOT_FOUND" = "NOT_FOUND", // 1
    "UNAUTHORIZED" = "UNAUTHORIZED", // 2
    "SERVER_ERROR" = "SERVER_ERROR", // 3
    "CLIENT_ERROR" = "CLIENT_ERROR", // 4
  }

  type StatusTypes =
    | "OK"
    | "NOT_FOUND"
    | "UNAUTHORIZED"
    | "SERVER_ERROR"
    | "CLIENT_ERROR";

  function createResponseCode(): STATUS_CODES {
    return STATUS_CODES.CLIENT_ERROR;
  }
}
