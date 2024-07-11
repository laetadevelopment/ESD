import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'
import { auth, firestore } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp, updateDoc, arrayUnion } from 'firebase/firestore'
import { useNavigationStore } from '@/stores/navigation'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    currentGuestNavigationID: null as string | null
  }),
  actions: {
    setUser(user: User | null) {
      this.currentUser = user
    },
    clearUser() {
      this.currentUser = null
      this.currentGuestNavigationID = null
    },
    async register(name: string, email: string, password: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        await this.storeUserInFirestore(user, name)
        await this.updateNavigationUserType(user.uid)
        return user
      } catch (error) {
        console.error('Error creating user:', error)
        throw error
      }
    },
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        this.setUser(user)
        await this.updateUserInFirestore(user, undefined, false)
        await this.updateNavigationID(user.uid)
        await this.addUserHistoryEntry(user.uid, 'login')
        return user
      } catch (error) {
        console.error('Error logging in:', error)
        throw error
      }
    },
    async logout() {
      try {
        const user = this.currentUser
        if (user) {
          await this.updateUserInFirestore(user, undefined, true)
          await this.addUserHistoryEntry(user.uid, 'logout')
        }
        await signOut(auth)
        this.clearUser()
      } catch (error) {
        console.error('Error logging out:', error)
        throw error
      }
    },
    async storeUserInFirestore(user: User, name?: string) {
      try {
        await setDoc(doc(firestore, 'users', user.uid), {
          email: user.email,
          displayName: name || user.displayName,
          createdAt: Date.now(),
          navigationID: this.currentGuestNavigationID,
          lastLogin: null,
          lastLogout: null,
          userHistory: []
        })
      } catch (error) {
        console.error('Error storing user in Firestore:', error)
      }
    },
    async updateUserInFirestore(user: User, name?: string, isLogout?: boolean) {
      try {
        const userRef = doc(firestore, 'users', user.uid)
        const currentTimestamp = Date.now()
        await updateDoc(userRef, {
          ...(name && { displayName: name }),
          lastLogin: isLogout ? serverTimestamp() : currentTimestamp,
          lastLogout: isLogout ? currentTimestamp : serverTimestamp(),
          navigationID: this.currentGuestNavigationID
        })
      } catch (error) {
        console.error('Error updating user in Firestore:', error)
      }
    },
    async updateNavigationUserType(userId: string) {
      const navigationStore = useNavigationStore()
      if (navigationStore.currentGuestUUID) {
        const navigationCollectionRef = doc(firestore, 'navigation', navigationStore.currentGuestUUID)
        await setDoc(navigationCollectionRef, {
          userType: 'registered'
        }, { merge: true })
      }
    },
    async updateNavigationID(userId: string) {
      const navigationStore = useNavigationStore()
      this.currentGuestNavigationID = navigationStore.currentGuestUUID
      const userRef = doc(firestore, 'users', userId)
      await setDoc(userRef, {
        navigationID: this.currentGuestNavigationID
      }, { merge: true })
    },
    async addUserHistoryEntry(userId: string, action: string) {
      try {
        const userRef = doc(firestore, 'users', userId)
        const currentTimestamp = Date.now()
        await updateDoc(userRef, {
          userHistory: arrayUnion({
            action: action,
            timestamp: currentTimestamp
          })
        })
      } catch (error) {
        console.error('Error adding user history entry:', error)
      }
    }
  },
  persist: true
})
