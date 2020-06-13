module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', 'lowerCase'],
    'scope-empty': [2, 'never'],
  },
}
