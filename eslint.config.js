import js from "@eslint/js";
import typescriptParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: [".astro/", "coverage/", "dist/", "node_modules/"],
  },
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
    },
  },
  {
    files: ["**/*.{js,mjs,ts,astro}"],
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
        URL: "readonly",
      },
    },
  },
];
