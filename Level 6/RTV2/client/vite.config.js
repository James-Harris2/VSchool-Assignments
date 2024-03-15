import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': "http://localhost:8500",
      '/api' : "http://localhost:8500"
    }
  }
})
