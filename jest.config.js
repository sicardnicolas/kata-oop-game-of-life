module.exports = {
  coverageProvider: "v8",
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
  ],
  resetMocks: true,
  restoreMocks: true,
  rootDir: "./src",
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(uuid)/)",
  ],
};
