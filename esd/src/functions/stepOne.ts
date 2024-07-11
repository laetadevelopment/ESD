import { storage } from '@/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import type { UploadMetadata } from 'firebase/storage'
import { useUserStore } from '@/stores/user'

export async function stepOne(file: File, projectId: string): Promise<string> {
  const userStore = useUserStore()
  const userId = userStore.currentUser?.uid
  const storageRef = ref(storage, `projects/${projectId}/blueprint.pdf`)
  
  const metadata: UploadMetadata = {
    customMetadata: {
      userId: userId || ''
    }
  }

  await uploadBytes(storageRef, file, metadata)
  const blueprintUrl = await getDownloadURL(storageRef)

  return blueprintUrl
}
