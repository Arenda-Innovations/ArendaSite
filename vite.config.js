import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: "arenda-innovations",
    project: "javascript-react",
    telemetry: false, // optional, disables Sentry usage tracking
  })],

  build: {
    sourcemap: true
  }
})