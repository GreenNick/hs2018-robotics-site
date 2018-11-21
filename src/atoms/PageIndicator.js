import React, { Component } from 'react'

const containerStyle = {
  gridArea: 'header',
  height: 40,
  width: 160,
  padding: '0 8px',
  borderRadius: 20,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  margin: '20px 20px 20px auto',
  display: 'flex',
  justifyContent: 'space-around'
}

const indicatorStyle = {
  width: 10,
  height: 10,
  border: '2px solid white',
  display: 'block',
  margin: 'auto',
  borderRadius: 10
}

class PageIndicator extends Component {
  render () {
    return (
      <div style={containerStyle}>
        <div style={indicatorStyle}></div>
        <div style={indicatorStyle}></div>
        <div style={indicatorStyle}></div>
        <div style={indicatorStyle}></div>
        <div style={indicatorStyle}></div>
      </div>
    )
  }
}

export default PageIndicator