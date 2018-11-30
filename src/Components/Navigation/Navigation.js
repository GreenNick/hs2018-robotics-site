import React, { Component } from 'react'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import HomeButton from './HomeButton/HomeButton'
import styles from './Navigation.module.css'

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
        <div style={buttonContainerStyle}>
          <HamburgerButton onClick={this.handleClick} />
          <HomeButton />
        </div>
        { (this.state.active) &&
          <ul className={styles.navItems}>
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