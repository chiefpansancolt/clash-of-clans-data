/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@/types$': '<rootDir>/src/types/index.ts',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/common/(.*)$': '<rootDir>/src/common/$1',
    '^@/modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@/data/(.*)$': '<rootDir>/data/$1',
    '^@/calculators$': '<rootDir>/src/modules/calculators/index.ts',
    '^@/calculators/(.*)$': '<rootDir>/src/modules/calculators/$1',
    '^@/magic-items$': '<rootDir>/src/modules/magic-items/index.ts',
    '^@/magic-items/(.*)$': '<rootDir>/src/modules/magic-items/$1',
    '^@/season-pass$': '<rootDir>/src/modules/season-pass/index.ts',
    '^@/season-pass/(.*)$': '<rootDir>/src/modules/season-pass/$1',
    '^@/clan$': '<rootDir>/src/modules/clan/index.ts',
    '^@/clan/(.*)$': '<rootDir>/src/modules/clan/$1',
  },
};
