import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Deep Coomer Portfolio',
        short_name: 'Deep Coomer Portfolio',
        description: 'A portfolio website of Deep Coomer.',
        theme_color: 'blueviolet',
        start_url: '/',
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        orientation: "portrait",
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          ,
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon"
          },
          {
            src: "/maskable_icon.png",
            sizes: "225x225",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
      },
    }),
  ],
})
