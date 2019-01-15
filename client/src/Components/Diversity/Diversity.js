import React, { Component } from 'react'
import styles from './Diversity.module.css'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

class Diversity extends Component {
  render() {
    return (
      <main>
        <h1 className='headerText'>Diversity</h1>
        <div className='wrapper'>
          <section>
            <img src='#' alt='' />
            <div>
              <h2>Cultures</h2>
              <p>Tucker High School is home to rich cultural diversity. Students from around the globe share their unique identities which account for a major portion of our school’s name itself. Tucker High School’s diverse population is important when it comes to prospering in the many different clubs and organizations we have, in addition to VEX and TSA. Diversity opens us up to new perspectives and imparts different ways to approach problems. This approach to problem-solving is especially valuable in the STEM field which is often far too homogenous. Our school’s ability to encourage this diversity, and often students of minority, has allowed students to pursue their unheard ambitions and seek futures in the STEM field. In doing so, we hope to raise a new generation of engineers with a unique outlook on the world.</p>
            </div>
          </section>
          <section>
            <div>
              <h2>Girls and STEM</h2>
              <p>With the growing demand for careers in the STEM field, the demand for girls in the STEM field is also increasing. Girls are full of untapped potential in the STEM world. Because these fields of study are predominantly male, talents possessed by girls in the STEM field may sometimes go unseen. This disregard for their talents does not allow for girls to pursue their ambitions in the STEM field, acting as hindrances to the STEM world. By overlooking their strengths and capacities, the STEM world will remain handicapped from reaching the fullest of our abilities. We hope to help remedy this by encouraging girls to pursue STEM as a career path, by introducing STEM-driven organizations, such as VEX and TSA. By fostering a healthy environment at our school, we aim to provide an efficient learning environment for girls who may not always feel comfortable in pursuing careers in the STEM field.  In doing so, we hope to see the world move in this positive direction.</p>
            </div>
            <img src='/Images/Diversity/GirlsAndSTEM.jpg' alt='' />
          </section>
          <section className={styles.students}>
            <h2>Student Body</h2>
            <ul className={styles.collage}>
              <li><img src='#' alt='' /></li>
              <li><img src='#' alt='' /></li>
              <li><img src='#' alt='' /></li>
              <li><img src='#' alt='' /></li>
              <li><img src='#' alt='' /></li>
              <li><img src='#' alt='' /></li>
            </ul>
          </section>
        </div>
        <Footer />
        <Navigation dark={true} />
      </main>
    )
  }
}

export default Diversity
