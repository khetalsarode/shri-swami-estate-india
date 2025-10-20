// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // 👈 1. Import the path module

const repoName = 'shri-swami-estate-india';

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,

  // 2. 👇 ADD THE RESOLVE CONFIGURATION
  resolve: {
    alias: {
      // Maps "@" to the absolute path of the "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})