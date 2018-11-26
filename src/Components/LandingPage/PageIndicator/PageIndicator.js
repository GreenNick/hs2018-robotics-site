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
  border: '3px solid white',
  display: 'block',
  margin: 'auto',
  borderRadius: 10
}

const activeIndicatorStyle = {
  width: 10,
  height: 10,
  backgroundColor: 'white',
  border: '3px solid white',
  display: 'block',
  margin: 'auto',
  borderRadius: 10
}

const prevIndicatorStyle = {
  width: 10,
  height: 10,
  backgroundColor: 'white',
  backgroundClip: 'content-box',
  border: '3px solid transparent',
  display: 'block',
  margin: 'auto',
  borderRadius: 10
}

class PageIndicator extends Component {
  render () {
    switch (this.props.pageIndex) {
      case (0):
        return (
          <div style={containerStyle}>
            <div style={activeIndicatorStyle}></div>
            <div style={indicatorStyle}></div>
            <div style={indicatorStyle}></div>
            <div style={indicatorStyle}></div>
            <div style={indicatorStyle}></div>
          </div>
        )
      case (1):
        return (
          <div style={containerStyle}>
            <div style={prevIndicatorStyle}></div>
            <div style={activeIndicatorStyle}></div>
            <div style={indicatorStyle}></div>
            <div style={indicatorStyle}></div>
            <div style={indicatorStyle}></div>
          </div>
        )
      case (2):
        return (
          <div style={containerStyle}>
            <div style={prevIndicatorStyle}></div>
            <div style={prevIndicatorStyle}></div>
            <div style={activeIndicatorStyle}></div>
            <div style={indicatorStyle}></div>
            <div style={indicatorStyle}></div>
          </div>
        )
      case (3):
        return (
          <div style={containerStyle}>
            <div style={prevIndicatorStyle}></div>
            <div style={prevIndicatorStyle}></div>
            <div style={prevIndicatorStyle}></div>
            <div style={activeIndicatorStyle}></div>
            <div style={indicatorStyle}></div>
          </div>
        )
      case (4):
        return (
          <div style={containerStyle}>
            <div style={prevIndicatorStyle}></div>
            <div style={prevIndicatorStyle}></div>
            <div style={prevIndicatorStyle}></div>
            <div style={prevIndicatorStyle}></div>
            <div style={activeIndicatorStyle}></div>
          </div>
        )
      default:
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
}

export default PageIndicator