import React, { Component } from 'react'
import HamburgerButton from '../atoms/HamburgerButton.js'
import HomeButton from '../atoms/HomeButton.js'

const listStyle = {
  color: 'white',
  fontSize: 24,
  fontFamily: 'Roboto Condensed',
  lineHeight: '3',
  listStyle: 'none',
  padding: '0 20px',
  textShadow: 'none'
}

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.state = { active: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(
      { active: !this.state.active }
    )
  }

  render () {
    return (
      <nav style={{gridArea: 'nav'}}>
        <div style={
          this.state.active ?
            {display: 'flex'} :
            {display: 'flex', flexDirection: 'column'}}>
          <HamburgerButton onClick={this.handleClick} />
          <HomeButton />
        </div>
        { (this.state.active === true) &&
          <ul style={listStyle} >
            <li>Tucker High</li>
            <li>2019 Season</li>
            <li>History</li>
            <li>Teams</li>
            <li>Contact</li>
          </ul> }
      </nav>
    )
  }
}

export default Navigation