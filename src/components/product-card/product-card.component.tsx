import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, BUTTON_TYPE_CLASSES } from '..'

import { CategoryItem } from '../../store/categories/categories.types'
import { selectCartItems } from '../../store/cart/cart.selectors'
import { addItemToCart } from '../../store/cart/cart.action'

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'

type ProductCardProps = {
  product: CategoryItem
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, price, imageUrl } = product

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to card
      </Button>
    </ProductCardContainer>
  )
}
