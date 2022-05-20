import "@ind/main";
import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.config.compilerOptions.isCustomElement = (tag) => tag.includes("i-");
  },
  setup() {
    // ...
  },
  rootComponents: [
    // ...
  ],
});
