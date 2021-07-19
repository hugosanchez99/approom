import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from '@/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/view/:id',
    name: 'View',
    component: () => import('../views/view/View.vue'),
    meta: { requiresAuth: true }
  },
  
  {
    path: '/places',
    name: 'Place',
    component: () => import('../views/downbar/Places.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/downbar/Profile.vue'),
    meta: { requiresAuth: true }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const rutaApp = to.matched.some(record => record.meta.requiresAuth)

  if (rutaApp) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next({ name: 'Login' })
      }
    })
  } else {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({ name: 'Home' })
      } else {
        next()
      }
    })
  }

})

export default router
