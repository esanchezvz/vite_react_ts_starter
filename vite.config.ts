// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'
import * as path from 'path'
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
