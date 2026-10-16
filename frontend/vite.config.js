import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

// Versiunea (hash-ul commit-ului) vine de la Vercel la build; local apare „dev".
const appVersion = (process.env.VERCEL_GIT_COMMIT_SHA || 'dev').slice(0, 7)

// Scrie dist/version.json; aplicația îl citește ca să afle singură dacă există o versiune nouă.
const versionFile = () => {
  let outDir = 'dist'
  return {
    name: 'steto-version-file',
    configResolved: (c) => (outDir = c.build.outDir),
    closeBundle: () => writeFileSync(join(outDir, 'version.json'), JSON.stringify({ version: appVersion })),
  }
}

export default defineConfig({
  define: { __APP_VERSION__: JSON.stringify(appVersion) },
  plugins: [
    vue(),
    tailwindcss(),
    versionFile(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Steto',
        short_name: 'Steto',
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
        // tot conținutul medical e în pachetul principal (peste 2 MiB); îl păstrăm în cache ca aplicația să meargă și offline
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
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
