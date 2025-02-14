import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    copy({
      targets: [
        { src: "public/*", dest: "dist/" } // ✅ 复制 public 里的所有文件到 dist/
      ],
      hook: "writeBundle"
    })
  ],
  root: "./src", // 指定源码目录
  publicDir: "../public", // 确保 Vite 仍然使用 public 目录
  build: {
    outDir: "../dist", // 输出目录
    emptyOutDir: true, // 构建前清空文件夹
    minify: "terser" // 使用 terser 进行压缩
  }
});
