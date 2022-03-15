import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'
require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env
  },
  plugins: [react(), EnvironmentPlugin('all', { prefix: 'VITE_' })]
})
