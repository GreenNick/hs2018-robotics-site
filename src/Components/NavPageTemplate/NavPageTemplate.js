import React from 'react'
import { string, array } from 'prop-types'
import Navigation from '../Navigation/Navigation'
import styles from './NavPageTemplate.module.css'

const NavPageTemplate = props => {
  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <h4>{props.heading}</h4>
        <ul>
          {props.children}
        </ul>
      </div>
      <Navigation />
    </main>
  )
}

NavPageTemplate.propTypes = {
  heading: string.isRequired,
  children: array.isRequired
}

export default NavPageTemplate
