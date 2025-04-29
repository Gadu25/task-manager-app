import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth' // 👈 add these

const firebaseConfig = {
  apiKey: 'AIzaSyDHY5EVEj8RMUvPtu_wzbvBRoe9p5aS10o',
  authDomain: 'task-manager-app-55ab2.firebaseapp.com',
  projectId: 'task-manager-app-55ab2',
  storageBucket: 'task-manager-app-55ab2.firebasestorage.app',
  messagingSenderId: '793764062664',
  appId: '1:793764062664:web:447de74199ee4c2e958cfd',
  measurementId: 'G-GYVX3FLKD4',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Auth related
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { app, analytics, auth, provider }
