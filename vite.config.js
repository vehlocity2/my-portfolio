import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Replace 'my-portfolio' with your GitHub repo name
export default defineConfig({
  // base: 'https://github.com/vehlocity2/my-portfolio.git',
  base: '/',
  plugins: [react()],
})
