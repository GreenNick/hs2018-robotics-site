import React, { Component } from 'react'
import './ProgramSelector.css'

class ProgramSelector extends Component {
  constructor (props) {
    super (props)
    this.state = {
      buttonActive: false,
      selectorStyle: {background: 'white', border: ''},
      tickStyle: {background: 'white', border: ''}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({ buttonActive: !this.state.buttonActive })
    if (this.state.buttonActive) {
      this.setState({selectorStyle: {background: 'rgba(158, 213, 225, 0.2)', border: '2px solid #0097A7'}})
      this.setState({tickStyle: {background: '#0097A7', border: '2px solid #0097A7'}})
    } else {
      this.setState({selectorStyle: {background: 'white', border: ''}})
      this.setState({tickStyle: {background: 'white', border: ''}})
    }
  }

  render () {
    return (
      <div style={this.state.selectorStyle} className='selector-container' onClick={this.handleClick} >
        <div style={this.state.tickStyle} className='tick-box' ></div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h3 style={{fontSize: 20, margin: 0}}>{this.props.program}</h3>
          <p style={{fontSize: 16, margin: 0}}>${this.props.price}.00</p>
        </div>
      </div>
    )
  }
}

export default ProgramSelector