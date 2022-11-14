import { useState } from 'react'

import { FormInput, Button, BUTTON_TYPE_CLASSES } from '../../components'
import { singInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils'

import { SingContainer, SingTitle, ButtonsContainer } from '../sing-up-form/sing.styles'

const defaultFormFields = {
  email: '',
  password: ''
}

export const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const singInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await singInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break
        case 'auth/user-not-found':
          alert('User is not found')
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SingContainer>
      <SingTitle>Already have an account?</SingTitle>
      <span> Sing in with your email and passworld</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='email' type='email' name='email' required onChange={handleChange} value={email} />
        <FormInput label='Password' type='password' name='password' required onChange={handleChange} value={password} />
        <ButtonsContainer>
          <Button type='submit'>Sing In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={singInWithGoogle}>
            Google sing in
          </Button>
        </ButtonsContainer>
      </form>
    </SingContainer>
  )
}
