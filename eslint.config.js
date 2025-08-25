// ESM file — rename to .mjs (or set "type":"module" in package.json)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Translate legacy "extends" (plugin:react/... etc.) to flat configs
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // Base JS + TS rules (flat-native)
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Legacy shareable configs via FlatCompat
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ),

  // Project rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json', // remove if performance is slow
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: { __DEV__: 'readonly' },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: {} },
    },
    rules: {
      'prettier/prettier': 'warn',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];