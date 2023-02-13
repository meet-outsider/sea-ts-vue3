import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
    base: './',
    server: {
        port: 1024
    },
    build:{
        outDir:'deploy/dist',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            }
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    // vite.config.js

    css: {
        /* CSS 预处理器 */
        preprocessorOptions: {
            scss: {
                // additionalData: '@import "src/assets/styles/var.scss";'
            }
        }
    },
    resolve: {
        alias: [
            {find: "@", replacement: path.resolve(__dirname, "./src")},
        ]
    },
})
