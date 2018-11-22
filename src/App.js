import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Vex from './pages/Vex'
import Tsa from './pages/Tsa'
import Stem from './pages/Stem'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Landing} exact />
          <Route path='/vex' component={Vex} />
          <Route path='/tsa' component={Tsa} />
          <Route path='/stem' component={Stem} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App