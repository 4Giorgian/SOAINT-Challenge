import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contextProvider'
import { Product } from '../Product'

import { ListWrapper, Title } from './styles'

export const ListOfProducts = () => {
  const [state, setState] = useContext(AppContext)
  useEffect(() => {
    setState({ ...state, badgeCounter: state.cartItems.length })
  }, [state.cartItems])

  return (
    <ListWrapper>
      {
      state.products.map((product) => <Product key={product.id} {...product} />)
      }
    </ListWrapper>
  )
}
