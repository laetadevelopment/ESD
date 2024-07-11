import { defineStore } from 'pinia'
import { firestore } from '@/firebase'
import { collection, addDoc, serverTimestamp, FieldValue } from 'firebase/firestore'
import { useNavigationStore } from '@/stores/navigation'

interface Notification {
  id: string
  message: string
  type: 'default' | 'success' | 'error'
  navigationId: string | null
  createdAt: FieldValue
}

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [] as Notification[]
  }),
  actions: {
    async addNotification(message: string, type: 'default' | 'success' | 'error' = 'default') {
      const navigationStore = useNavigationStore()
      const navigationId = navigationStore.currentGuestUUID || null
      const newNotification: Notification = {
        id: Date.now().toString(),
        message,
        type,
        navigationId,
        createdAt: serverTimestamp()
      }
      this.notifications.push(newNotification)
      await this.storeNotificationInFirestore(newNotification)
      setTimeout(() => this.removeNotification(newNotification.id), 10000)
    },
    async storeNotificationInFirestore(notification: Notification) {
      try {
        await addDoc(collection(firestore, 'notifications'), notification)
      } catch (error) {
        console.error('Error storing notification in Firestore:', error)
      }
    },
    removeNotification(id: string) {
      this.notifications = this.notifications.filter(notification => notification.id !== id)
    },
    clearNotifications() {
      this.notifications = []
    }
  },
  persist: true
})

export default useNotificationStore
