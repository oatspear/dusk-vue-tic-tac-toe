import path from "node:path"
import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import dusk from "dusk-games-sdk/vite"
import { qrcode } from "vite-plugin-qrcode"

// https://vitejs.dev/config/
export default defineConfig({
  base: "", // Makes paths relative
  plugins: [
    vue(),
    qrcode(), // only applies in dev mode
    dusk({
      logicPath: path.resolve("./src/logic.ts"),
      minifyLogic: false, // This flag can be used if your logic reaches the allowed limit. However, it will make it significantly more difficult to detect validation issues
      ignoredDependencies: [],
    }),
  ],
})
