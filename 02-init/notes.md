# Setting Up a TypeScript Project

## Overview
This note provides an overview of setting up a basic TypeScript project, detailing the steps taken and the configurations applied.

### 1. Initialization
- **Project Initialization**: Started with creating a `package.json` file, which serves as a manifest for the project. It includes metadata such as the project's name, version, and description.
- **Package Installation**:
  - Installed `typescript` for TypeScript language support.
  - Installed `tsx`, a tool for executing TypeScript files directly, useful during development.
  - Installed `@types/node` to provide TypeScript types for Node.js.

### 2. Script Configuration
- Updated the `scripts` block in `package.json` to include:
  - `"start"`: Runs the compiled JavaScript code from the `dist` directory using Node.js.
  - `"dev"`: Runs `tsx` in watch mode on `src/index.ts`, enabling real-time compilation during development.
  - `"test"`: Placeholder script for future testing configuration.
  - `"build"`: Compiles TypeScript files to JavaScript using the TypeScript compiler (`tsc`).

### 3. TypeScript Configuration
- **`tsconfig.json` Configuration**:
  - `compilerOptions`:
    - `target`: Sets the JavaScript version for the output files (here, ES5).
    - `module`: Specifies the module system (here, CommonJS).
    - `outDir`: Designates `dist` as the output directory for compiled JavaScript files.
    - `esModuleInterop`: Allows for easier import of CommonJS modules.
    - `forceConsistentCasingInFileNames`: Ensures case consistency in file names, which is important for cross-platform compatibility.
    - `strict`: Enables strict type-checking options for TypeScript, enhancing type safety and maintainability.
    - `skipLibCheck`: Skips type checking of declaration files (`.d.ts`).
  - `include`: Specifies that files in the `src` directory are to be included in the compilation process.

- For more detail on the tsconfig, there's a link in the base file for the official docs or use https://generator.tsconfigdemystified.com/

### 4. Project Structure
- **Directory Setup**:
  - Created a `src` directory for TypeScript source files.
  - Created a `dist` directory, which will hold the compiled JavaScript files.

## Conclusion
This setup creates a robust foundation for a TypeScript project, offering a streamlined development workflow with real-time compilation, strict type checking, and an organized project structure. The configuration is tailored for a Node.js environment and is designed to ensure consistency, reliability, and ease of development and maintenance.