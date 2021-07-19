import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Shop } from './pages/shop'
import { Cart } from './pages/cart'
import { Summary } from './pages/Summary'
import { ContextProvider } from './contextProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './layout/Header'

export const App = () => (

  <ContextProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Shop />
        </Route>
        <Route exact path='/carrito'>
          <Cart />
        </Route>
        <Route
          exact path='/detalle/:id' render={(props) => (
            <Summary id={props.match.params.id} />
          )}
        />
      </Switch>
    </BrowserRouter>
  </ContextProvider>

)
