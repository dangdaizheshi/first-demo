import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login/index.vue'),
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue')
        }
      ]
    }
  ],
  // 配置路由切换时页面自动回到顶部
  scrollBehavior() {
    return{
      top: 0,
    }
  }
})

export default router