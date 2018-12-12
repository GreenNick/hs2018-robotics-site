import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import HomeButton from './HomeButton/HomeButton'
import { bool } from 'prop-types'
import styles from './Navigation.module.css'

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

class Navigation extends Component {
  state = { active: true }

  static propTypes = {
    dark: bool
  }

  handleClick = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  render () {
    const navStyle = this.props.dark &&
      { backgroundColor: '#353535', opacity: '0.8' }

    const buttonContainerStyle = this.state.active
      ? { display: 'flex', justifyContent: 'space-between' }
      : { display: 'flex', flexDirection: 'column' }

    return (
      <nav style={navStyle}>
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
