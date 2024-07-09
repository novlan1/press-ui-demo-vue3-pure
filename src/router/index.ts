import { createRouter, createWebHashHistory } from 'vue-router'
import { getPressUIPages } from './press-pages'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
            title: 'Press UI Vue3 Pure',
          },
        },
        ...getPressUIPages(),
      ]
    }
  ]
})

export default router
