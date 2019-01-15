import React from 'react'
import { array } from 'prop-types'
import styles from './SectionInput.module.css'

const SectionInput = props => {
  return (
    <section className={styles.container}>
      <h2>How to join</h2>
      <h3>Enter your information</h3>
      { props.children }
    </section>
  )
}

SectionInput.propTypes = {
  children: array
}

export default SectionInput
