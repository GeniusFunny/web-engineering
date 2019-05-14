import React, { Component } from 'react'
import menu from './Menu'
import { MenuItem, MenuList, withStyles, AppBar, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Tab, Tabs, Typography, Grid, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, withRouter } from 'react-router-dom'

const styles = theme => ({
  'appBar': {
    backgroundColor: 'white'
  }
})

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <AppBar className={styles.appBar}>
        
      </AppBar>
    )
  }
}
export default withStyles(styles)(Header)