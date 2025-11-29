import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /data and /control endpoints to the backend during development
      '/data': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '/control': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    }
  },
})
