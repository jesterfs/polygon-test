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
    path: '/assessment',
    name: 'Assessment',
    component: () => import(/* webpackChunkName: "assessment" */ '../views/Assessment.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
