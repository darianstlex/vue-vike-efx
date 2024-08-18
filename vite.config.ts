import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import {fileURLToPath, URL} from "node:url";

const config: UserConfig = {
  plugins: [vue(), vike()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
}

export default config
