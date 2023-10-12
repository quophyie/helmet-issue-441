import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    testFailureExitCode: 1,
    moduleFileExtensions: ['ts', 'js', 'json'],
    extensionsToTreatAsEsm: ['.ts'],
    preset: 'ts-jest/presets/default-esm',
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: 'tsconfig.json',
            },
        ],
    },
    testMatch: [
        '**/*.test.(ts|js)',
        '**/*.spec.(ts|js)'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/build',
        '<rootDir>/node_modules/'
    ],
    testEnvironment: 'node',
};

export default jestConfig;

