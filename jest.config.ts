import type { Config } from "jest";

const config: Config = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["<rootDir>/**/*.test.ts"],

  moduleFileExtensions: ["ts", "js"],
};

export default config;
