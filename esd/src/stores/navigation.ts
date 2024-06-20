import { defineStore } from 'pinia'
import { firestore } from '@/firebase'
import { doc, setDoc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useUserStore } from '@/stores/user'

interface WizardStep {
  id: number
  title: string
  description: string
  icon: string
}

interface Project {
  id: string
  name: string
  description: string
  type: string
  createdAt: number
  updatedAt: number
  data: any
}

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    currentWizardStep: 1,
    wizardSteps: [
      {
        id: 1,
        title: 'Blueprint Upload',
        description: 'Upload your blueprint file',
        icon: 'upload.svg'
      },
      {
        id: 2,
        title: 'Blueprint Processing',
        description: 'Process the uploaded blueprint',
        icon: 'processing.svg'
      },
      {
        id: 3,
        title: 'Symbol Detection',
        description: 'Detect electrical symbols in the blueprint',
        icon: 'detection.svg'
      },
      {
        id: 4,
        title: 'Results Visualization',
        description: 'View the detected symbols on the blueprint',
        icon: 'visualization.svg'
      },
      {
        id: 5,
        title: 'Project Summary',
        description: 'Review the detection results summary',
        icon: 'summary.svg'
      }
    ],
    currentProject: null as Project | null
  }),
  actions: {
    async navigateToStep(step: number) {
      this.currentWizardStep = step
      await this.storeUserActivity()
    },
    async saveProject() {
      const userStore = useUserStore()
      if (!this.currentProject) {
        const projectsCollection = collection(firestore, 'users', userStore.currentUser?.uid || '', 'projects')
        const newProjectRef = await addDoc(projectsCollection, {
          name: 'New Project',
          description: '',
          type: '',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          data: {}
        })
        this.currentProject = {
          id: newProjectRef.id,
          name: 'New Project',
          description: '',
          type: '',
          createdAt: Date.now(),
          updatedAt: Date.now(),
          data: {}
        }
      } else {
        const projectRef = doc(firestore, 'users', userStore.currentUser?.uid || '', 'projects', this.currentProject.id)
        await setDoc(projectRef, this.currentProject)
      }
    },
    async loadProject(projectId: string) {
      const userStore = useUserStore()
      const projectRef = doc(firestore, 'users', userStore.currentUser?.uid || '', 'projects', projectId)
      const projectSnapshot = await getDoc(projectRef)
      if (projectSnapshot.exists()) {
        this.currentProject = projectSnapshot.data() as Project
        this.currentWizardStep = 1
      }
    },
    async storeUserActivity() {
      const userStore = useUserStore()
      if (userStore.currentUser) {
        const userRef = doc(firestore, 'users', userStore.currentUser.uid)
        await setDoc(userRef, {
          lastPage: window.location.pathname,
          lastSection: this.currentStepTitle,
          lastUpdate: serverTimestamp()
        }, { merge: true })
      }
    }
  },
  getters: {
    currentStepTitle(): string {
      return this.wizardSteps[this.currentWizardStep - 1].title
    },
    currentStepDescription(): string {
      return this.wizardSteps[this.currentWizardStep - 1].description
    },
    currentStepIcon(): string {
      return this.wizardSteps[this.currentWizardStep - 1].icon
    },
    progressPercentage(): number {
      return (this.currentWizardStep / this.wizardSteps.length) * 100
    }
  }
})
