import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'
import { LocalSeeOutlined } from '@material-ui/icons'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 5.34,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //add to cart
  const addToCart = (id, amount, product) => {
    dispatch({type: ADD_TO_CART, payload: {id, amount, product}})
  }

  //remove item
  const removeItem = (id) => {}

  //toggle amount
  const toggleAmount = (id,value) => {}

  //clearCart
  const clearCart = () => {}

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}