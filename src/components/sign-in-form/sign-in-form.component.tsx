import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { FormInput, Button, BUTTON_TYPE_CLASSES } from '..'

import { SignContainer, SignTitle, ButtonsContainer } from '../sign-up-form/sign.styles'
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  password: ''
}

export const SignInForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('incorrect password for email')
          break
        case AuthErrorCodes.USER_DELETED:
          alert('User is not found')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignContainer>
      <SignTitle>Already have an account?</SignTitle>
      <span> Sign in with your email and passworld</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='email' type='email' name='email' required onChange={handleChange} value={email} />
        <FormInput label='Password' type='password' name='password' required onChange={handleChange} value={password} />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignContainer>
  )
}
