import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Card, Img } from './styles'
import { Button } from '@material-ui/core'
import { AppContext } from '../../contextProvider'

// const cartItems = []

export const Product = ({ id = 1, title = 'NOMBRE', price = '100', addedToCart = false, image }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useContext(AppContext)
  const history = useHistory()

  const handleClickCard = () => {
    console.log('click para ver el detalle')
    history.push(`/detalle/${id}`)
  }

  const addCart = () => {
    const products = [...state.products].map(product => {
      if (product.id === id) {
        return {
          ...product,
          addedToCart: true
        }
      } else return product
    })
    setState({ ...state, products, cartItems: [...state.cartItems, { id: id, title: title, price: price, addedToCart: true, image: image }] })
  }

  useEffect(() => {
    setState({ ...state, badgeCounter: state.cartItems.length })
  }, [state.cartItems])

  return (
    <Card>
      <Img onClick={handleClickCard} src={image} />
      <div>{title}</div>
      <p1>S/.{price}</p1>
      <Button variant='contained' color='primary' onClick={addCart} disabled={addedToCart}>Lo quiero</Button>
    </Card>
  )
}
