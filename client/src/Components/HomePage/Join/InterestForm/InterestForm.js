import React from 'react'
import { func } from 'prop-types'
import styles from './InterestForm.module.css'

const InterestForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        onChange={props.onChange}
        value={props.name}
        type='text'
        name='name'
        placeholder='Enter your full name' />
      <label htmlFor='email'>Email</label>
      <input
        onChange={props.onChange}
        value={props.email}
        type='email'
        name='email'
        placeholder='Enter your email address' />
      <label htmlFor='phone'>Phone Number</label>
      <input
        value={props.phone}
        type='tel'
        name='phone'
        placeholder='(XXX) XXX-XXXX'
        maxLength='14'
        onChange={props.onTelChange} />
      <label htmlFor='grade'>Grade Level</label>
      <div className={styles.selectContainer}>
        <select
          onChange={props.onChange}
          value={props.grade}
          name='grade' >
          <option value='freshman'>Freshman</option>
          <option value='sophomore'>Sophomore</option>
          <option value='junior'>Junior</option>
          <option value='senior'>Senior</option>
        </select>
      </div>
      <input type='submit' value='Submit' />
    </form>
  )
}

InterestForm.propTypes = {
  onChange: func.isRequired
}

export default InterestForm
