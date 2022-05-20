import { readdir } from "fs/promises";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const input = {};

// 读取 每个package 的入口
const readDir = async () => {
  const dir = resolve("packages");
  try {
    const files = await readdir(dir);
    const filterFile = ["docs", "playground", "demo"];
    for (const file of files) {
      if (!filterFile.includes(file)) {
        input[file] = resolve(__dirname, `packages/${file}/index.ts`);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

readDir();

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input,
      output: {
        entryFileNames: "[name].js",
      },
      external: [/^lit/],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      copyDtsFiles: true,
      insertTypesEntry: true,
      // beforeWriteFile: (filePath: string, content: string) => {
      //   // 更改 输出路径
      //   const list = filePath.split("\\dist\\");
      //   if (list.length > 1) {
      //     const file = list[1];
      //     if (file === "index.d.ts") {
      //       console.log("content", content);
      //     } else {
      //       const result = file.split("\\");
      //       console.log("resu", result);
      //       return {
      //         filePath: resolve(__dirname, `dist/${result[0]}.d.ts`),
      //         content,
      //       };
      //     }
      //   }
      // },
      exclude: [
        "node_module/**",
        "packages/playground",
        "packages/controllers",
        "packages/docs",
        "packages/main",
        "packages/**/*css.ts",
      ],
    }),
  ],
});
