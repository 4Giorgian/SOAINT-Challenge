import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfProducts } from './components/ListOfProducts'
import { ListOfCartItems } from './components/ListOfCartItems'
import { Summary } from './components/Summary'
import { ContextProvider } from './contextProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'

export const App = () => (

  <ContextProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <ListOfProducts />
        </Route>
        <Route exact path='/cart'>
          <ListOfCartItems />
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
