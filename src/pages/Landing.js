import React, { Component } from 'react'
import Navigation from '../organisms/Navigation.js'
import PageIndicator from '../atoms/PageIndicator.js'

class Landing extends Component {
  render () {
    return (
      <main className='landing'>
        <div style={{gridArea: 'section'}}>
          <h1 style={{marginTop: 100}}>Tucker High<br></br>School</h1>
          <h1 style={{fontWeight: 'normal', fontSize: 64}}>Robotigers</h1>
        </div>
        <PageIndicator />
        <Navigation />
      </main>
    )
  }
}

export default Landing