import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomeButton.module.css'

const HomeButton = () => (
  <Link to='/'>
    <img
      className={styles.homeButton}
      src='/Images/svg/Home.svg'
      alt='home' />
  </Link>
)

export default HomeButton
