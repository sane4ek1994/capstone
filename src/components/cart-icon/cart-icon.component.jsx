import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

export const CartIcon = ({ toggleIsCartOpen, cartCount }) => {
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
