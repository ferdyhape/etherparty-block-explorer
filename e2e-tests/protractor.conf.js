exports.config = {
  allScriptsTimeout: 11000,

  specs: ["*.js"],

  capabilities: {
    browserName: "chrome",
  },

  baseUrl: "http://localhost:8001/app/",

  framework: "jasmine",

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
};
