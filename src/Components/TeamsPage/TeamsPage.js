import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import styles from './TeamsPage.module.css'

class TeamsPage extends Component {
  render () {
    return (
      <main>
        <h1 className={styles.header}>Teams</h1>
        <div className={styles.container}>
          <Link
            to='/Teams/1320A'
            className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320A</h3>
          </Link>
          <Link
            to='/Teams/1320B'
            className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320B</h3>
          </Link>
          <Link
            to='/Teams/1320C'
            className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320C</h3>
          </Link>
          <Link
            to='/Teams/1320D'
            className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320D</h3>
          </Link>
          <Link
            to='/Teams/1320E'
            className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320E</h3>
          </Link>
        </div>
        <Navigation dark={true} />
      </main>
    )
  }
}

export default TeamsPage
