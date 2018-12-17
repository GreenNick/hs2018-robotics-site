import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import styles from './Contact.module.css'

class Contact extends Component {
  render () {
    return (
      <main>
        <div className="wrapper">
          <section className={styles.container}>
            <h2>Contact</h2>
            <div className={styles.form}>
              <h3 className={styles.heading}>Send us a message</h3>
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
                  placeholder="Tell us what's on your mind"
                  rows='12'></textarea>
                <input
                  type='submit'
                  value='Submit'
                  className={styles.submit} />
              </form>
            </div>
            <div className={styles.info}>
              <h3 className={styles.heading}>Tucker High School</h3>
              <p>
                5036 Lavista Rd <br />
                Tucker, GA 30084 <br />
                (678) 874-3702 <br />
                tuckerrobotigers@gmail.com
              </p>
              <hr />
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2968629690345!2d-84.21829048439588!3d33.85623948065977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a639f18977a3%3A0x571e231c5d648a4f!2sTucker+High+School!5e0!3m2!1sen!2sus!4v1544502940707' width='400' height='300' frameBorder='0' allowFullScreen title='map'></iframe>
            </div>
          </section>
        </div>
        <Navigation dark={true} />
      </main>
    )
  }
}

export default Contact
