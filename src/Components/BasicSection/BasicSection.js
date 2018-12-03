import React from 'react'
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

export default BasicSection
