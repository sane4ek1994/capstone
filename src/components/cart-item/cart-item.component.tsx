import { FC, memo } from 'react'
import { CartItemContainer, ItemsDetails, Name } from './cart-item.styles'
import { CartItem as TCartItem } from '../../store/cart/cart.types'

type CartItemProps = {
  cartItem: TCartItem
}

export const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemsDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemsDetails>
    </CartItemContainer>
  )
})
