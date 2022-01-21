import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue') // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/HelloWorld.vue') // 注意这里要带上 文件后缀.vue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
