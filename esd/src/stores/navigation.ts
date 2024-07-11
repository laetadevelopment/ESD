import { defineStore, type StoreDefinition } from 'pinia'
import { firestore, FieldValue } from '@/firebase'
import { doc, setDoc, getDocs, collection, serverTimestamp, updateDoc, arrayUnion, getDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

interface NavigationState {
  currentGuestUUID: string | null
  currentPage: string
  currentSection: string
  navigationHistory: { page: string; section: string; timestamp: number }[]
}

const useNavigationStoreDefinition: StoreDefinition<
  'navigation',
  NavigationState,
  {},
  {
    initializeGuestUserNavigation(path?: string, section?: string): Promise<void>
    updateGuestUserNavigation(path: string, section: string): Promise<void>
    navigateToStep(step: number, path: string, section: string): Promise<void>
  }
> = defineStore('navigation', {
  state: (): NavigationState => ({
    currentGuestUUID: null,
    currentPage: '/',
    currentSection: 'introduction',
    navigationHistory: []
  }),
  actions: {
    async initializeGuestUserNavigation(path: string = '/', section: string = 'introduction') {
      if (this.currentGuestUUID) {
        // If currentGuestUUID exists, fetch the existing navigation document
        const navigationCollectionRef = collection(firestore, 'navigation')
        const navigationDocRef = doc(navigationCollectionRef, this.currentGuestUUID)
        const navigationDocSnapshot = await getDoc(navigationDocRef)

        if (navigationDocSnapshot.exists()) {
          // If the navigation document exists, update the navigation history
          const navigationData = navigationDocSnapshot.data()
          this.navigationHistory = navigationData.navigationHistory
          await this.updateGuestUserNavigation(path, section)
          return
        }
      }

      // If currentGuestUUID doesn't exist or the navigation document doesn't exist, create a new one
      const navigationCollectionRef = collection(firestore, 'navigation')
      const navigationCollectionSnapshot = await getDocs(navigationCollectionRef)

      if (navigationCollectionSnapshot.empty) {
        // Create the 'navigation' collection if it doesn't exist
        await setDoc(doc(navigationCollectionRef, 'meta'), { createdAt: serverTimestamp() })
      }

      const uuid = uuidv4()
      const currentTimestamp = Date.now()
      await setDoc(doc(navigationCollectionRef, uuid), {
        userType: 'guest',
        navigationHistory: [
          {
            page: path,
            section: section,
            timestamp: currentTimestamp
          }
        ],
        createdAt: currentTimestamp,
        updatedAt: currentTimestamp
      })
      this.currentGuestUUID = uuid
      this.currentPage = path
      this.currentSection = section
      this.navigationHistory.unshift({ page: path, section: section, timestamp: currentTimestamp })
    },
    async updateGuestUserNavigation(path: string, section: string) {
      if (this.currentGuestUUID) {
        const navigationCollectionRef = collection(firestore, 'navigation')
        const navigationDocRef = doc(navigationCollectionRef, this.currentGuestUUID)
        const currentTimestamp = Date.now()
        await updateDoc(navigationDocRef, {
          navigationHistory: arrayUnion({
            page: path,
            section: section,
            timestamp: currentTimestamp
          })
        })
        this.currentPage = path
        this.currentSection = section
        this.navigationHistory.unshift({ page: path, section: section, timestamp: currentTimestamp })
      }
    },
    async navigateToStep(step: number, path: string, section: string) {
      await this.updateGuestUserNavigation(path, section)
    }
  },
  persist: true
})

export const useNavigationStore = useNavigationStoreDefinition
