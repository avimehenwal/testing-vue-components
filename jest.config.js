module.exports = {
  // preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  verbose: true,
  roots: [
    "<rootDir>/components/",
    "<rootDir>/specs/"
  ],
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/components/$1',
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  snapshotSerializers: [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
