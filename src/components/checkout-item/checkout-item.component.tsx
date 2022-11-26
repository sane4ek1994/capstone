import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selectors'
import { CartItem } from '../../store/cart/cart.types'

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

type CheckoutItemProps = {
  cartItem: CartItem
}

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch()
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems)

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

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
