import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// views
import Dashboard from '../views/Dashboard.vue'
import MyTasks from '../views/MyTasks.vue'
import Auth from '@/views/Auth.vue'
import Task from '@/views/Tasks/Task.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: MyTasks,
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks/:id',
    name: 'task',
    component: Task,
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

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login') // Redirect to login if the user isn't authenticated
  } else if (to.name === 'auth' && authStore.isAuthenticated) {
    next('/') // Redirect to dashboard if already logged in and trying to access auth page
  } else {
    next() // Proceed with the route
  }
})

export default router
