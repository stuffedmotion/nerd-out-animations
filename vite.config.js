import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteFonts from "vite-plugin-fonts";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/sections"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: ["Signika Negative"],
      },
    }),
  ],
});
