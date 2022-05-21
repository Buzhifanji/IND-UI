import kebabcase from "lodash.kebabcase";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const viewModules = import.meta.glob("../../docs/demos/**/*.vue");

// const nameFromPath = (path: string) => path.replace(/^.*\/(\w+)\.vue$/, "$1");
const nameDir = (path: string) => path.match(/(demos\/=?)(\S*)/);

const pages: RouteRecordRaw[] = Object.keys(viewModules).map((path) => {
  const name = nameDir(path)![2].replace(/.vue/, "");
  return {
    name,
    path: name === "404" ? "/:patchMatch(.*)*" : "/" + kebabcase(name),
    component: viewModules[path],
    meta: {
      hide: name === "404",
    },
  };
});

export const router = createRouter({
  history: createWebHistory(),
  routes: [...pages],
});
