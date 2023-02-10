import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selectors'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

type PopupClick = MouseEvent & {
  path: Node[]
}

export const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  const cartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // const _event = event as PopupClick
      // if (cartRef.current && !_event.path.includes(cartRef.current)) {
      //   dispatch(setIsCartOpen(false))
      // }
      const cartNode = cartRef.current
      if (!cartNode) return
      const _event = event as PopupClick
      const path = _event.path || _event.composedPath?.()
      const isClickOutside = path.includes(cartNode)

      console.log(path)

      if (!isClickOutside) {
        dispatch(setIsCartOpen(false))
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <CartIconContainer ref={cartRef} onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}
