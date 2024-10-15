# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Starter Kit Frontend

A streamlined starter kit for building React applications with a modern stack.

### 🛠️ Tech Stack

• React (TypeScript): Build fast and scalable interfaces.
• Vite: Bundler with SWC for faster builds and modern development.
• ESLint: Enforces code quality and best practices.
• Prettier: Automatically formats code for consistency.
• 🐺 Husky: Runs pre-commit hooks to ensure code quality before commits.
• TailwindCSS: Utility-first CSS framework for styling components.

### ⚙️ Getting Started

Before you start the project, make sure to run the following commands:

1. Install Dependencies

```bash
npm install
```

2. Set up Husky (for Git hooks)

```bash
npm run prepare
```

    Note: The Husky configuration in .husky/pre-commit ensures that ESLint and Prettier run before every commit, helping to maintain clean and formatted code.

3. Start Development Server (Vite)

```bash
npm run dev
```

This command starts the Vite development server. Access the app at http://localhost:3000.

### 🧹 Code Formatting and Linting

Prettier

To check your code formatting:

```bash
npm run prettier
```

To automatically format your code:

```bash
npm run prettier:format
```

ESLint

To check for linting errors:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```
