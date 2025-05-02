import { defineStore } from 'pinia'
import { auth, db } from '@/firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  serverTimestamp,
} from 'firebase/firestore'

export const useTaskStore = defineStore('task', {
  state: () => ({
    task: null,
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

        const tasksRef = collection(db, 'tasks')
        const q = query(tasksRef, where('assignedTo', '==', user.uid))
        const snapshot = await getDocs(q)

        this.tasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchTask(id) {
      try {
        const docRef = doc(db, 'tasks', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          this.task = { id: docSnap.id, ...docSnap.data() }
        } else {
          console.warn('No such task!')
          this.task = null
        }
      } catch (err) {
        console.error('Failed to fetch task:', err)
      }
    },
    async addTask(taskData) {
      this.error = null
      try {
        const user = auth.currentUser
        if (!user) throw new Error('User not authenticated')

        const newTask = {
          ...taskData,
          assignedTo: user.uid,
          status: 'todo',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          notes: {},
        }

        const docRef = await addDoc(collection(db, 'tasks'), newTask)

        // Optionally push to local state
        this.tasks.push({ id: docRef.id, ...newTask })

        return docRef.id
      } catch (err) {
        this.error = err.message
        throw err
      }
    },
  },
})
