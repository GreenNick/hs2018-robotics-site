import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './TeamsPage.module.css'

class TeamsPage extends Component {
  render () {
    return (
      <main className={styles.background}>
        <h1 className={styles.header}>Teams</h1>
        <div className={styles.container}>
          <div className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320A</h3>
          </div>
          <div className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320B</h3>
          </div>
          <div className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320C</h3>
          </div>
          <div className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320D</h3>
          </div>
          <div className={styles.teamContainer}>
            <img
              src='/Images/TeamImages/1320D.JPG'
              alt='' />
            <h3>1320E</h3>
          </div>
        </div>
        <Navigation style={{ backgroundColor: '#353535', opacity: '0.8' }} />
      </main>
    )
  }
}

export default TeamsPage
