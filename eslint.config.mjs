import path from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tseslint from "typescript-eslint"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

export default [
  {
    ignores: [
      "node_modules/**",
      "android/**",
      "ios/**",
      "build/**",
      "dist/**",
      ".expo/**",
      "*.jsbundle",
      "*.js"
    ]
  },

  {
    settings: {
      react: { version: "detect" }
    }
  },

  // Base JS + TS recommended
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Legacy shareable configs via FlatCompat
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended"
  ),

  // Project rules
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      globals: { __DEV__: "readonly" }
    },
    settings: {
      "import/resolver": {
        typescript: { alwaysTryTypes: true, project: "./tsconfig.json" },
        node: { extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] }
      }
    },
    rules: {
      // Prettier
      "prettier/prettier": "warn",

      // TS-aware unused vars
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],

      // React / Hooks
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Native – pick the ones you actually want
      "react-native/no-unused-styles": "warn",
      "react-native/no-single-element-style-arrays": "warn",

      // Console
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  },

  {
    files: ["**/*.cjs"],
    languageOptions: {
      sourceType: "script"
    }
  }
]
