import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', //打包路径
  server: {
    open: true, // 是否自动打开浏览器(默认false)
    port: 16888, //启动端口
    proxy: {
      // 选项写法
      '/api': 'http://loaclhost:16877' //代理网址
    },
    cors: true //开启跨域
  },
  build: {
    outDir: 'dist'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  }
})
