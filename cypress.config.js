const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: process.env.API_URL
    }
  },
  fixturesFolder: false,
})