import React, { useState, useEffect } from 'react'
import SignUpForm from '../components/p_signup/SignUpForm'
import Header from '../components/GlobalHeader'
import { withStyles } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { Typography, Grid } from '@material-ui/core'

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
  }
})
const SignUp = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <SignUpForm />
      </Grid>
    </div>
  )
}

export default withRouter(withStyles(styles)(SignUp))