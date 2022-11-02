import { signInWithGooglePopup } from '../../utils'

export const SingIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }
  return (
    <div>
      <h1>Sing in Page</h1>
      <button onClick={logGoogleUser}>Sing in with Google Popup</button>
    </div>
  )
}
