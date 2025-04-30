import { defineStore } from 'pinia'
import { auth } from '@/firebase-config'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null,
  }),
  getters: {
    getTasks: (state) => state.tasks,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = null
      try {
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')

        // Fetch tasks from Firestore or any other source
        // Example:
        // const tasksSnapshot = await getDocs(collection(db, "tasks", user.uid));
        // this.tasks = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
})
