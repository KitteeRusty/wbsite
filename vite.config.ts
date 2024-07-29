import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: '/website', // 替换为您的仓库名称
    build: {
      outDir: 'dist'
    }
  }
})
