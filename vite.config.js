import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: ['5173-idjbvhy3m9v8nnrxhghgc-d7dc5b48.manus-asia.computer', '5174-idjbvhy3m9v8nnrxhghgc-d7dc5b48.manus-asia.computer'],
  },
})
