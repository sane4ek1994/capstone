import { useState } from 'react'

import { FormInput, Button } from '../../components'
import { singInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils'

import './sing-in-form.styles.scss'

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
    <div className='sing-up-container'>
      <h2>Already have an account?</h2>
      <span> Sing in with your email and passworld</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='email' type='email' name='email' required onChange={handleChange} value={email} />
        <FormInput label='Password' type='password' name='password' required onChange={handleChange} value={password} />
        <div className='buttons-container'>
          <Button type='submit'>Sing In</Button>
          <Button type='button' buttonType='google' onClick={singInWithGoogle}>
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  )
}
