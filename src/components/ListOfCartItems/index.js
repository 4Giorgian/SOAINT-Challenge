import React, { useContext, useEffect } from 'react'
import { CartItem } from '../CartItem'
import { Table, Th } from './styles'
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
      <Table>
        <tr>
          <Th> ID </Th>
          <Th> TITULO </Th>
          <Th> PRECIO UNITARIO </Th>
          <Th> PRECIO TOTAL </Th>
          <Th> CANTIDAD </Th>
          <Th> ELIMINAR </Th>
        </tr>
        {
        state.cartItems.map((product) => <CartItem key={product.id} {...product} />)
      }
      </Table>
      <div>TOTAL A PAGAR = {state.totalAmount}</div>
    </div>
  )
}
