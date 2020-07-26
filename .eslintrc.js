module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    // CI で warn も検知可能にするため、全て error にする
    "only-error",
    "typescript-sort-keys",
    "sort-keys-fix",
    "@typescript-eslint",
  ],
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "react-app",
    /** @see https://github.com/prettier/eslint-config-prettier#installation */
    "prettier/standard",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,

    "import/no-default-export": 2,
    "no-restricted-imports": [
      "error",
      {
        paths: ["lodash"],
        patterns: [
          // Use `import { Component } from "@material-ui/Component"` instead.
          "@material-ui/*/*",
          "!@material-ui/core/test-utils/*",
        ],
      },
    ],
    "no-restricted-syntax": [
      2,
      {
        selector: "TSEnumDeclaration",
        message:
          "Do not declare enums. Use `Plain Object` or `Literal Types` instead.",
      },
    ],
    "prefer-template": 2,

    // for Next.js
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,

    "react/jsx-boolean-value": 2,
    // jsx pragma に @emotion/core#jsx を使っている場合、Short Syntax 使えないため
    "react/jsx-fragments": [2, "element"],
    "react/jsx-sort-props": 2,
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-unsafe": [2, { checkAliases: true }],
    "react/prefer-stateless-function": 2,
    "react/prop-types": 0,
    "react/self-closing-comp": [
      2,
      {
        // empty な html が必要なケースはほとんどないため
        html: false,
      },
    ],
    "react/void-dom-elements-no-children": 2,
    "sort-keys-fix/sort-keys-fix": 2,

    // prettier
    "prettier/prettier": [
      2,
      {
        arrowParens: "always",
        semi: false,
        trailingComma: "es5",
      },
    ],

    "typescript-sort-keys/interface": 2,
    "typescript-sort-keys/string-enum": 2,

    // constructor のショートハンド（メンバーの省略記法）を許可
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-parameter-properties": 0,

    // React Component のボイラープレートコードを減らすため
    "@typescript-eslint/explicit-function-return-type": [
      2,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": [2, "type"],

    // バグの温床になりやすいコードを防ぐため
    "@typescript-eslint/no-unused-expressions": [
      2,
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // 有用なケースがあるため
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],

    // Other
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-misused-promises": 2,
    "@typescript-eslint/prefer-readonly": 2,

    // note you must disable the base rule as it can report incorrect errors
    "require-await": 0,
    "@typescript-eslint/require-await": 2,
  },
}
