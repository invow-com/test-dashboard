module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // This tells Jest to use Babel to process .js and .jsx files
    },
    moduleFileExtensions: ['js', 'jsx'], // List the file extensions Jest should look for
  };
  