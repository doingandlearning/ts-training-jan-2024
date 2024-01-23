# Understanding Imports in TypeScript

## Overview
This note elaborates on the use of different module systems in TypeScript, specifically CommonJS (CJS) and ECMAScript Modules (ESM), as demonstrated in the provided code snippets.

### 1. Module Systems in TypeScript

#### a. CommonJS (CJS) - Prevalent in Node.js
- **Introduced in 2009**: CommonJS is the standard module system in Node.js.
- **Syntax Example**: `const fs = require("node:fs");`
- **Characteristics**:
  - Widely used in Node.js for server-side development.
  - Modules are loaded synchronously.
  - `require()` function is used to load modules.

#### b. ECMAScript Modules (ESM) - Modern Standard
- **Introduced in 2015 with ES6/ES2015**: ESM is the official standard for JavaScript modules.
- **Syntax Example**: `import fs from "node:fs"; import { add, CONSTANTS } from "./mathFunctions";`
- **Characteristics**:
  - Supports static analysis and tree shaking.
  - Modules are loaded asynchronously.
  - Uses `import` and `export` statements.
  - More concise and allows selective import of module components.

### 2. Code Examples and Explanation

#### a. File System Module
- **CJS Import**: `const fs = require("node:fs");` (not shown in the current code but indicative of CJS style).
- **ESM Import**: `import fs from "node:fs";`
  - Directly importing the `fs` module in ESM format.

#### b. Custom Modules
- **Importing Custom Functions and Constants**:
  - `import { add, CONSTANTS } from "./mathFunctions";`
  - Demonstrates importing specific exports from a local module.

#### c. Using Imported Modules
- **Function Usage**: `console.log(add(4, 5));`
  - Using the imported `add` function.
- **Constants Usage**: `console.log(CONSTANTS.PI);`
  - Accessing a constant from the imported `CONSTANTS` namespace.

### 3. Exporting in TypeScript

#### a. Named Exports (`export`)
- **Syntax**: `export function add(a: number, b: number) { ... }`
- **Usage**:
  - Allows multiple named exports per module.
  - Useful for exporting several values, functions, types, interfaces, etc.
  - Importing named exports requires curly braces and the exact name: `import { add } from './mathFunctions';`
- **Benefits**:
  - Enhances code readability and maintainability.
  - Facilitates selective import, reducing memory usage.
  - Better for large modules with many functions or variables.

#### b. Default Exports (`export default`)
- **Syntax**: `export default { add, PI };`
- **Usage**:
  - Allows only one default export per module.
  - Commonly used for the primary functionality of the module or when a module is designed to export a single entity like a class or a function.
  - Imported without curly braces: `import mathFunctions from './mathFunctions';`
- **Benefits**:
  - Simplifies import statements when only one entity is being imported from the module.
  - Provides flexibility to rename the imported module without an alias.

#### c. Comparison
- **Flexibility in Naming**:
  - Named Exports: The import name must match the exported name unless an alias is used.
  - Default Exports: The importer has the freedom to name it as they see fit.
- **Refactoring**:
  - Named Exports: Easier to refactor as they are explicitly named.
  - Default Exports: Can be more challenging to refactor due to varied naming.
- **Consistency**:
  - Named Exports: Encourages more consistent usage across different files.
  - Default Exports: Naming inconsistencies may arise due to the freedom in naming during import.
- **Discoverability**:
  - Named Exports: Better for discoverability and auto-import features in IDEs.
  - Default Exports: May sometimes be less discoverable in IDEs.


### 4. Conclusion
The provided code snippets demonstrate the evolution and usage of module systems in TypeScript. They highlight the transition from the older CommonJS format to the modern ECMAScript Modules, showcasing the differences in syntax and usage. The examples also cover basic TypeScript features like functions, type annotations, and the export/import of various entities, offering a practical insight into TypeScript development.