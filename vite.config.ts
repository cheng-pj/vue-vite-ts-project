import {fileURLToPath, URL} from 'url'

import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {PreRenderedChunk} from "rollup";

// import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

function resolve(dir: any) {
	return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
	console.log('process.cwd()', process.cwd(), command, mode)

	return {
		plugins: [
			vue(),
			vueJsx(),
			legacy({
				targets: ['ie >= 11'],
				additionalLegacyPolyfills: ['regenerator-runtime/runtime']
			}),
			/*createSvgIconsPlugin({
				// config svg dir that can config multi
				iconDirs: [path.resolve(process.cwd(), 'src/icons/common'), path.resolve(process.cwd(), 'src/icons/nav-bar')],
				// appoint svg icon using mode
				symbolId: 'icon-[dir]-[name]'
			}),*/
		],
		resolve: {
			alias: {
				'@': resolve('src') // fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			// 服务配置
			port: 3000, // 类型： number 指定服务器端口;
			hmr: {overlay: false}, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
			open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
			cors: true // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
			//proxy look for https://vitejs.cn/config/#server-proxy
			// proxy: {
			//   '/api': {
			//     target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_URL,
			//     changeOrigin: true,
			//     rewrite: (path) => path.replace(/^\/api/, '')
			//   }
			// }
		},
		build: {
			// 指定输出路径（相对于项目根目录).
			outDir: 'dist',
			// 指定输出路径（相对于项目根目录).
			assetsDir: 'static',
			// 小于此阈值的导入或引用资源将内联为base64编码,以避免额外的 http 请求. 设置为0可以完全禁用此项.
			assetsInlineLimit: 4096,
			/**
			 * 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在其被加载时插入。
			 * 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
			 * 注意: 如果指定了 build.lib，build.cssCodeSplit 会默认为 false。
			 */
			cssCodeSplit: true,
			sourcemap: true,
			rollupOptions: {
				output: [
					{
						file: 'node_modules/naive-ui',
						dir: 'static/js',
						name: 'chunk-naiveUI',
						format: 'esm',
					}
				]
			},
			// {
			// 	output: {
			// 		// chunkFileNames: 'static/js/123-[hash].js',
			// 		chunkFileNames: {
			//
			// 		},
			// 		entryFileNames: 'static/js/[name]-[hash].js',
			// 		assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			// 	}
			// },
			// 最小化混淆
			minify: 'esbuild',
			brotliSize: false,
			// 消除打包大小超过500kb警告
			chunkSizeWarningLimit: 2000,
			// 生产环境删除日志和调试信息
			terserOptions: {
				// detail to look https://terser.org/docs/api-reference#compress-options
				compress: {
					drop_console: false,
					pure_funcs: ['console.log', 'console.info'],
					drop_debugger: true
				}
			},
			// lib: {
			// 	entry: path.resolve(__dirname, 'lib/main.js'),
			// 	name: 'chunk-libs',
			// 	fileName: (format) => `chunk-libs.${format}.js`
			// }
		},
		css: {
			preprocessorOptions: {
				// 定义全局 scss 变量
				scss: {
					// additionalData: `@import "@/styles/variables.scss";`
				}
			}
		}
	}
})
