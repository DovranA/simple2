import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true,
<<<<<<< HEAD
    proxy: {
      "/api": {
        target: "https://dev.tmbiz.info",
        changeOrigin: true,
        secure: false,
      },
    },
=======
<<<<<<< HEAD
    // proxy: {
    //   "/api": {
    //     target: "https://dev.tmbiz.info",
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //   },
    // },
=======
    port:5000,
    proxy: {
      "^/api": {
        target: "https://dev.tmbiz.info",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
>>>>>>> 1030c70 (added docker)
>>>>>>> 15fb9dd1db02ef04c0a64129d0f75377174b8c79
  }
})
