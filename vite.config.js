import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react(),tailwindcss()],
  server: {
    // Allow ngrok host for tunneling during development
    allowedHosts: [
      '7aa0ebc48574.ngrok-free.app',
      'localhost'
    ]
  }
})
