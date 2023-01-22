const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  integration: {
    setupNodeEvents(on, config) {},
  },
})
