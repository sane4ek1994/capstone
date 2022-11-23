import { CategoryItem } from '../categories/categories.types'
import { CART_ACTIONS_TYPES, CartItem } from './cart.types'
import { createAction, withMatcher, ActionWithPayload } from '../../utils'

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.some(cartItem => cartItem.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  )
}

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean>
export type SetCartItems = ActionWithPayload<CART_ACTIONS_TYPES.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen => createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean)
)

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems)
)

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return setCartItems(newCartItems)
}

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return setCartItems(newCartItems)
}

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear)
  return setCartItems(newCartItems)
}
