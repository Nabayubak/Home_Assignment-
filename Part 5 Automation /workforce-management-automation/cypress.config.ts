import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    video: false,
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
