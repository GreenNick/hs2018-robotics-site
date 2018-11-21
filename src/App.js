import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/' component={Landing} exact />
      </BrowserRouter>
    )
  }
}

export default App