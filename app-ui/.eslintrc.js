module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', '@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['lib', 'cypress/plugins/index.js', '.eslintrc.js'],
  // There was a reason why we added this, but I forgot to document why. Will revisit
  // if something breaks.
  // parserOptions: {
  //   parser: 'typescript-eslint-parser',
  //   project: ['./tsconfig.json'],
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  //   project: 'tsconfig.json',
  //   tsconfigRootDir: __dirname,
  // },
}
