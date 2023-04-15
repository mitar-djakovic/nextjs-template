import nextJest from 'next/jest';
import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const createJestConfig = nextJest({
	dir: './',
});

const config: JestConfigWithTsJest = {
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
	},
	testEnvironment: 'jsdom',
	globals: {},
	coverageReporters: ['json', 'text', 'html', 'lcov'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*/*.d.ts',
		'!src/**/*/Loadable.{js,jsx,ts,tsx}',
		'!src/**/*/types.ts',
		'!src/**/store.ts',
		'!src/index.tsx',
		'!src/serviceWorker.ts',
		'!<rootDir>/node_modules/',
		'!**/templates/**',
		'!**/template/**',
	],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 50,
			statements: 50,
		},
	},
};

export default createJestConfig(config);
