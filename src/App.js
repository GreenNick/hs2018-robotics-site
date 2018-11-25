import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={LandingPage} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App