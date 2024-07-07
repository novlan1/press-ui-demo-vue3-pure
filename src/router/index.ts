import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getPressUIPages } from './press-pages'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/pages/press',
    },
    {
      path: '/pages/press',
      component: () => import('../views/press/index.vue'),
      children: [
        {
          path: '',
          component: () => import('src/pages/index/index.vue'),
          meta: {
            showBack: false,
            title: 'Press UI Pure',
          },
        },
        {
          path: 'button/button',
          component: () => import('../pages/press/button/button.vue')
        },
      ]
    }
  ]
})

export default router
