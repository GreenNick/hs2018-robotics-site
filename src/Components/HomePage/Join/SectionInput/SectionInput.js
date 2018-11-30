import React from 'react'
import styles from './SectionInput.module.css'

const SectionInput = props => (
  <section className={styles.container}>
    <h2>How to join</h2>
    <h3>Enter your information</h3>
    { props.children }
  </section>
)

export default SectionInput