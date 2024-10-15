import pluginJs from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Détection automatique de la version React
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  prettierConfig,
];
