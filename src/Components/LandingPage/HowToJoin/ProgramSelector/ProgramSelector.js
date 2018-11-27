import React, { Component } from 'react'

class ProgramSelector extends Component {
  render () {
    return (
      <div
        style={{display: 'flex', height: 80, width: 120, border: '2px solid #BDBDBD', borderRadius: 8, marginRight: '40px'}} >
        <div style={{height: 8, width: 8, border: '2px solid #BDBDBD', borderRadius: 6, margin: 'auto 6px'}}></div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h3 style={{fontSize: 20, margin: 0}}>{this.props.program}</h3>
          <p style={{fontSize: 16, margin: 0}}>${this.props.price}.00</p>
        </div>
      </div>
    )
  }
}

export default ProgramSelector