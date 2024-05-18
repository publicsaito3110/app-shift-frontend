import { createRouter, createWebHistory } from 'vue-router'
import Index from './app/Index.vue'
import Login from './login/Login.vue'
import Logout from './logout/Logout.vue'
import Home from './home/Home.vue'
import User from './user/User.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    //-------
    // Login
    //-------
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    //-------
    // Logout
    //-------
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },

    //-------
    // Home
    //-------
    {
      path: '/home',
      name: 'home',
      component: Home
    },

    //-------
    // User
    //-------
    {
      path: '/user',
      name: 'user',
      component: User,
      props: true
    },
  ]
})

export default router
