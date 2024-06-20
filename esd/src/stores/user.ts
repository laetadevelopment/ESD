import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'
import { auth, firestore } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null
  }),
  actions: {
    setUser(user: User | null) {
      this.currentUser = user
      if (user) {
        this.storeUserInFirestore(user)
        this.storeUserActivity(user)
      }
    },
    clearUser() {
      this.currentUser = null
    },
    async register(email: string, password: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        this.setUser(userCredential.user)
        return userCredential.user
      } catch (error) {
        console.error('Error creating user:', error)
        throw error
      }
    },
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        this.setUser(userCredential.user)
        return userCredential.user
      } catch (error) {
        console.error('Error logging in:', error)
        throw error
      }
    },
    async logout() {
      try {
        await signOut(auth)
        this.clearUser()
      } catch (error) {
        console.error('Error logging out:', error)
        throw error
      }
    },
    async storeUserInFirestore(user: User) {
      try {
        await setDoc(doc(firestore, 'users', user.uid), {
          email: user.email,
          displayName: user.displayName,
          createdAt: Date.now()
        })
      } catch (error) {
        console.error('Error storing user in Firestore:', error)
      }
    },
    async storeUserActivity(user: User) {
      try {
        const userRef = doc(firestore, 'users', user.uid)
        await setDoc(userRef, {
          lastLogin: serverTimestamp(),
          lastPage: window.location.pathname,
          lastSection: 'login'
        }, { merge: true })
      } catch (error) {
        console.error('Error storing user activity in Firestore:', error)
      }
    }
  }
})
