import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Value,
  Arrow,
  Price,
  RemoveButton
} from './checkout-item.styles'

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext)

  const removeItemHandler = () => removeItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const clearItemHandler = () => clearItemFromCart(cartItem)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
