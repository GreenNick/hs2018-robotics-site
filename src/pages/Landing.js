import React, { Component } from 'react'
import Navigation from '../organisms/Navigation'
import PageIndicator from '../atoms/PageIndicator'

class Landing extends Component {
  render () {
    return (
      <main className='landing'>
        <div style={{gridArea: 'section'}}>
          <h1 style={{marginTop: 100}}>
            Tucker High
            <br />
            School
          </h1>
          <h1 style={{fontWeight: 'normal', fontSize: 56}}>Robotigers</h1>
        </div>
        <PageIndicator />
        <Navigation />
      </main>
    )
  }
}

export default Landing