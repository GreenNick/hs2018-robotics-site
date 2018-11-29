import React, { Component } from 'react'
import BasicSection from '../BasicSection/BasicSection'
import Navigation from '../Navigation/Navigation'
import PageIndicator from './PageIndicator/PageIndicator'
import HowToJoin from './HowToJoin/HowToJoin'

const sectionContent = [
  { heading: 'What is VEX?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
  { heading: 'What is TSA?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
  { heading: 'What is STEM?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
]

class LandingPage extends Component {
  state = { pageIndex: 0 }

  handleWheel = event => {
    if (event.deltaY > 0 && this.state.pageIndex < 4) {
      this.setState(prevState => ({ pageIndex: prevState.pageIndex + 1 }))
    } else if (event.deltaY < 0 && this.state.pageIndex > 0) {
      this.setState(prevState => ({ pageIndex: prevState.pageIndex - 1 }))
    }
  }

  render () {
    if (this.state.pageIndex === 0) {
      return (
        <main
          onWheel={this.handleWheel}
          className='landing' >
          <div style={{gridArea: 'section'}}>
            <h1 style={{marginTop: 100}}>
              Tucker High
              <br />
              School
            </h1>
            <h1 style={{fontWeight: 'normal', fontSize: 56}}>Robotigers</h1>
          </div>
          <PageIndicator pageIndex={this.state.pageIndex} />
          <Navigation />
        </main>
      )
    } else if (this.state.pageIndex < 4) {
      return (
        <main
          onWheel={this.handleWheel}
          className='gradient-bg' >
          <BasicSection
            heading={sectionContent[this.state.pageIndex - 1].heading}
            paragraph={sectionContent[this.state.pageIndex - 1].paragraph} />
          <PageIndicator pageIndex={this.state.pageIndex} />
          <Navigation />
        </main>
      )
    } else {
      return (
        <main
          onWheel={this.handleWheel}
          className="gradient-bg" >
          <HowToJoin />
          <PageIndicator pageIndex={this.state.pageIndex} />
          <Navigation />
        </main>
      )
    }
  }
}

export default LandingPage