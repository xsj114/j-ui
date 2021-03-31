module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleNameMapper: {
    "^@utils(.*)$": "<rootDir>/src/utils/$1",
    "^@packages(.*)$": "<rootDir>/src/packages/$1",
    "^@mixins(.*)$": "<rootDir>/src/mixins/$1"
  },
  testEnvironment: "jsdom"
}
