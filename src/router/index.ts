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
      component: () => import('@/views/category/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/index.vue')
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
      path: '/goods',
      name: 'goods',
      meta: {
        needNav: false
      },
      component: () => import('@/views/goodsList/index.vue')
    },
    {
      path: '/goods/:id',
      name: 'goodsDetail',
      meta: {
        needNav: false
      },
      component: () => import('@/views/goodsDetail/index.vue')
    },
    {
      path: '/create-order',
      name: 'createOrder',
      meta: {
        needNav: false
      },
      component: () => import('@/views/createOrder/index.vue')
    },
    {
      path: '/address-list',
      name: 'addressList',
      meta: {
        needNav: false
      },
      component: () => import('@/views/addressList/index.vue')
    },
    {
      path: '/address-new',
      name: 'addressNew',
      meta: {
        needNav: false
      },
      component: () => import('@/views/addressNew/index.vue')
    },

    {
      path: '/order',
      name: 'order',
      meta: {
        needNav: false
      },
      component: () => import('@/views/order/index.vue')
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
