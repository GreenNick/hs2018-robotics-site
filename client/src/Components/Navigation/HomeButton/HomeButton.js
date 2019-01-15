import React from 'react'
import { func } from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './HomeButton.module.css'

const HomeButton = props => {
  return (
    <Link to='/'>
      <img
        onClick={props.onClick}
        className={styles.homeButton}
        src='/Images/svg/Home.svg'
        alt='home' />
    </Link>
  )
}

HomeButton.propTypes = {
  onClick: func
}

export default HomeButton
