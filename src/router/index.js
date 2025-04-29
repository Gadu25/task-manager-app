import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import Dashboard from '../views/Dashboard.vue'
import MyTasks from '../views/MyTasks.vue'
import Auth from '@/views/Auth.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'dashboard',
//       component: Dashboard,
//       meta: { requiresAuth: true },
//     },
//     {
//       path: '/my-tasks',
//       name: 'tasks',
//       component: MyTasks,
//       meta: { requiresAuth: true },
//     },
//     {
//       path: '/login',
//       name: 'auth',
//       component: Auth,
//     },
//   ],
// })

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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const { user } = storeToRefs(authStore)

  if (to.meta.requiresAuth && !user.value) {
    next('/login')
  } else {
    next('/')
  }
})

export default router
