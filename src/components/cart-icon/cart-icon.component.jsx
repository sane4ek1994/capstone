import { ReactComponent as ShopingIcon } from '../../assets/img/shopping-bag.svg'

import './cart-icon.styles.scss'

export const CartIcon = ({ toggleIsCartOpen, cartCount }) => {
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShopingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}
