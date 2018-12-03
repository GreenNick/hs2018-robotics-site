import React from 'react'
import { number } from 'prop-types'
import styles from './PageIndicator.module.css'

const stylesArray = ['default', 'default', 'default', 'default', 'default']

const PageIndicator = props => {
  const indicatorArray = stylesArray.map((className, i) => {
    let newItem

    if (props.pageIndex < i) {
      newItem = (
        <div className={styles[className]} />
      )
    } else if (props.pageIndex > i) {
      newItem = (
        <div className={styles['previous']} />
      )
    } else if (props.pageIndex === i) {
      newItem = (
        <div className={styles['active']} />
      )
    }
    return newItem
  })

  return (
    <div className={styles.container}>
      { indicatorArray }
    </div>
  )
}

PageIndicator.propTypes = {
  pageIndex: number
}

export default PageIndicator
