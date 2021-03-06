import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

const filteredLogs = ["Running in dev mode", "lit-html is in dev mode"];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  files: "packages/**/**/*.test.ts",

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === "string" &&
        filteredLogs.some((l) => arg.includes(l))
      ) {
        return false;
      }
    }
    return true;
  },

  plugins: [esbuildPlugin({ ts: true, target: "auto" })],

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: "auto",

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // concurrency: 1,

  /** Browsers to run tests on */
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    playwrightLauncher({ product: "webkit" }),
  ],
  testRunnerHtml: (testFramework) => `
  <html lang="en-US">
    <head>IND-UI test</head>
    <body>
    <script type="module" src="dist/main.js"></script>
      <script type="module" src="${testFramework}"></script>
    </body>
  </html>
`,
  // See documentation for all available options
});
