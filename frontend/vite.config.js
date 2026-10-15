import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'StudentMed',
        short_name: 'StudentMed',
        description: 'Materiale, flashcards și grile pentru studenții la medicină.',
        lang: 'ro',
        theme_color: '#16a34a',
        background_color: '#f6fbf7',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
        // pdf.js (~1,8 MB) se descarcă doar când cineva importă un PDF, nu la instalarea aplicației.
        globIgnores: ['**/pdf*.{js,mjs}'],
        runtimeCaching: [
          {
            urlPattern: /\/assets\/pdf.*\.(m?js)$/,
            handler: 'CacheFirst',
            options: { cacheName: 'pdfjs', expiration: { maxEntries: 6 } },
          },
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
})
