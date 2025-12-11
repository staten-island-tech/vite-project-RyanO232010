import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',   // output folder
    rollupOptions: {
      input: 'index.html', // ensures the entry HTML is treated as root
    },
  },
})