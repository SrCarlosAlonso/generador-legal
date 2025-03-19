import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@docs': path.resolve(__dirname, './src/docs')
    },
    extensions: ['.ts', '.js']
  }
})
