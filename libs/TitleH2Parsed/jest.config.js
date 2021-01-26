module.exports = {
  displayName: "TitleH2Parsed",
  preset: "../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": [
      "babel-jest",
      { cwd: __dirname, configFile: "./babel-jest.config.json" },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/TitleH2Parsed",
};
