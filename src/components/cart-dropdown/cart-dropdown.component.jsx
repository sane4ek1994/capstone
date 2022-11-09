import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
import { Button, CartItem } from '../../components'

import './cart-dropdown.styles.scss'

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to checkout</Button>
    </div>
  )
}
