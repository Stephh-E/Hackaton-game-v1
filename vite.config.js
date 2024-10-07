import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: { 
    // Fixes Kaboom bug which makes it too small
  minify: "terser",
  plugins: [react()],
},
});
