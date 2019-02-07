import React from 'react'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className='wrapper'>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Tucker High
          <br />
          School
        </h1>
        <h1 className={styles.subtitle}>Robotigers</h1>
      </div>
    </div>
  )
}

export default Landing
