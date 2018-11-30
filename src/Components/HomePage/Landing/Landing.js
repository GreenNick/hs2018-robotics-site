import React from 'react'
import styles from './Landing.module.css'

const Landing = props => (
  <main
    onWheel={props.onWheel}
    className={styles.background}>
    <div className={styles.container}>
      <h1>
        Tucker High
        <br />
        School
      </h1>
      <h1 className={styles.subtitle}>Robotigers</h1>
    </div>
    { props.children }
  </main>
)

export default Landing