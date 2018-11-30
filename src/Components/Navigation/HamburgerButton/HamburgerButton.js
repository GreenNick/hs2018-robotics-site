import React from 'react'
import { func } from 'prop-types'
import styles from './HamburgerButton.module.css'

const HamburgerButton = props => (
  <div
    onClick={props.onClick}
    className={styles.container}>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
  </div>
)

HamburgerButton.propTypes = {
  onClick: func.isRequired
}

export default HamburgerButton