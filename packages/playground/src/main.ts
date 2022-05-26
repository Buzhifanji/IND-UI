import "@ind/main";
import { registerIconLibrary } from "@ind/main";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

registerIconLibrary("my-icon", {
  handleUrl: (name: string) => `/public/icons/${name}.svg`,
  handleSvg: (svg) => svg.setAttribute("fill", "currentColor"),
});

createApp(App).use(router).mount("#app");
