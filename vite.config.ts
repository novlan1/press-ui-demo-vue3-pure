import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { ifdefVitePlugin, aliasForLibrary } from 'plugin-light/lib/plugin';
import type { Plugin }from 'vite'

const customElements = [
  'uni-scroll-view',
  // image
  'uni-image',
  // dialog
  'Button',
  // circle
  'cover-view',
  // notice-bar
  'navigator'
]

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => customElements.includes(tag),
        },
      },
    }),
    vueJsx(),
    ifdefVitePlugin({
      context: { H5: true, VUE3: true },
      type: ['css', 'js', 'html'],
    }) as Plugin,
    aliasForLibrary({
      list: [
        'press-ui',
      ],
      target: 'src/library',
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      src: path.resolve(__dirname, 'src'),
      'press-ui': path.resolve(__dirname, 'src/library/press-ui')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  optimizeDeps: {
    esbuildOptions: {
    }
  },
  base: './',
  server: {
    port: 5002,
  },
})
