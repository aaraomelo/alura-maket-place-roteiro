import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Comprar',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/register',
    name: 'Registrar',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/sell',
    name: 'Vender',
    component: () => import('../views/Sell.vue'),
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
