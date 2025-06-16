const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  eyesIsDisabled: false,
  eyesBrowser:
    '[{"width":800,"height":600,"name":"chrome"},{"width":700,"height":500,"name":"firefox"},{"deviceName":"Pixel 2","screenOrientation":"portrait"}]',
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 1,
  eyesRemoveDuplicateTests: false,
  universalDebug: false,
  appliConfFile: {
    testConcurrency: 1,
    apiKey: 'your API key',
    browser: [
      {
        width: 800,
        height: 600,
        name: 'chrome',
      },
      {
        width: 700,
        height: 500,
        name: 'firefox',
      },
      {
        deviceName: 'Pixel 2',
        screenOrientation: 'portrait',
      },
    ],
    batchName: 'Login-Screen-Multi-Browser',
    batch: {
      id: 'a93f88b8-d39b-42f0-8484-48a920de47d1',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 60079,
  isComponent: false,
  e2e: {
    baseUrl: 'https://radlisowski.github.io/',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
