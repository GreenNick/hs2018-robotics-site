import React from 'react'
import { number } from 'prop-types'
import styles from './PageIndicator.module.css'

const PageIndicator = props => {
  switch (props.pageIndex) {
    case 0:
      return (
        <div className={styles.container}>
          <div className={styles.active}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
        </div>
      )
    case 1:
      return (
        <div className={styles.container}>
          <div className={styles.previous}></div>
          <div className={styles.active}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
        </div>
      )
    case 2:
      return (
        <div className={styles.container}>
          <div className={styles.previous}></div>
          <div className={styles.previous}></div>
          <div className={styles.active}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
        </div>
      )
    case 3:
      return (
        <div className={styles.container}>
          <div className={styles.previous}></div>
          <div className={styles.previous}></div>
          <div className={styles.previous}></div>
          <div className={styles.active}></div>
          <div className={styles.default}></div>
        </div>
      )
    case 4:
      return (
        <div className={styles.container}>
          <div className={styles.previous}></div>
          <div className={styles.previous}></div>
          <div className={styles.previous}></div>
          <div className={styles.previous}></div>
          <div className={styles.active}></div>
        </div>
      )
    default:
      return (
        <div className={styles.container}>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
          <div className={styles.default}></div>
        </div>
      )
  }
}

PageIndicator.propTypes = {
  pageIndex: number
}

export default PageIndicator