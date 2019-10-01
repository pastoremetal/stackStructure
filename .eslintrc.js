module.exports = {
  env: {
    browser: false,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'jest'
  ],
  rules: {
    'no-console': ['off'],
    'no-restricted-syntax': ['off']
  },
};
