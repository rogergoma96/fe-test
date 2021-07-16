module.exports = {
  unmockedModulePathPatterns: ['react'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom-global',
  globals: {},
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
