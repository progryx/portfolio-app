const prettierConfig = require('./prettierrc');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'react',
    'jest',
    'prettier',
    'jsx-a11y',
    'react-hooks',
    'flowtype',
    'unused-imports',
  ],
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'eslint:recommended'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: false }],
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          'ordered-imports': [
            true,
            {
              'module-source-path': 'full',
              'grouped-imports': true,
              'import-sources-order': 'lowercase-first',
              groups: [
                {
                  match: '^react',
                  order: 1,
                },
                {
                  name: 'Components',
                  match: '^@components/',
                  order: 20,
                },
                {
                  name: 'Utilities',
                  match: '^@utilities/',
                  order: 30,
                },
                {
                  name: 'Parent directory',
                  match: '^[.][.]',
                  order: 40,
                },
                {
                  name: 'Current directory',
                  match: '^[.]',
                  order: 50,
                },
                {
                  name: 'Vendors & Packages',
                  match: '^[^\\.]',
                  order: 10,
                },
              ],
            },
          ],
        },
      },
    ],
    'prettier/prettier': ['error', prettierConfig],
    'import/no-default-export': 'warn',
    'react/self-closing-comp': 'warn',
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'import/no-duplicates': ['warn', { 'prefer-inline': false }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  globals: {
    JSX: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
