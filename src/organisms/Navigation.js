import React, { Component } from 'react'
import Hamburger from '../atoms/Hamburger.js'
import Home from '../atoms/Home.js'

class Navigation extends Component {
  render () {
    return (
      <nav style={{gridArea: 'nav'}}>
        <Hamburger />
        <Home />
      </nav>
    )
  }
}

export default Navigation