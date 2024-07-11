import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, FieldValue } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAGbOG2dVj9evjZMCcugtqUjqt6OnLuIhU",
  authDomain: "electrical-symbol-detection.firebaseapp.com",
  projectId: "electrical-symbol-detection",
  storageBucket: "electrical-symbol-detection.appspot.com",
  messagingSenderId: "708960026436",
  appId: "1:708960026436:web:c0f93eb6b3b04dca7b2111",
  measurementId: "G-VTYYX232RX"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)
export const storage = getStorage(app)
export { FieldValue }
