import { defineStore } from 'pinia'
import { auth } from '@/firebase-config' // adjust path
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
  },
  actions: {
    fetchUser() {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (currentUser) => {
            this.user = currentUser
            unsubscribe() // Unsubscribe after the user is fetched
            resolve(this.user) // Resolve the Promise with the user
          },
          (error) => {
            reject(error) // Reject the Promise if there is an error
          },
        )
      })
    },
    signInWithGoogle() {
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
        .then((result) => {
          this.user = result.user
        })
        .catch((error) => {
          throw error
        })
    },
    signOutUser() {
      return signOut(auth)
        .then(() => {
          this.user = null
        })
        .catch((error) => {
          console.error('Sign-Out Error:', error)
          throw error
        })
    },
  },
})
