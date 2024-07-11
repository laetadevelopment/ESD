import { defineStore } from 'pinia'
import { firestore } from '@/firebase'
import { doc, setDoc, getDoc, collection, addDoc } from 'firebase/firestore'
import { useUserStore } from '@/stores/user'

interface ProcessingStats {
  time: number
  pages: number
  tiles: number
  predictions: number
  annotations: { name: string; url: string }[]
}

interface Project {
  id: string
  userId: string
  currentWizardStep: string
  createdAt: number
  updatedAt: number
  name: string
  threshold: number
  data: {
    one: string
    two: ProcessingStats
  }
}

export const useProjectStore = defineStore('project', {
  state: () => ({
    currentProject: null as Project | null
  }),
  actions: {
    async createProject() {
      const userStore = useUserStore()
      if (userStore.currentUser) {
        const projectsCollection = collection(firestore, 'projects')
        const newProjectRef = await addDoc(projectsCollection, {
          userId: userStore.currentUser.uid,
          currentWizardStep: 'start',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          name: '',
          threshold: 0.87,
          data: {
            one: '',
            two: {
              time: 0,
              pages: 0,
              tiles: 0,
              predictions: 0,
              annotations: []
            }
          }
        })
        this.currentProject = {
          id: newProjectRef.id,
          userId: userStore.currentUser.uid,
          currentWizardStep: 'start',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          name: '',
          threshold: 0.87,
          data: {
            one: '',
            two: {
              time: 0,
              pages: 0,
              tiles: 0,
              predictions: 0,
              annotations: []
            }
          }
        }
      }
    },
    async saveProject() {
      if (this.currentProject) {
        const projectRef = doc(firestore, 'projects', this.currentProject.id)
        await setDoc(projectRef, {
          ...this.currentProject,
          updatedAt: Date.now()
        }, { merge: true })
      }
    },
    async loadProject(projectId: string) {
      const projectRef = doc(firestore, 'projects', projectId)
      const projectSnapshot = await getDoc(projectRef)
      if (projectSnapshot.exists()) {
        this.currentProject = projectSnapshot.data() as Project
      }
    },
    async updateBlueprintUrl(url: string) {
      if (this.currentProject) {
        this.currentProject.data.one = url
        this.currentProject.currentWizardStep = 'two'
        await this.saveProject()
      }
    }
  },
  persist: true
})
