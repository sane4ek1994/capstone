import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDr0BqxFiDzJkmdkNcpzuwvrG87rdo01Ng',
  authDomain: 'e-shop-7a332.firebaseapp.com',
  projectId: 'e-shop-7a332',
  storageBucket: 'e-shop-7a332.appspot.com',
  messagingSenderId: '745659175751',
  appId: '1:745659175751:web:22d4bf856b1c01417cb262',
  measurementId: 'G-M6HKFPEPTG'
}

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const addCollectionAndDocument = async (collectionKey, objectsToAdd, field = 'title') => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
}

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const singInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const singOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = callback => onAuthStateChanged(auth, callback)
