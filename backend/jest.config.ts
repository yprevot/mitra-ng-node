import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'node',
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of reporter names that Jest uses when writing coverage reports
   coverageReporters: [
     "json",
     "text",
     "lcov",
     "clover"
  ],

 
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",      
     "ts",    
   ],

  preset: 'ts-jest',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/__tests__"
  ], 
};

export default config;
