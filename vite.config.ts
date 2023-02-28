import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from "path";
import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

export default ({mode}) => {
    console.log(mode);  // development or product
    const env = loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
    console.log(env);   //变量在命令行里打印出来
    return defineConfig({
        base: './',
        server: {
            port: 1024,
            proxy: {
                "/api": {
                    target: env.VITE_BACKEND_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
        build: {
            outDir: 'deploy/dist',
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
            createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',

                /**
                 * 自定义插入位置
                 * @default: body-last
                 */
                // inject?: 'body-last' | 'body-first'

                /**
                 * custom dom id
                 * @default: __svg__icons__dom__
                 */
                // customDomId: '__svg__icons__dom__',
            }),
        ],
        resolve: {
            alias: [
                {find: "@", replacement: path.resolve(__dirname, "./src")},
            ]
        },
        // css: {
        //     /* CSS 预处理器 */
        //     preprocessorOptions: {
        //         scss: {
        //             // additionalData: '@import "src/assets/styles/var.scss";'
        //         }
        //     }
        // },
        optimizeDeps: {
            include: [
                'vue',
                'vue-router',
                'axios',
                'qs'
            ]
        }
    })
}



