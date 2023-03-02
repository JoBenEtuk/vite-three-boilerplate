import { defineConfig } from 'vite'
import glslify from 'rollup-plugin-glslify'
import * as path from 'path'

import pugPlugin from 'vite-plugin-pug'

const options = { pretty: true }
const locals = { name: 'My Pug' }

export default defineConfig({
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
  },
  server: {
    host: true, // to test on other devices with IP address
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [glslify(), pugPlugin(options, locals)],
})
