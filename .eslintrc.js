module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'import/order': [
      'error', {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
      },
    ],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
    'prefer-template': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error'],
    'no-multi-spaces': ['error'],
    'no-unexpected-multiline': ['error'],
    'object-curly-newline': ['error', { multiline: true }],
    'array-bracket-newline': ['error', { multiline: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'function-paren-newline': ['error', 'multiline'],
    'no-trailing-spaces': 'error',
    'react/prop-types': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],

    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],

    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  settings: {
    react: { 'version': 'detect' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
};
