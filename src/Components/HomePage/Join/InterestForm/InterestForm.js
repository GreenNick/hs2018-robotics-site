import React from 'react'
import styles from './InterestForm.module.css'

const InterestForm = props => (
  <form>
    <label htmlFor='name'>Full Name</label>
    <input type='text' id='name'></input>
    <label htmlFor='email'>Email Address</label>
    <input type='email' id='email'></input>
    <label htmlFor='phone-number'>Phone Number</label>
    <input type='tel' id='phone-number' ></input>
    <label htmlFor='grade-level'>Grade Level</label>
    <div className={styles.selectContainer}>
      <select id='grade-level' >
        <option value='freshman'>Freshman</option>
        <option value='sophomore'>Sophomore</option>
        <option value='junior'>Junior</option>
        <option value="senior">Senior</option>
      </select>
    </div>
    <input type='submit' value='Submit' />
  </form>
)

export default InterestForm