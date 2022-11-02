import { signInWithGooglePopup, createUserDocumentFromAutr } from '../../utils'

export const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    createUserDocumentFromAutr(user)
  }
  return (
    <div>
      <h1>Sing in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
    </div>
  )
}
