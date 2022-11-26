import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button, CartItem } from '..'
import { selectCartItems } from '../../store/cart/cart.selectors'

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'
export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  )
}
