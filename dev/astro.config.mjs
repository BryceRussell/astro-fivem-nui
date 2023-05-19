import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  base: '/html',
  outDir: '../html',
  build: {
    format: 'file',
    assets: '_'
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    compress()
  ],
  experimental: {
    inlineStylesheets: "always",
    assets: true
  }
});