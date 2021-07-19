import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../contextProvider'
import { Button } from '@material-ui/core'

import { SummaryWrapper, Img, DescriptionWrapper } from './styles'

export const Summary = ({ id }) => {
  const [state, setState] = useContext(AppContext)
  const addCart = () => {
    const products = [...state.products].map(product => {
      if (product.id == id) {
        return {
          ...product,
          addedToCart: true
        }
      } else return product
    })
    setState({
      ...state,
      products: products,
      cartItems: [...state.cartItems, { id: id, title: title, price: price, addedToCart: true, image: image }]
    })
  }

  useEffect(() => {
    setState({ ...state, badgeCounter: state.cartItems.length })
  }, [state.cartItems])

  const { category, description, image, title, addedToCart, price } = state.products[id - 1]

  return (
    <SummaryWrapper>
      <Img src={image} />
      <DescriptionWrapper>
        <h1>{title}</h1>
        <div>{description}</div>
        <p1>{category}</p1>
        <Button variant='contained' color='primary' onClick={addCart} disabled={addedToCart}>añadir al carrito</Button>
      </DescriptionWrapper>
    </SummaryWrapper>
  )
}
