import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      name: 'Layout',
      children: [
        {
          path: '',
          component: () => import('@/views/Home/index.vue'),
          name: 'Home'
        },
        {
          path: 'Category',
          component: () => import('@/views/Category/index.vue'),
          name: 'Category'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      name: 'Login'
    }
  ],
})

export default router