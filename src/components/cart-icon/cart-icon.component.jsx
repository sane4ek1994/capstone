import { ReactComponent as ShopingIcon } from '../../assets/img/shopping-bag.svg'

import './cart-icon.styles.scss'

export const CartIcon = ({ toogleIsCartOpen }) => {
  return (
    <div className='cart-icon-container' onClick={toogleIsCartOpen}>
      <ShopingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
