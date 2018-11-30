import React from 'react'
import homeImg from '../../../Images/svg/Home.svg'
import styles from './HomeButton.module.css'

const HomeButton = () => (
  <img
    className={styles.homeButton}
    src={homeImg}
    alt='home' />
)

export default HomeButton