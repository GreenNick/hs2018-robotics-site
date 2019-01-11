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
  state = {
    active: true,
    mobile: false
  }

  static propTypes = {
    dark: bool
  }

  handleClick = () => {
    this.setState(prevState => ({ active: !prevState.active }))
  }

  componentDidMount () {
    if (window.innerWidth < 1000) {
      this.setState({ active: false, mobile: true })
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1000) {
        this.setState({ mobile: true })
      } else {
        this.setState({ mobile: false })
      }
    })
  }

  render () {
    const navStyle = this.props.dark &&
      { backgroundColor: '#353535', opacity: '0.8' }

    const mobileNavStyle = this.props.dark &&
      { backgroundColor: '#353535' }

    const buttonContainerStyle = this.state.active
      ? { display: 'flex', justifyContent: 'space-between' }
      : { display: 'flex', flexDirection: 'column' }

    const mobileButtonContainerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row'
    }

    return (
      <nav
        style={
          this.state.mobile
            ? mobileNavStyle
            : navStyle
        }>
        <div
          style={
            this.state.mobile
              ? mobileButtonContainerStyle
              : buttonContainerStyle
          }
          className={styles.buttonContainer} >
          <HamburgerButton onClick={this.handleClick} />
          <HomeButton />
        </div>
        { (this.state.active) &&
          <ul className={styles.navItems}>
            <li><Link style={linkStyle} to='/TuckerHigh'>Tucker High</Link></li>
            <li><Link style={linkStyle} to='/2019Season'>2019 Season</Link></li>
            <li><Link style={linkStyle} to='/Teams'>Teams</Link></li>
            <li><Link style={linkStyle} to='/Awards'>Awards</Link></li>
            <li><Link style={linkStyle} to='/PhotoGallery'>Photo Gallery</Link></li>
            <li><Link style={linkStyle} to='/Contact'>Contact</Link></li>
          </ul> }
      </nav>
    )
  }
}

export default Navigation
