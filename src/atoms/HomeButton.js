import React, { Component } from 'react'
import homeImg from '../pictures/svg/Home.svg'

const style = {
  width: 30,
  margin: 'auto',
  display: 'block',
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