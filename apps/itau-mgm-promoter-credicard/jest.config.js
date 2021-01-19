module.exports = {
  displayName: "itau-mgm-promoter-credicard",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": [
      "babel-jest",
      { cwd: __dirname, configFile: "./babel-jest.config.json" },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/itau-mgm-promoter-credicard",
};
