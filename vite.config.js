import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/stock-sharts/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quote: resolve(__dirname, 'quote.html'),
        aboutUs: resolve(__dirname, 'about-us.html'),
        contactUs: resolve(__dirname, 'contact-us.html')
      }
    }
  }
})
