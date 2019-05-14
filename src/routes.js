import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollTop from './components/ScrollTop'
import A from './containers/A'
import B from './containers/B'
import C from './containers/C'
import Home from './containers/Home'

const Routes = () => (
  <Router>
    <ScrollTop>
      <Switch>
        <Route path='/A' component={A} />
        <Route path='/B' component={B} />
        <Route path='/C' component={C} />
        <Route path='/' component={Home} />
      </Switch>
    </ScrollTop>
  </Router>
)

export default Routes
