import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CartIcon, CartDropdown } from '../../components'

import { selectIsCartOpen } from '../../store/cart/cart.selectors'

import { selectCurrentUser } from '../../store/user/user.selectors'

import { singOutUser } from '../../utils'
import { ReactComponent as CrwnLogo } from '../../assets/img/crown.svg'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles'

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={singOutUser}>
              sing out
            </NavLink>
          ) : (
            <NavLink to='/auth'>sing in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}
