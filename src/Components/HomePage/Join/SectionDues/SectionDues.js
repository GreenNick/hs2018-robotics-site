import React from 'react'
import styles from './SectionDues.module.css'

const SectionDues = props => (
  <section className={styles.container}>
    <h3>Dues owed: ${props.subtotal}</h3>
    <p>Dues must be payed in person to Mr. Hicks or a TSA Officer. After submitting, your information will be recorded, and you will receive an email detailing any further steps you need to take. Completing this form will not make you a member of your selected programs, it just lets us know that you are interested. </p>
  </section>
)

export default SectionDues
