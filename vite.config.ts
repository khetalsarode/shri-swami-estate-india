// // vite.config.ts
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import path from 'path' // 👈 1. Import the path module

// const repoName = 'shri-swami-estate-india';

// export default defineConfig({
//   plugins: [react()],
//   base: `/${repoName}/`,

//   // 2. 👇 ADD THE RESOLVE CONFIGURATION
//   resolve: {
//     alias: {
//       // Maps "@" to the absolute path of the "src" folder
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' 

// REMOVE: const repoName = 'shri-swami-estate-india';

export default defineConfig({
  plugins: [react()],
  
  // 💥 CRUCIAL CHANGE: Set base to '/' (the root of your custom domain)
  base: '/', 

  // Keep the resolve configuration as it is still needed for path aliases like "@/..."
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});