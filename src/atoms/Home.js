import React, { Component } from 'react'
import homeButton from '../images/svg/Home.svg'

const style = {
  width: 30,
  margin: 'auto',
  display: 'block'
}

class Home extends Component {
  render () {
    return (
      <img style={style} src={homeButton} alt='Home Button'/>
    )
  }
}

export default Home