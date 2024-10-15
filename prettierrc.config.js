export default {
  bracketSpacing: true,
  bracketSameLine: false,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  printWidth: 100,
  useTabs: false,
  jsxSingleQuote: false,
  semi: true,
  tabWidth: 2,
  overrides: [
    {
      files: "*.json",
      options: { parser: "json", tabWidth: 2, singleQuote: false },
    },
  ],
};
