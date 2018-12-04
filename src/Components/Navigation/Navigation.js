import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import HomeButton from './HomeButton/HomeButton'
import styles from './Navigation.module.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

class Navigation extends Component {
  state = { active: true }

  handleClick = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render () {
    const buttonContainerStyle = this.state.active
      ? {display: 'flex', justifyContent: 'space-between'}
      : {display: 'flex', flexDirection: 'column'}

    return (
      <nav>
        <div
          style={buttonContainerStyle}
          className={styles.buttonContainer} >
          <HamburgerButton onClick={this.handleClick} />
          <HomeButton />
        </div>
        { (this.state.active) &&
          <ul className={styles.navItems}>
            <li><Link style={linkStyle} to='/TuckerHigh'>Tucker High</Link></li>
            <li><Link style={linkStyle} to='/2019Season'>2019 Season</Link></li>
            <li><Link style={linkStyle} to='/History'>History</Link></li>
            <li><Link style={linkStyle} to='/Teams'>Teams</Link></li>
            <li><Link style={linkStyle} to='/Contact'>Contact</Link></li>
          </ul> }
      </nav>
    )
  }
}

export default Navigation