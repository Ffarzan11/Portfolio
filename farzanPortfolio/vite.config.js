import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/http://Ffarzan11.github.io/portfolio/",
  server: {
    port: 3000
  }
})
