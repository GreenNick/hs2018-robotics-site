import React, { Component } from 'react'
import { string, number } from 'prop-types'
import styles from'./ProgramSelector.module.css'

class ProgramSelector extends Component {
  state = { buttonActive: false }

  static propTypes = {
    program: string,
    price: number
  }

  static defaultProps ={
    program: 'Program',
    price: 0
  }

  handleClick = () => {
    this.setState(prevState => ({ buttonActive: !prevState.buttonActive }))
  }

  render () {
    const selectorStyle = this.state.buttonActive ?
      { background: 'rgba(158, 213, 225, 0.2)', border: '2px solid #0097A7' } :
      { background: 'white', border: '' }

    const tickStyle = this.state.buttonActive ?
      { background: '#0097A7', border: '2px solid #0097A7'  } :
      { background: 'white', border: '' }

    return (
      <div style={selectorStyle} className={styles.container} onClick={this.handleClick} >
        <div style={tickStyle} className={styles.tickBox} ></div>
        <div className={styles.textBox} >
          <h3>{this.props.program}</h3>
          <p>${this.props.price}.00</p>
        </div>
      </div>
    )
  }
}

export default ProgramSelector