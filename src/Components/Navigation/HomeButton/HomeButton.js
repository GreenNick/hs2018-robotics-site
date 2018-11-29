import React from 'react'
import homeImg from '../../../Images/svg/Home.svg'

const style = {
  width: 30,
  display: 'block',
  marginBottom: 20,
  cursor: 'pointer'
}

const HomeButton = () => (
  <img
    style={style}
    src={homeImg}
    alt='home' />
)

export default HomeButton