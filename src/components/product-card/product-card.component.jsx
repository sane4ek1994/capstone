import { useContext } from 'react'

import { Button, BUTTON_TYPE_CLASSES } from '../../components'
import { CartContext } from '../../contexts/cart.context'

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles'

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

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
