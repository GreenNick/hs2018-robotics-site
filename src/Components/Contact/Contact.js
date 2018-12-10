import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Contact.module.css'

class Contact extends Component {
  render () {
    return (
      <main>
        <section className={styles.container}>
          <h2>Contact</h2>
          <div className={styles.col1}>
            <h3>Send us a message</h3>
            <form>
              <label htmlFor='name'>Name</label>
              <input
                className={styles.input}
                type='text'
                id='name'
                placeholder='Enter your full name' />
              <label htmlFor='email'>Email</label>
              <input
                className={styles.input}
                type='email'
                id='email'
                placeholder='Enter your email address' />
              <label htmlFor='message'>Message</label>
              <textarea
                className={styles.input}
                id='message'
                placeholder='Tell us what is on your mind'
                rows='12'></textarea>
              <input type='submit' value='Submit' />
            </form>
          </div>
          <div className={styles.col2}>
            <h3>Tucker High School</h3>
            <p>
              5036 LaVista Rd <br />
              Tucker, GA 30084 <br />
              (678) 874-3702 <br />
              tuckerrobotigers@gmail.com
            </p>
            <hr />
            <div className={styles.map}></div>
          </div>
        </section>
        <Navigation />
      </main>
    )
  }
}

export default Contact
