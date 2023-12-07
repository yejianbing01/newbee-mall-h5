import { getLocal } from '@/utils/localStage'
import { createRouter, createWebHashHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    needNav?: boolean
  }
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/Category.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        needNav: false
      },
      component: () => import('@/views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        needNav: false
      },
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        needNav: false
      },
      component: () => import('@/views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (['/login', '/register'].includes(to.path)) {
    const token = getLocal('token')
    token && next('/')
  }
  next()
})

export default router
