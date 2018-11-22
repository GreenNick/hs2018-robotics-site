import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BasicSection from '../organisms/BasicSection'
import Navigation from '../organisms/Navigation'
import PageIndicator from '../atoms/PageIndicator'

class Tsa extends Component {
  constructor (props) {
    super (props)
    this.state = {
      toNextPage: false,
      toPrevPage: false
    }
    this.handleWheel = this.handleWheel.bind(this)
  }

  handleWheel (event) {
    if (event.deltaY > 0) {
      this.setState(
        { toNextPage: true }
      )
    } else if (event.deltaY < 0) {
      this.setState(
        { toPrevPage: true }
      )
    }
  }

  render () {
    if (this.state.toPrevPage) {
      return <Redirect to='/tsa' />
    }

    return (
      <main onWheel={this.handleWheel} className='gradient-bg' >
        <BasicSection heading='What is STEM?' />
        <PageIndicator />
        <Navigation />
      </main>
    )
  }
}

export default Tsa