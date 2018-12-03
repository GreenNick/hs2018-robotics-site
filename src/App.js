import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={HomePage} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
