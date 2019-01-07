import React from 'react'
import styles from './PageButton.module.css'

const PageButton = props => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}>
      <img src='/Images/svg/Arrow.svg' alt='Next Page'/>
    </button>
  )
}

export default PageButton
