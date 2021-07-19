import React, { useContext } from 'react'
import { AppContext } from '../../contextProvider'
import { useHistory } from 'react-router'

import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import { MdAddShoppingCart } from 'react-icons/md'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px'
  }
}))(Badge)

export const Header = () => {
  const [state, setState] = useContext(AppContext)
  const history = useHistory()

  const handleClickShoppingCart = () => {
    console.log('clickshop')
    history.push('/carrito')
  }
  return (
    <IconButton onClick={handleClickShoppingCart} aria-label='cart'>
      <StyledBadge badgeContent={state.badgeCounter} color='secondary'>
        <MdAddShoppingCart />
      </StyledBadge>
    </IconButton>
  )
}
