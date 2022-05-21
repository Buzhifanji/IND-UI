import { defineUserConfig } from "@vuepress/cli";
import backToTopPlugin from "@vuepress/plugin-back-to-top";
import nprogressPlugin from "@vuepress/plugin-nprogress";
import registerComponentsPlugin from "@vuepress/plugin-register-components";
import path from "path";
import { defaultTheme } from "vuepress";
import { navbarEn, navbarZh } from "./config/navbar";
import { sidebarZh } from "./config/sidebar";

export default defineUserConfig({
  title: "IND-UI",
  locales: {
    "/": {
      lang: "en-US",
      description: "Web Component",
    },
    "/zh/": {
      lang: "zh-CN",
      description: "符合Web Component规范的前端组件库",
    },
  },
  theme: defaultTheme({
    locales: {
      "/zh/": {
        navbar: navbarZh,
        sidebar: sidebarZh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
      },
      "/": {
        navbar: navbarEn,
      },
    },
  }),

  // bundler: viteBundler({
  //   vuePluginOptions: {
  //     customElement: "i-",
  //   },
  // }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "../demos"),
    }),
    backToTopPlugin(),
    nprogressPlugin(),
  ],
});
