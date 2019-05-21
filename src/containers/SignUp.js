import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/GlobalHeader'
import { withStyles } from '@material-ui/core'
import {Link, withRouter} from 'react-router-dom'
import { Grid } from '@material-ui/core'
import SignUpForm from '../components/p_signup/SignUpForm'
import { register } from '../actions/register'

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
  }
})
const SignUp = (props) => {
  const { classes, dispatch, state, history } = props
  function handleSubmit(data) {
    dispatch(register(data))
  }
  if (state && state.registerStatus === 'success') {
    history.push('/login')
  }
  return (
    <div className={classes.root}>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <SignUpForm handleSubmit={handleSubmit}/>
        <Link to={'/login'}>
          已注册，前往登录
        </Link>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.register
})

export default connect(mapStateToProps)(withRouter(withStyles(styles)(SignUp)))
