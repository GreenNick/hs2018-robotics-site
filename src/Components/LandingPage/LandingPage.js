import React, { Component } from 'react'
import BasicSection from '../BasicSection/BasicSection'
import Navigation from '../Navigation/Navigation'
import PageIndicator from './PageIndicator/PageIndicator'

const sectionContent = [
  { heading: 'What is VEX?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
  { heading: 'What is TSA?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
  { heading: 'What is STEM?',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac posuere metus. Praesent aliquet nulla quis ligula pharetra, vestibulum posuere arcu pretium. Integer et nisl fermentum, gravida mi ac, elementum eros. Phasellus pharetra consequat libero non faucibus. Nullam hendrerit imperdiet ipsum, eget tincidunt diam pharetra eu. Mauris sit amet lorem sed nibh placerat volutpat. Morbi suscipit aliquet augue ac fermentum. Etiam lacinia justo sit amet turpis dictum, auctor aliquet elit convallis. Nam hendrerit lorem non neque accumsan, quis aliquet orci tempus. Sed in condimentum magna. Ut maximus ipsum eget libero blandit rhoncus.' },
]

class LandingPage extends Component {
  constructor (props) {
    super (props)
    this.state = { pageIndex: 0 }
    this.handleWheel = this.handleWheel.bind(this)
  }

  handleWheel (event) {
    if (event.deltaY > 0 && this.state.pageIndex < 4) {
      this.setState((state) => ({
        pageIndex: state.pageIndex + 1
      }))
    } else if (event.deltaY < 0 && this.state.pageIndex > 0) {
      this.setState((state) => ({
        pageIndex: state.pageIndex - 1
      }))
    }
  }

  render () {
    console.log(this.state.pageIndex)
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
          <div
            style={{gridArea: 'section', display: 'grid', width: 1360, gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto', gridGap: 20, margin: 20, minHeight: 550}} >
            <section style={{gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '1', gridRowEnd: '4', margin: 0, flexDirection: 'column', justifyContent: 'initial'}}>
              <h2>How to join</h2>
              <h3>Enter your information</h3>
            </section>
            <section style={{gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '1', gridRowEnd: '2', margin: 0, flexDirection: 'column', justifyContent: 'initial'}}>
              <h3>Dues owed: </h3>
              <p>Dues must be payed in person to Mr. Hicks or a TSA Officer. After submitting, your information will be recorded, and you will receive an email detailing any further steps you need to take. Completing this form will not make you a member of your selected programs, it just lets us know that you are interested. </p>
            </section>
            <section style={{gridColumnStart: '2', gridColumnEnd: '3', gridRowStart: '2', gridRowEnd: '4', margin: 0, flexDirection: 'column', justifyContent: 'initial'}}>
              <h3>Program</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper neque non ante sollicitudin euismod. Aenean mattis, massa at mattis viverra, ipsum nisl dictum felis, et fermentum est ex a erat. Pellentesque eu magna porta, aliquam ligula a, bibendum libero. Mauris maximus finibus mi vel rhoncus. Proin ac odio lacus. Vestibulum sed urna sed lectus dignissim malesuada. Aliquam vitae est velit. Vivamus convallis, purus sit amet vehicula semper, dolor mauris sollicitudin eros, id porttitor erat augue vel lorem. Nulla vulputate risus at lorem lacinia, at iaculis nisl sagittis. </p>
            </section>
          </div>
          <PageIndicator pageIndex={this.state.pageIndex} />
          <Navigation />
        </main>
      )
    }
  }
}

export default LandingPage