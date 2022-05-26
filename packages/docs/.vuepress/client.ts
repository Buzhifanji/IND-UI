import "@ind/main";
import { registerIconLibrary } from "@ind/main";
import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.config.compilerOptions.isCustomElement = (tag) => tag.includes("i-");
    registerIconLibrary("my-icon", {
      handleUrl: (name: string) => `/icons/${name}.svg`,
      handleSvg: (svg) => svg.setAttribute("fill", "currentColor"),
    });
  },
  setup() {
    // ...
  },
  rootComponents: [
    // ...
  ],
});
