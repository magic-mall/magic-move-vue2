import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/layout'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    children: [{
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('@/views/categories/index.vue'),
      },
      {
        path: '/shoppingcart',
        name: 'shoppingcart',
        component: () => import('@/views/shoppingcart/index.vue'),
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('@/views/me/index.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router