const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     "baseUrl": "http://localhost:8091/sabium#/",
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     }
//   },
// });

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'http://localhost:8091/sabium#/'
    } 
  },
  fixturesFolder: false,
})
