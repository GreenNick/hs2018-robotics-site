import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import NavTuckerHigh from './Components/NavTuckerHigh/NavTuckerHigh'
import Nav2019Season from './Components/Nav2019Season/Nav2019Season'
import NavHistory from './Components/NavHistory/NavHistory'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={HomePage} exact />
          <Route path='/TuckerHigh' component={NavTuckerHigh} exact />
          <Route path='/2019Season' component={Nav2019Season} exact />
          <Route path='/History' component={NavHistory} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
