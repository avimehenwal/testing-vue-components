module.exports = {
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  // verbose: true,
  roots: [
    "<rootDir>/src/",
    "<rootDir>/specs/"
  ],
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
