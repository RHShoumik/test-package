/// <reference types="vitest" />
import { defineConfig } from 'vite'
// import react from "@vitejs/plugin-react-swc";
import dts from 'vite-plugin-dts'
import { peerDependencies } from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  // plugins: [react()],
  plugins: [dts()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'vite-react-ts-button', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
})
