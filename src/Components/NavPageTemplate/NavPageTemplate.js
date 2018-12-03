import React from 'react'
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

export default NavPageTemplate
