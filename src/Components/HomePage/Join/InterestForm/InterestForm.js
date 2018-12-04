import React from 'react'
import styles from './InterestForm.module.css'

const InterestForm = props => (
  <form>
    <label htmlFor='name'>Name</label>
    <input
      type='text'
      id='name'
      placeholder='Enter your full name' />
    <label htmlFor='email'>Email</label>
    <input
      type='email'
      id='email'
      placeholder='Enter your email address' />
    <label htmlFor='phone-number'>Phone Number</label>
    <input
      type='tel'
      id='phone-number'
      placeholder='(XXX) XXX-XXXX'
      maxLength='14'
      onChange={props.onChange}
      onKeyDown={props.onKeyDown} />
    <label htmlFor='grade-level'>Grade Level</label>
    <div className={styles.selectContainer}>
      <select id='grade-level' >
        <option value='freshman'>Freshman</option>
        <option value='sophomore'>Sophomore</option>
        <option value='junior'>Junior</option>
        <option value='senior'>Senior</option>
      </select>
    </div>
    <input type='submit' value='Submit' />
  </form>
)

export default InterestForm
