import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/View.vue')
  },
  {
    path: '/view/info',
    name: 'Info',
    component: () => import('../views/view/Info.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/downbar/Create.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/downbar/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
