import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ScrollTop from './components/ScrollTop'
import Profile from './containers/Profile'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import Home from './containers/Home'
import SignUp from './containers/SignUp'

const Routes = props => {
  return <Router>
    <ScrollTop>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </ScrollTop>
  </Router>
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(Routes)
