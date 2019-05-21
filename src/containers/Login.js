import React from 'react'
import { login } from '../actions/login'
import LoginForm from '../components/p_login/LoginForm'
import Header from '../components/GlobalHeader'
import { withStyles } from '@material-ui/core'
import { withRouter, Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
  }
})
const LoginIn = (props) => {
  const { classes, dispatch, state, history } = props
  if (state && state.login === true) {
    history.push('/home')
  }
  function handleLogin(data) {
    dispatch(login(data))
  }
  return (
    <div className={classes.root}>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <LoginForm handleLogin={handleLogin}/>
        <Link to={'/signup'}>
          没有账号，前往注册
        </Link>
      </Grid>
    </div>
  )
}
const mapStateToProps = state => ({
  state: state.login
})

export default connect(mapStateToProps)(withRouter(withStyles(styles)(LoginIn)))
