import React, { useContext } from 'react'
import { Td } from './styles'
import { AppContext } from '../../contextProvider'

export const CartItem = ({ id = 1, title = 'producto', price = 100, addedToCart = true, totalPrice = price }) => {
  const [state, setState] = useContext(AppContext)

  const getTotalPrice = (e) => {
    const option = e.target.options[e.target.options.selectedIndex].value
    setState({
      ...state,
      cartItems: [...state.cartItems].map(cartItem => {
        if (cartItem.id == id) {
          return { ...cartItem, totalPrice: price * option }
        } else return cartItem
      })
    })
  }

  const removeItemCart = () => {
    const products = [...state.products].map(product => {
      if (product.id === id) {
        return {
          ...product,
          addedToCart: false
        }
      } else return product
    })

    setState({ ...state, products, cartItems: [...state.cartItems].filter(cartItem => cartItem.id !== id) })
  }
  return (
    <tr>
      <Td>{id}</Td>
      <Td>{title}</Td>
      <Td>{price}</Td>
      <Td>S/.{totalPrice}</Td>
      <Td>
        <select onChange={getTotalPrice}>
          {
            [1, 2, 3, 4, 5, 6].map(option => <option key={option} value={option}>{option}</option>)
          }
        </select>
      </Td>
      <Td>
        <button onClick={removeItemCart}> quitar </button>
      </Td>
    </tr>
  )
}
