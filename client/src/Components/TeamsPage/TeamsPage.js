import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import styles from './TeamsPage.module.css'
import Footer from '../Footer/Footer'

class TeamsPage extends Component {
  render () {
    return (
      <main>
        <h1 className='headerText'>Teams</h1>
        <div className='wrapper'>
          <div className={styles.container}>
            <Link
              to='/Teams/1320A'
              className={`${styles.teamContainer} animate`}>
              <img
                src='/Images/Teams/1320A/Team.jpg'
                alt='' />
              <h3>1320A</h3>
            </Link>
            <Link
              to='/Teams/1320B'
              className={`${styles.teamContainer} animate`}>
              <img
                src='/Images/Teams/1320B/Team.jpg'
                alt='' />
              <h3>1320B</h3>
            </Link>
            <Link
              to='/Teams/1320C'
              className={`${styles.teamContainer} animate`}>
              <img
                src='/Images/Teams/1320C/Team.jpg'
                alt='' />
              <h3>1320C</h3>
            </Link>
            <Link
              to='/Teams/1320D'
              className={`${styles.teamContainer} animate`}>
              <img
                src='/Images/Teams/1320D/Team.jpg'
                alt='' />
              <h3>1320D</h3>
            </Link>
            <Link
              to='/Teams/1320E'
              className={`${styles.teamContainer} animate`}>
              <img
                src='/Images/Teams/1320E/Team.jpg'
                alt='' />
              <h3>1320E</h3>
            </Link>
          </div>
        </div>
        <Footer />
        <Navigation dark={true} />
      </main>
    )
  }
}

export default TeamsPage
