import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
      plugins: [vue()],
      resolve: {
              alias: {
                        '@': path.resolve(__dirname, 'src'),
                        '@locales': path.resolve(__dirname, '../locales')
              }
      },
      server: {
              host: '0.0.0.0',
              allowedHosts: '.sslip.io',
              port: 3000,
              hmr: {
                        host: '92.176.76.208',
                        port: 443,
                        protocol: 'http'
              },
              open: true,
              proxy: {
                        '/api': {
                                    target: 'http://qgo3ojwu3rw36shgngk80ykd.92.176.76.208.sslip.io:5001',
                                    changeOrigin: true,
                                    secure: false
                        }
              }
      }
})
