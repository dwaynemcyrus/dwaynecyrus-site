import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: [".astro/", "coverage/", "dist/", "node_modules/"],
  },
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{js,mjs,ts,astro}"],
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly",
      },
    },
  },
];
