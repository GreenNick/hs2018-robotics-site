import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import NavTuckerHigh from './Components/NavTuckerHigh/NavTuckerHigh'
import Nav2019Season from './Components/Nav2019Season/Nav2019Season'
import NavHistory from './Components/NavHistory/NavHistory'
import TeamsPage from './Components/TeamsPage/TeamsPage'
import Contact from './Components/Contact/Contact'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={HomePage} exact />
          <Route path='/TuckerHigh' component={NavTuckerHigh} exact />
          <Route path='/2019Season' component={Nav2019Season} exact />
          <Route path='/History' component={NavHistory} exact />
          <Route path='/Teams' component={TeamsPage} exact />
          <Route path='/Contact' component={Contact} exact />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
