import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils'
import { SingInForm } from '../../components'

export const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sing in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
      <SingInForm />
    </div>
  )
}
