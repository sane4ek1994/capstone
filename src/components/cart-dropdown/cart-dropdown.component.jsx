import { Button } from '../../components'

import './cart-dropdown.styles.scss'

export const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>Go to checkout</Button>
    </div>
  )
}
