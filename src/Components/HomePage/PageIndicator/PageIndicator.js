import React from 'react'
import { number } from 'prop-types'
import styles from './PageIndicator.module.css'

const PageIndicator = props => {
  switch (props.pageIndex) {
    case 0:
      return (
        <div className={styles.container}>
          <div className={styles.active} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
        </div>
      )
    case 1:
      return (
        <div className={styles.container}>
          <div className={styles.previous} />
          <div className={styles.active} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
        </div>
      )
    case 2:
      return (
        <div className={styles.container}>
          <div className={styles.previous} />
          <div className={styles.previous} />
          <div className={styles.active} />
          <div className={styles.default} />
          <div className={styles.default} />
        </div>
      )
    case 3:
      return (
        <div className={styles.container}>
          <div className={styles.previous} />
          <div className={styles.previous} />
          <div className={styles.previous} />
          <div className={styles.active} />
          <div className={styles.default} />
        </div>
      )
    case 4:
      return (
        <div className={styles.container}>
          <div className={styles.previous} />
          <div className={styles.previous} />
          <div className={styles.previous} />
          <div className={styles.previous} />
          <div className={styles.active} />
        </div>
      )
    default:
      return (
        <div className={styles.container}>
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
          <div className={styles.default} />
        </div>
      )
  }
}

PageIndicator.propTypes = {
  pageIndex: number
}

export default PageIndicator
