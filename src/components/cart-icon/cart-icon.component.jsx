import { useContext } from 'react'
import { ReactComponent as ShopingIcon } from '../../assets/img/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)

  const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toogleIsCartOpen}>
      <ShopingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
