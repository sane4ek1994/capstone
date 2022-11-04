import React from 'react'
import { FormInput, Button } from '../../components'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils'

import './sing-up.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const SingInForm = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)

      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create encountered an error', error)
      } else {
        console.error('user creation encountered an error', error)
      }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sing-up-container'>
      <h2>Don't have an account?</h2>
      <span> Sing in with your email and passworld</span>
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
        <Button type='submit'>Sing Up</Button>
      </form>
    </div>
  )
}