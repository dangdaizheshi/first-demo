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
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue'),
          name: 'Category'
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/Subcategory/index.vue'),
          name: 'Subcategory'
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Details/index.vue'),
          name: 'Detail'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      name: 'Login'
    }
  ],
  scrollBehavior() {
    return{
      top: 0,
    }
  }
})

export default router