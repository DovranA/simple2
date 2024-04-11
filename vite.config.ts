import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,

    proxy: {
      '^/api': {
        target: 'https://dev.tmbiz.info',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
