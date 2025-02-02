export default {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'mjs', 'json'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
