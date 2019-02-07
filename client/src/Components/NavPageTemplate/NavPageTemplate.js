import React from 'react'
import { Link } from 'react-router-dom'
import { string, array } from 'prop-types'
import Navigation from '../Navigation/Navigation'
import styles from './NavPageTemplate.module.css'

const NavPageTemplate = props => {
  const linkArray = props.links
    .map((linkItem, i) => {
      return (
        <Link
          key={i}
          to={linkItem.url}
          className={styles.link}>
          <li>{linkItem.title}</li>
        </Link>
      )
    })

  return (
    <main className={styles.background}>
      <div className={styles.container}>
        <h4>{props.heading}</h4>
        <ul>{linkArray}</ul>
      </div>
      <Navigation />
    </main>
  )
}

NavPageTemplate.propTypes = {
  heading: string.isRequired,
  links: array.isRequired
}

export default NavPageTemplate
