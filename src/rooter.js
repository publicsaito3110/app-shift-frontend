import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import ('@/views/app/Index.vue')
    },

    //-------
    // Error
    //-------
    {
      path: '/error/500',
      name: '500',
      component: () => import ('@/views/error/error500.vue')
    },

    //-------
    // Login
    //-------
    {
      path: '/login',
      name: 'login',
      component: () => import ('@/views/login/Login.vue')
    },

    //-------
    // Logout
    //-------
    {
      path: '/logout',
      name: 'logout',
      component: () => import ('@/views/logout/Logout.vue')
    },

    //-------
    // Home
    //-------
    {
      path: '/home',
      name: 'home',
      component: () => import ('@/views/home/Home.vue')
    },

    //-------
    // User
    //-------
    {
      path: '/user',
      name: 'user',
      component: () => import ('@/views/user/User.vue'),
      props: true
    },
  ]
})

export default router
