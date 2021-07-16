module.exports = {
  "roots": ["<rootDir>/tests/"],
  "transform": {
    "^.+\\.ts$": "ts-jest"
  },
  "testEnvironment": "node",
  "testRegex": "((\.spec))\\.ts$",
  "moduleFileExtensions": [
    "ts",
    "js"
  ],
  "collectCoverage": false,
  "collectCoverageFrom": [ "src/domain/**/use-cases/**" ]
};
