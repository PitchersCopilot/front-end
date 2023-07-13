/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
