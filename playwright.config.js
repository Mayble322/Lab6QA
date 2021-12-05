
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: true,
      // viewport: { width: 1280, height: 720 },
      channel: "chrome",
      // video: 'retain-on-failure',
      // trace: 'retain-on-failure',
      timeout: 100000
    },
  };
  
  module.exports = config;