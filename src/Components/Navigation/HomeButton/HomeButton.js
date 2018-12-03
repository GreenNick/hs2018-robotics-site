import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from '../../../Images/svg/Home.svg'
import styles from './HomeButton.module.css'

const HomeButton = () => (
  <Link to='/'>
    <img
      className={styles.homeButton}
      src={homeImg}
      alt='home' />
  </Link>
)

export default HomeButton
