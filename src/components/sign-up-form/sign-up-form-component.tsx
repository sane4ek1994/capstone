import { useState, FormEvent, ChangeEvent } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { FormInput, Button } from '../index'
import { SignContainer, SignTitle } from './sign.styles'
import { signUpStart } from '../../store/user/user.action'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create encountered an error')
      } else {
        console.log('user creation encountered an error', error)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignContainer>
      <SignTitle>Don't have an account?</SignTitle>
      <span> Sign in with your email and passworld</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Dispay Name'
          type='text'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />
        <FormInput label='email' type='email' name='email' required onChange={handleChange} value={email} />
        <FormInput label='Password' type='password' name='password' required onChange={handleChange} value={password} />

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignContainer>
  )
}
