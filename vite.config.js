import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
  theme: {
    extend: {},
  },
  plugins: [react()],
})
