import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import GoodsInfo from '@/views/GoodsInfo.vue'

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
    }
    // {
    //   path: '/mainpage',
    //   name: 'mainpage',
    //   component: () => import('../views/MainPage.vue')
    // }
  ]
})

export default router
