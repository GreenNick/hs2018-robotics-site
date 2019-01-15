import React, { Component } from 'react'
import { string, bool, func } from 'prop-types'
import styles from './ProgramSelector.module.css'

class ProgramSelector extends Component {
  static propTypes = {
    program: string,
    price: string,
    buttonActive: bool,
    onClick: func.isRequired
  }

  static defaultProps ={
    program: 'Program',
    price: '0'
  }

  render () {
    const selectorStyle = this.props.buttonActive
      ? { background: 'rgba(158, 213, 225, 0.2)', border: '2px solid #0097A7' }
      : { background: 'white', border: '' }

    const tickStyle = this.props.buttonActive
      ? { background: '#0097A7', border: '2px solid #0097A7' }
      : { background: 'white', border: '' }

    return (
      <div style={selectorStyle} className={styles.container} onClick={this.props.onClick} >
        <div style={tickStyle} className={styles.tickBox} ></div>
        <div className={styles.textBox} >
          <h3>{this.props.program}</h3>
          <p>${this.props.price}</p>
        </div>
      </div>
    )
  }
}

export default ProgramSelector
