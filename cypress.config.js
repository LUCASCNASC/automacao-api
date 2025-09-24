const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL: process.env.BASE_URL
    }
  },
  fixturesFolder: false,
})