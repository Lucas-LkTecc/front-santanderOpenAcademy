import globals from "globals";
import pluginJs from "@eslint/js";
{
  "rules";{
    "semi"; ["error", "always"],
    "quotes"; ["error", "double"]
  }
}
/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
