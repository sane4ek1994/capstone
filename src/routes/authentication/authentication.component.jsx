import { SingUpForm, SingInForm } from '../../components'

import { AuthenticationContainer } from './authentication.styles'

export const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SingInForm />
      <SingUpForm />
    </AuthenticationContainer>
  )
}
