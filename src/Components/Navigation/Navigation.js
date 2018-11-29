import React, { Component } from 'react'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import HomeButton from './HomeButton/HomeButton'

const listStyle = {
  marginTop: 0,
  color: 'white',
  fontSize: 24,
  fontFamily: 'Roboto Condensed',
  lineHeight: '3',
  listStyle: 'none',
  padding: '0 40px 0 0',
  textShadow: 'none'
}

class Navigation extends Component {
  state = { active: true }

  handleClick = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render () {
    const buttonContainerStyle = this.state.active ?
      {display: 'flex', justifyContent: 'space-between'} :
      {display: 'flex', flexDirection: 'column'}

    return (
      <nav style={{gridArea: 'nav'}}>
        <div style={buttonContainerStyle}>
          <HamburgerButton onClick={this.handleClick} />
          <HomeButton />
        </div>
        { (this.state.active) &&
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