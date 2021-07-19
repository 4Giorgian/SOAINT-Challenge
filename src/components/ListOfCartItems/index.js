import React, { useContext, useEffect } from 'react'
import { CartItem } from '../CartItem'
import { HeadersRow } from './styles'
import { AppContext } from '../../contextProvider'

export const ListOfCartItems = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    let totalAmount = 0
    state.cartItems.map((cartItem) => {
      if (cartItem.totalPrice) {
        totalAmount = totalAmount + cartItem.totalPrice
      } else {
        totalAmount = totalAmount + cartItem.price
      }
    })

    setState({ ...state, badgeCounter: state.cartItems.length, totalAmount })
  }, [state.cartItems])

  return (
    <div>
      <h1>CARRITO DE COMPRAS</h1>
      <HeadersRow>
        <div>
          ID
        </div>
        <div>
          NOMBRE
        </div>
        <div>
          PRECIO UNITARIO
        </div>
        <div>
          PRECIO
        </div>
        <div>
          CANTIDAD
        </div>
        <div>
          ELIMINAR
        </div>
      </HeadersRow>
      {
        state.cartItems.map((product) => <CartItem key={product.id} {...product} />)
      }
      <div>TOTAL A PAGAR = {state.totalAmount}</div>
    </div>
  )
}
