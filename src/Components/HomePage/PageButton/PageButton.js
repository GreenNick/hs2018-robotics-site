import React from 'react'
import { func } from 'prop-types'
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

PageButton.propTypes = {
  onClick: func
}

export default PageButton
