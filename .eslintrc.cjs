module.exports = {
  root: true,
  extends: ['plugin:astro/recommended'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: 'C:\\Users\\Bianca\\src\\personal-finance-app'
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module'
      },
      rules: {
        'prettier/prettier': 'error',
        'astro/no-set-html-directive': 'error'
      }
    }
  ],
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  }
}
