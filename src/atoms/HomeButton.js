import React, { Component } from 'react'
import homeImg from '../pictures/svg/Home.svg'

const style = {
  width: 30,
  display: 'block',
  marginBottom: 20,
  cursor: 'pointer'
}

class HomeButton extends Component {
  render () {
    return (
      <img style={style} src={homeImg} />
    )
  }
}

export default HomeButton