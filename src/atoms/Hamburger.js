import React, { Component } from 'react'

const hamburgerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: 24,
  width: 30,
  justifyContent: 'space-between',
  margin: '20px auto',
  padding: '8px 0'
}

const barStyle = {
  height: 4,
  borderRadius: 2,
  backgroundColor: 'white',
  display: 'block'
}

class Hamburger extends Component {
  render () {
    return (
      <div style={hamburgerStyle}>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
      </div>
    )
  }
}

export default Hamburger