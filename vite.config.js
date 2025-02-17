// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'test-example/index.html')
    },
    outDir: 'example-dist'
  }
})