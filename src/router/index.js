import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/hh/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/hh/home'),
    redirect: '/wel',
    children: [{
      path: '/wel',
      name: 'wel',
      component: () => import('@/views/hh/wel')
    }, ]
  },

]

const router = new VueRouter({
  routes
})

export default router