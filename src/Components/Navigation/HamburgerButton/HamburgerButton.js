import React from 'react'

const hamburgerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: 24,
  width: 30,
  justifyContent: 'space-between',
  marginBottom: 20,
  padding: '8px 0',
  cursor: 'pointer'
}

const barStyle = {
  height: 4,
  borderRadius: 2,
  backgroundColor: 'white',
  display: 'block'
}

const HamburgerButton = props => (
  <div
    onClick={props.onClick}
    style={hamburgerStyle}>
    <div style={barStyle}></div>
    <div style={barStyle}></div>
    <div style={barStyle}></div>
  </div>
)

export default HamburgerButton