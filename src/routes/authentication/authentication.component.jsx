import { SingUpForm, SingInForm } from '../../components'

import './authentication.styles.scss'

export const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SingInForm />
      <SingUpForm />
    </div>
  )
}
