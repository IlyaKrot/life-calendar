import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  base: '/life-calendar/',
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
