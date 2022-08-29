const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const novaConfig = {
        ...config,
      baseUrl: config.env.baseUrlApi,
      };
      return novaConfig;
      // implement node event listeners here
    },
    chromeWebSecurity: false
  },
});
