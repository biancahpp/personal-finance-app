import prettier from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'
import parser from 'astro-eslint-parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...compat.extends('plugin:astro/recommended'),
  {
    plugins: {
      prettier
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        tsconfigRootDir: 'C:\\Users\\Bianca\\src\\personal-finance-app'
      }
    }
  },
  {
    files: ['**/*.astro'],

    languageOptions: {
      parser: parser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        extraFileExtensions: ['.astro']
      }
    },

    rules: {
      'prettier/prettier': 'error',
      'astro/no-set-html-directive': 'error'
    }
  }
]
