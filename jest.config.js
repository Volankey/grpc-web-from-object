module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: false,
  collectCoverageFrom: ['./src/grpc-web-invoker/index.ts'],
  transform: {
    '^.+\\.(jsx|js)?$': 'babel-jest',
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['!node_modules/'],
};
