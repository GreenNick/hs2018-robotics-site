import React from 'react'
import { string } from 'prop-types'
import styles from './BasicSection.module.css'

const BasicSection = props => {
  return (
    <section className={styles.section}>
      <div>
        <h2>{props.heading}</h2>
        <p>{props.paragraph}</p>
      </div>
      <img src={props.src} alt={props.alt} />
    </section>
  )
}

BasicSection.propTypes = {
  heading: string.isRequired,
  paragraph: string.isRequired,
  src: string,
  alt: string
}

export default BasicSection
