import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { CartIcon, CartDropdown } from '../../components'

import { selectIsCartOpen } from '../../store/cart/cart.selectors'

import { selectCurrentUser } from '../../store/user/user.selectors'

import { signOutStart } from '../../store/user/user.action'
import { ReactComponent as CrwnLogo } from '../../assets/img/crown.svg'
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles'

export const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = () => dispatch(signOutStart())

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              sign out
            </NavLink>
          ) : (
            <NavLink to='/auth'>sign in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}
