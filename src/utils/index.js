export {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
  addCollectionAndDocument,
  getCategoriesAndDocuments,
  getCurrentUser,
  UserData,
  AdditionalInformation
} from './firebase/firebase.utils'

export { createAction, Action, ActionWithPayload, withMatcher } from './reducer/reducer.utils'
export { stripePromise } from './stripe/stripe.utils'
