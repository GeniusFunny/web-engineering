import React, { useState, useEffect, useCallback } from 'react'
import menu from './Menu'
import { MenuItem, MenuList, withStyles, AppBar, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Tab, Tabs, Typography, Grid, Toolbar } from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'

const styles = theme => ({
  'root': {
    backgroundColor: '#fff'
  },
  'appBar': {
    backgroundColor: '#fff'
  },
  'toolBar': {
    display: 'flex',
    flex: 'row nowrap'
  },
  'logo': {
    'margin-right': `30px`
  }
})
function updateCurrentValue(currentPath) {
  const current = menu.findIndex(item => item.pathname === currentPath)
  return current === -1 ? 0 : current
}

const Header = (props) => {
  const { classes } = props
  const [value, setValue] = useState(updateCurrentValue(props.location.pathname))

  useEffect(() => {
    setValue(updateCurrentValue(props.location.pathname))
  }, [props.location.pathname])

  function handleChange(e, value) {
    setValue(value)
    window.scrollTo(0, 0)
  }
  return (
    <AppBar color="default" className={classes.appBar} position="relative">
      <Toolbar className={classes.toolBar}>
        <div className={classes.logo}>
          <Link to={{ pathname: '/' }}>
            <img
              width={80}
              src="data:image/png;base64,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" />
          </Link>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        >
          {
            menu.map(item => (<Tab label={item.label} key={item.label} component={Link} to={{ pathname: item.pathname }} />))
          }
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}
export default withRouter(withStyles(styles)(Header))