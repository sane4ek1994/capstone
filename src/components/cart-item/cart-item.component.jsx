import { CartItemContainer, ItemsDetails, Name } from './cart-item.styles'

export const CartItem = ({ cartItem }) => {
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
}
