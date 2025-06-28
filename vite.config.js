import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mediverse-glk5.onrender.com', // 🔁 Your Render backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
