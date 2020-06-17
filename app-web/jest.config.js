module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },

  moduleDirectories: ['node_modules'],

  preset: 'ts-jest',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Update when there is a new testing folder directory
  roots: ['<rootDir>'],

  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

  testPathIgnorePatterns: ['./node_modules/'],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
