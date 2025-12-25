import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/masteroll-react/',  // Добавлено для правильных путей на GitHub Pages
})
