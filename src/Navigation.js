import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './Header'
class Navigation extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
      </div>
    )
  }
}
export default Navigation
