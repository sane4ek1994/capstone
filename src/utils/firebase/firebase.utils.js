import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDr0BqxFiDzJkmdkNcpzuwvrG87rdo01Ng',
  authDomain: 'e-shop-7a332.firebaseapp.com',
  projectId: 'e-shop-7a332',
  storageBucket: 'e-shop-7a332.appspot.com',
  messagingSenderId: '745659175751',
  appId: '1:745659175751:web:22d4bf856b1c01417cb262',
  measurementId: 'G-M6HKFPEPTG'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
