import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import Dashboard from '../views/Dashboard.vue'
import MyTasks from '../views/MyTasks.vue'
import Auth from '@/views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/my-tasks',
    name: 'tasks',
    component: MyTasks,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'auth',
    component: Auth,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // console.log('User:', user.value) // Now this should have the user data

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.log('Auth required, but no user found')
    next('/login') // Redirect to login if the user isn't authenticated
  } else if (to.name === 'auth' && authStore.isAuthenticated) {
    console.log('User is authenticated, redirecting to dashboard')
    next('/') // Redirect to dashboard if already logged in and trying to access auth page
  } else {
    next() // Proceed with the route
  }
})

export default router
