import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAGbOG2dVj9evjZMCcugtqUjqt6OnLuIhU",
  authDomain: "electrical-symbol-detection.firebaseapp.com",
  projectId: "electrical-symbol-detection",
  storageBucket: "electrical-symbol-detection.appspot.com",
  messagingSenderId: "708960026436",
  appId: "1:708960026436:web:d6214771e033ad507b2111",
  measurementId: "G-6717QMMRHC"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)
