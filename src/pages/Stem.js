import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BasicSection from '../organisms/BasicSection'
import Navigation from '../organisms/Navigation'
import PageIndicator from '../atoms/PageIndicator'

const sectionContent = {
  heading: 'What is STEM?',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.'
}

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
        <BasicSection heading={sectionContent.heading} paragraph={sectionContent.paragraph} />
        <PageIndicator />
        <Navigation />
      </main>
    )
  }
}

export default Tsa