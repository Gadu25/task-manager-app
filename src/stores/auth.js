import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/firebase-config' // adjust path
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)

  // Actions
  const fetchUser = () => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser
    })
  }

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      user.value = result.user
    } catch (error) {
      console.error('Google Sign-In Error:', error)
      throw error
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
      user.value = null
    } catch (error) {
      console.error('Sign-Out Error:', error)
      throw error
    }
  }

  return {
    user,
    fetchUser,
    signInWithGoogle,
    signOutUser,
  }
})
