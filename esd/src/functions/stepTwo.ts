import { useUserStore } from '@/stores/user'
import { useProjectStore } from '@/stores/project'

interface ProcessingStats {
  time: number
  tiles: number
  pages: number
  predictions: number
  annotations: { name: string; url: string }[]
}

export async function stepTwo(projectId: string): Promise<void> {
  const projectStore = useProjectStore()
  const threshold = projectStore.currentProject?.threshold || 0.00
  const blueprintUrl = projectStore.currentProject?.data?.one || ''
  const functionUrl = 'https://run-ulb7cibaoq-uc.a.run.app'

  try {
    const response = await fetch(functionUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ projectId, blueprintUrl, threshold }),
    })

    if (response.ok) {
      const stats: ProcessingStats = await response.json()

      if (projectStore.currentProject) {
        projectStore.currentProject.data.two = stats
        await projectStore.saveProject()
      }
    } else {
      console.error('PDF Processing Failed:', response.statusText)
      throw new Error('PDF Processing Failed')
    }
  } catch (error) {
    console.error('Error calling Firebase Cloud Function:', error)
    throw error
  }
}
