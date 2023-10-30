import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import GoodsInfo from '@/views/GoodsInfo.vue'
import Cart from '@/views/Cart.vue'
import GoodsClass from '@/views/GoodsClass.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: MainPage,
    },
    {
      path: '/goodsinfo/:no',
      name: 'goodsinfo',
      component: GoodsInfo,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/GoodsClass',
      name: 'GoodsClass',
      component: GoodsClass,
    },
    {
      path: '/UserLogin',
      name: 'UserLogin',
      component: () => import('@/views/UserLogin.vue'),
    },
    {
      path: '/UserReg',
      name: 'UserReg',
      component: () => import('@/views/UserLogin.vue'),
      props: {
        OpenReg: true
      }
    },
    // {
    //   path: '/mainpage',
    //   name: 'mainpage',
    //   component: () => import('../views/MainPage.vue')
    // }
  ]
})

export default router
