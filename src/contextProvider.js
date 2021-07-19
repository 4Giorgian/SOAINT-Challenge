import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const initialState = {
  cartItems: [],
  products: [],
  totalAmount: 0,
  badgeCounter: 0
}

export const ContextProvider = (props) => {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((result) => {
      setState({ ...state, products: result.data })
    })
  }, [])

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}
